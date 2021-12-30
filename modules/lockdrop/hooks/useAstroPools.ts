import { useMemo } from "react";
import { num } from "@arthuryeti/terra";
import { gql } from "graphql-request";
import { sortBy } from "lodash";
import dayjs from "dayjs";

import { ONE_TOKEN } from "constants/constants";
import {
  getPoolTokenDenoms,
  useAstroswap,
  useContracts,
  useLunaPrice,
} from "modules/common";
import { useUserInfo } from "modules/lockdrop";
import { useHive } from "hooks/useHive";
import { getAssetAmountsInPool } from "libs/terra";
import { useBLunaPriceInLuna } from "modules/swap";

const createQuery = (pairs, address) => {
  if (pairs.length === 0) {
    return;
  }

  return gql`
    {
      ${pairs.map(({ liquidity_token, contract_addr }) => {
        return `
          pool${liquidity_token}: wasm {
            contractQuery(
              contractAddress: "${contract_addr}"
              query: {
                pool: { }
              }
            )
          }

          balance${liquidity_token}: wasm {
            contractQuery(
              contractAddress: "${liquidity_token}"
              query: {
                balance: {
                  address: "${address}"
                }
              }
            )
          }
        `;
      })}
    }
`;
};

export const useAstroPools = () => {
  const { pairs } = useAstroswap();
  const { lockdrop } = useContracts();
  const lunaPrice = useLunaPrice();
  const userInfo = useUserInfo();
  const bLunaPrice = useBLunaPriceInLuna();
  const currentTimestamp = dayjs().unix();

  const query = createQuery(pairs, lockdrop);

  const result = useHive({
    name: "astro-pools",
    query,
    options: {
      enabled: !!query,
    },
  });

  return useMemo(() => {
    if (userInfo == null || result == null) {
      return [];
    }

    const filteredItems = userInfo.lockup_infos.filter((info) => {
      return (
        info.astroport_lp_transferred == null &&
        result[`pool${info.astroport_lp_token}`] != null
      );
    });

    const items = filteredItems.map((info) => {
      const { assets, total_share } =
        result[`pool${info.astroport_lp_token}`]?.contractQuery;
      const { balance } =
        result[`balance${info.astroport_lp_token}`]?.contractQuery;
      const pair = pairs.find(
        (pair) => pair.liquidity_token == info.astroport_lp_token
      );
      const { token1 } = getAssetAmountsInPool(assets, "uusd");

      let amountOfUst = num(token1).div(ONE_TOKEN).times(2).dp(6).toNumber();

      if (token1 == null) {
        const { token1: uluna, token2 } = getAssetAmountsInPool(
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

      const totalLiquidity = num(balance).div(ONE_TOKEN).toNumber();
      const myLiquidity = num(info.astroport_lp_units)
        .div(ONE_TOKEN)
        .toNumber();
      const myLiquidityInUst = num(myLiquidity)
        .times(totalLiquidityInUst)
        .div(num(total_share).div(ONE_TOKEN))
        .toNumber();

      return {
        name: info.terraswap_lp_token,
        astroLpToken: info.astroport_lp_token,
        assets: getPoolTokenDenoms(assets),
        pairType: Object.keys(pair?.pair_type)[0],
        totalLiquidity,
        totalLiquidityInUst,
        myLiquidity,
        myLiquidityInUst,
        lockEnd: info.unlock_timestamp,
        isClaimable: currentTimestamp > info.unlock_timestamp,
        isClaimed: num(info.astroport_lp_transferred).gt(0),
        duration: info.duration,
        astroRewards: +info.astro_rewards / ONE_TOKEN,
      };
    });

    return sortBy(items, "myLiquidityInUst").reverse();
  }, [userInfo, result, lunaPrice]);
};

export default useAstroPools;
