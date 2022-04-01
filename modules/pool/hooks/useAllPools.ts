import { useMemo } from "react";
import { gql } from "graphql-request";
import { num, useAddress } from "@arthuryeti/terra";
import useLocalStorage from "hooks/useLocalStorage";
import {
  getPoolTokenDenoms,
  useAstroswap,
  useContracts,
  useLunaPriceInUst,
  useTokenInfo,
  useTokenPrices,
  useHiveEndpoint,
  Asset,
  PairResponse,
  requestInChunks,
} from "modules/common";
import { usePoolsInfo } from "modules/pool";
import { getAssetAmountsInPool } from "libs/terra";
import { ONE_TOKEN, QUERY_STALE_TIME } from "constants/constants";
import { useBLunaPriceInLuna } from "modules/swap";
import { useQuery } from "react-query";

export type AllPoolsPool = {
  inUse: boolean;
  favorite: boolean;
  contract: string;
  assets: string[];
  poolAssets: Asset[];
  sortingAssets: string[];
  pairType: string;
  totalLiquidity: number;
  totalLiquidityInUst: number;
  myLiquidity: number;
  myLiquidityInUst: number;
  _24hr_volume: number;
  rewards: {
    pool: number;
    astro: number;
    protocol: number;
    total: number;
    apy: number;
    token_symbol: string;
  };
  canManage: boolean;
  canStake: boolean;
  isStakable: boolean;
};

const createQuery = (pairs, address, generator) => {
  return gql`
    {
      ${pairs.map(({ liquidity_token, contract_addr }) => {
        return `
          ${contract_addr}: wasm {
            contractQuery(
              contractAddress: "${contract_addr}"
              query: {
                pool: { }
              }
            )
          }
          ${liquidity_token}: wasm {
            contractQuery(
              contractAddress: "${liquidity_token}"
              query: {
                balance: {
                  address: "${address}"
                }
              }
            )
          }
          staked${liquidity_token}: wasm {
            contractQuery(
              contractAddress: "${generator}"
              query: {
                deposit: {
                  lp_token: "${liquidity_token}"
                  user: "${address}"
                }
              }
            )
          }
        `;
      })}
    }
`;
};

const createQueryNotConnected = (pairs) => {
  return gql`
    {
      ${pairs.map(({ contract_addr }) => {
        return `
          ${contract_addr}: wasm {
            contractQuery(
              contractAddress: "${contract_addr}"
              query: {
                pool: { }
              }
            )
          }
        `;
      })}
    }
`;
};

export const useAllPools = () => {
  const { pairs } = useAstroswap();
  const { generator, stakableLp } = useContracts();
  const address = useAddress();
  const lunaPrice = useLunaPriceInUst();
  const bLunaPriceInLuna = useBLunaPriceInLuna();
  const poolsInfo = usePoolsInfo();
  const { getSymbol, getDecimals } = useTokenInfo();
  const [favoritesPools] = useLocalStorage("favoritesPools", []);
  const tokensInUst = useTokenPrices();
  const { hiveEndpoint, fallbackHiveEndpoint } = useHiveEndpoint();

  const queryBuilder = address
    ? (chunk) => createQuery(chunk, address, generator)
    : (chunk) => createQueryNotConnected(chunk);

  let firstAttempt = true;
  const { data: result } = useQuery(
    ["pools", "all", address],
    () => {
      const url = firstAttempt ? hiveEndpoint : fallbackHiveEndpoint;
      firstAttempt = false;
      // Chunk pairs into multiple queries to stay below GraphQL query size limitations
      return requestInChunks<PairResponse>(50, url, pairs, queryBuilder);
    },
    {
      enabled: pairs.length > 0,
      staleTime: QUERY_STALE_TIME,
      retry: 1,
    }
  );

  const getPoolInfo = (addr) => {
    return poolsInfo.find((poolInfo) => poolInfo.pool_address === addr);
  };

  return useMemo((): AllPoolsPool[] => {
    if (result == null) {
      return [];
    }

    return pairs.map(
      ({ contract_addr, liquidity_token, pair_type }): AllPoolsPool => {
        const poolInfo = getPoolInfo(contract_addr);
        const providedBalance = result[liquidity_token]?.contractQuery.balance;

        // in the event of switching networks, pair and price queries are still being refetched
        // and pool info may not be in the result yet.
        if (!result[contract_addr]) return;

        const { total_share, assets } = result[contract_addr].contractQuery;
        const stakedBalance = result[`staked${liquidity_token}`]?.contractQuery;
        const denoms = getPoolTokenDenoms(assets);
        const [token1, token2] = denoms;
        const balance = num(providedBalance).plus(stakedBalance);

        let totalLiquidityInUst = poolInfo?.pool_liquidity;

        if (!totalLiquidityInUst) {
          const { token1: uusd } = getAssetAmountsInPool(assets, "uusd");
          totalLiquidityInUst = num(uusd)
            .div(ONE_TOKEN)
            .times(2)
            .dp(6)
            .toNumber();
        }

        if (
          contract_addr === "terra1j66jatn3k50hjtg2xemnjm8s7y8dws9xqa5y8w" ||
          contract_addr === "terra1esle9h9cjeavul53dqqws047fpwdhj6tynj5u4"
        ) {
          // bluna-luna pool
          const { token1: uluna, token2: uluna2 } = getAssetAmountsInPool(
            assets,
            "uluna"
          );
          totalLiquidityInUst = num(uluna)
            .plus(num(uluna2).times(bLunaPriceInLuna))
            .div(ONE_TOKEN)
            .times(lunaPrice)
            .dp(6)
            .toNumber();
        }

        if (!totalLiquidityInUst) {
          // non-ust pool, bluna-luna pool
          const token2UstValue = tokensInUst[token2];
          const token2Decimals = getDecimals(token2);

          totalLiquidityInUst = num(token2UstValue)
            .times(assets[1].amount)
            .div(10 ** token2Decimals)
            .times(2)
            .dp(6)
            .toNumber();
        }

        const totalLiquidity = num(total_share).div(ONE_TOKEN).dp(6).toNumber();
        const myLiquidity = num(balance).div(ONE_TOKEN).dp(6).toNumber();
        const myLiquidityInUst = num(balance)
          .div(ONE_TOKEN)
          .times(totalLiquidityInUst)
          .div(num(total_share).div(ONE_TOKEN))
          .dp(6)
          .toNumber();

        const isStakable = stakableLp.includes(liquidity_token);

        return {
          inUse: balance.gt(0),
          favorite: favoritesPools.indexOf(denoms.toString()) > -1,
          contract: contract_addr,
          assets: denoms,
          poolAssets: assets,
          sortingAssets: [
            getSymbol(token1).toLowerCase(),
            getSymbol(token2).toLowerCase(),
            token1,
            token2,
            contract_addr,
          ],
          pairType: Object.keys(pair_type)[0],
          totalLiquidity,
          totalLiquidityInUst,
          myLiquidity,
          myLiquidityInUst,
          _24hr_volume: poolInfo?._24hr_volume,
          rewards: {
            pool: poolInfo?.trading_fees?.apy || 0,
            astro: poolInfo?.astro_rewards?.apr || 0,
            protocol: poolInfo?.protocol_rewards?.apr || 0,
            total: poolInfo?.total_rewards?.apr || 0,
            apy: poolInfo?.total_rewards?.apy || 0,
            token_symbol: poolInfo?.token_symbol,
          },
          canManage: myLiquidity > 0,
          canStake: num(providedBalance).gt(0),
          isStakable,
        };
      }
    );
  }, [lunaPrice, pairs, result, poolsInfo, favoritesPools]);
};

export default useAllPools;
