import { useMemo } from "react";
import { gql } from "graphql-request";
import { num, useAddress } from "@arthuryeti/terra";
import { sortBy, compact } from "lodash";

import {
  getPoolTokenDenoms,
  useAstroswap,
  useLunaPrice,
  useHive,
  getTokenDenoms,
  useContracts,
  useTokenInfo,
} from "modules/common";
import { usePoolsApy } from "modules/pool";
import { getAssetAmountsInPool } from "libs/terra";
import { ONE_TOKEN } from "constants/constants";
import { useBLunaPriceInLuna } from "modules/swap";

const createQuery = (pairs, address, generator) => {
  if (pairs.length === 0) {
    return;
  }

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
  if (pairs.length === 0) {
    return;
  }

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
  const { generator } = useContracts();
  const address = useAddress();
  const lunaPrice = useLunaPrice();
  const bLunaPrice = useBLunaPriceInLuna();
  const poolsApy = usePoolsApy();
  const { getSymbol } = useTokenInfo();

  let query = createQueryNotConnected(pairs);

  if (address) {
    query = createQuery(pairs, address, generator);
  }

  const result = useHive({
    name: ["pools", "all", address],
    query,
    options: {
      enabled: !!query,
    },
  });

  const getPoolApy = (addr) => {
    return poolsApy.find((poolApy) => poolApy.pool_address === addr);
  };

  return useMemo(() => {
    if (result == null) {
      return [];
    }

    const items = pairs.map(({ contract_addr, liquidity_token, pair_type }) => {
      const poolApy = getPoolApy(contract_addr);
      const balance = result[liquidity_token]?.contractQuery.balance;
      const staked = result[`staked${liquidity_token}`]?.contractQuery;
      const { total_share, assets } = result[contract_addr].contractQuery;
      const denoms = getPoolTokenDenoms(assets);
      const [token1, token2] = denoms;
      const token1Symbol = getSymbol(token1);
      const token2Symbol = getSymbol(token2);
      const { token1Amount } = getAssetAmountsInPool(assets, "uusd");

      if (num(balance).gt(0) || num(staked).gt(0)) {
        return null;
      }

      let amountOfUst = num(token1Amount).div(ONE_TOKEN).times(2).dp(6).toNumber();

      if (token1Amount == null) {
        const { token1Amount: uluna, token2 } = getAssetAmountsInPool(
          assets,
          "uluna"
        );

        amountOfUst = num(uluna)
          .plus(num(token2).times(bLunaPrice))
          .div(ONE_TOKEN)
          .times(lunaPrice)
          .dp(6)
          .toNumber();
      }

      const totalLiquidityInUst = amountOfUst;
      const totalLiquidity = num(total_share).div(ONE_TOKEN).dp(6).toNumber();

      const myLiquidity = num(balance).div(ONE_TOKEN).dp(6).toNumber();
      const myLiquidityInUst = num(balance)
        .div(ONE_TOKEN)
        .times(totalLiquidityInUst)
        .div(num(total_share).div(ONE_TOKEN))
        .dp(6)
        .toNumber();

      return {
        contract: contract_addr,
        assets: denoms,
        sortingAssets: token1Symbol.toLowerCase() + " " + token2Symbol.toLowerCase() + " " + token1 + " " + token2 + " " + contract_addr,
        pairType: Object.keys(pair_type)[0],
        totalLiquidity,
        totalLiquidityInUst,
        myLiquidity,
        myLiquidityInUst,
        apy: {
          pool: poolApy?.trading_fees?.apy || 0,
          astro: poolApy?.astro_rewards?.apy || 0,
          protocol: poolApy?.protocol_rewards?.apy || 0,
          total: poolApy?.total_rewards?.apy || 0,
          reward_symbol: poolApy?.token_symbol,
        },
      };
    });

    return sortBy(compact(items), "totalLiquidityInUst").reverse();
  }, [lunaPrice, pairs, result, bLunaPrice, poolsApy]);
};

export default useAllPools;
