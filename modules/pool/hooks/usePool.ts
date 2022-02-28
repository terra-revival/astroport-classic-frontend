import { useMemo } from "react";
import { num, useBalance } from "@arthuryeti/terra";

import {
  useGetPool,
  useShareOfPool,
  useLpToTokens,
  useShareInUst,
  useGetPoolInfo,
  shouldReverseTokenOrder,
} from "modules/pool";
import { Asset, getTokenDenom, useTokenInfo } from "modules/common";
import { useStakedLpAmount } from "modules/generator";

export type Rewards = {
  pool: number;
  astro: number;
  protocol: number;
  total: number;
  apy: number;
  token_symbol: string;
};

export type Pool = {
  assets: [Asset, Asset];
  pairContract: string;
  lpTokenContract: string;
  total: {
    share: string;
    shareInUst: string | number | null;
  };
  mine: {
    share: string;
    shareInUst: string | number | null;
    shareOfPool: number | null;
  };
  token1: {
    asset: string;
    share: string;
    amount: string | undefined;
  };
  token2: {
    asset: string;
    share: string;
    amount: string | undefined;
  };
  rewards: Rewards;
};

type Params = {
  pairContract: string;
  lpTokenContract: string;
};

export const usePool = ({
  pairContract,
  lpTokenContract,
}: Params): Pool | null => {
  const { data: pool } = useGetPool(pairContract);
  const poolInfo = useGetPoolInfo(pairContract);
  const lpBalance = useBalance(lpTokenContract);
  const shareOfPool = useShareOfPool({ pool, lpAmount: lpBalance });
  const stakedAmount = useStakedLpAmount(lpTokenContract);
  const tokenAmounts = useLpToTokens({ pool, amount: lpBalance });
  const myShare = num(stakedAmount).plus(lpBalance).toString();
  const { getDecimals, getSymbol } = useTokenInfo();

  const token1 = useMemo(() => {
    if (pool == null) {
      return null;
    }

    return getTokenDenom(pool.assets[0].info);
  }, [pool]);

  const token2 = useMemo(() => {
    if (pool == null) {
      return null;
    }

    return getTokenDenom(pool.assets[1].info);
  }, [pool]);

  const token1Decimals = getDecimals(token1);
  const token2Decimals = getDecimals(token2);

  const myShareInUst = useShareInUst({
    pool,
    amount: myShare,
  });

  const totalShareInUst = useShareInUst({
    pool,
    amount: pool?.total_share,
  });

  return useMemo(() => {
    if (pool == null || token1 == null || token2 == null) {
      return null;
    }

    const data = {
      assets: pool.assets,
      pairContract: pairContract,
      lpTokenContract: lpTokenContract,
      total: {
        share: pool.total_share,
        shareInUst: totalShareInUst,
      },
      mine: {
        share: myShare,
        shareInUst: myShareInUst,
        shareOfPool,
      },
      token1: {
        asset: token1,
        share: pool.assets[0].amount,
        amount: tokenAmounts?.[token1],
      },
      token2: {
        asset: token2,
        share: pool.assets[1].amount,
        amount: tokenAmounts?.[token2],
      },
      _24hr_volume: poolInfo?._24hr_volume,
      rewards: {
        pool: poolInfo?.trading_fees?.apr || 0,
        astro: poolInfo?.astro_rewards?.apr || 0,
        protocol: poolInfo?.protocol_rewards?.apr || 0,
        total: poolInfo?.total_rewards?.apr || 0,
        apy: poolInfo?.total_rewards?.apy || 0,
        token_symbol: poolInfo?.token_symbol,
      },
    };

    if (shouldReverseTokenOrder(getSymbol(token1), getSymbol(token2))) {
      const tempToken1 = data.token1;
      data.token1 = data.token2;
      data.token2 = tempToken1;
    }

    return data;
  }, [
    pool,
    totalShareInUst,
    shareOfPool,
    tokenAmounts,
    token1,
    token2,
    myShare,
    myShareInUst,
    poolInfo,
  ]);
};

export default usePool;
