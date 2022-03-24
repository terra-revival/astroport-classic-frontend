import { useMemo } from "react";
import { num } from "@arthuryeti/terra";

import { useAstroswap, useLunaPriceInUst, useTokenInfo } from "modules/common";
import { useSwapRoute, useSwapSimulate } from "modules/swap";

export const useTokenPriceInUstWithSimulate = (token: string | null) => {
  const { tokenGraph } = useAstroswap();
  const { getDecimals } = useTokenInfo();
  const swapRoute = useSwapRoute({ tokenGraph, from: token, to: "uusd" });

  const simulate = useSwapSimulate({
    swapRoute,
    token,
    token2: "uusd",
    amount: num(10 ** getDecimals(token)).toString(),
    reverse: false,
  });

  return useMemo(() => {
    if (token == "uusd") {
      return 1;
    }

    if (
      token === "terra16t7x97wuckxm5h927jygjfrt3tcwrzh3u2rlqm" ||
      token === "terra182zp52a95r3qg6lt0njxr7l0ujkfwan5h7t3l6"
    ) {
      return 0;
    }

    if (simulate.amount == null) {
      return 0;
    }

    return num(simulate.amount)
      .plus(simulate.commission)
      .plus(simulate.spread)
      .div(10 ** 6)
      .dp(6)
      .toNumber();
  }, [token, simulate]);
};

export default useTokenPriceInUstWithSimulate;
