import { useTerraWebapp } from "context/TerraWebappContext";
import num from "libs/num";
import {
  getSwapRoute,
  useAstroswap,
  useContracts,
  usePriceApi,
  useTokenInfo,
} from "modules/common";
import { simulate as simulateMonoSwap } from "modules/swap/monoSwap";
import { simulate as simulateMultiSwap } from "modules/swap/multiSwap";

export const usePrice = () => {
  const { client } = useTerraWebapp();
  const { tokenGraph } = useAstroswap();
  const { router } = useContracts();
  const { getDecimals } = useTokenInfo();
  const ldoPrice = usePriceApi("terra1jxypgnfa07j6w92wazzyskhreq2ey2a5crgt6z"); // Use external api for LDO price

  const getPriceInUst = async (token: string) => {
    if (token === "terra1jxypgnfa07j6w92wazzyskhreq2ey2a5crgt6z") {
      // hardcode for LDO
      return ldoPrice;
    }

    const decimals = getDecimals(token);
    const swapRoute = getSwapRoute({ tokenGraph, from: token, to: "uusd" });
    if (!swapRoute) {
      return 0;
    }

    if (swapRoute.length > 1) {
      const data = await simulateMultiSwap({
        client,
        swapRoute,
        router,
        token,
        amount: (10 ** decimals).toString(),
      });

      return num(data.amount)
        .div(10 ** 6)
        .dp(6)
        .toNumber();
    }

    const data = await simulateMonoSwap({
      client,
      swapRoute,
      token,
      amount: (10 ** decimals).toString(),
      reverse: false,
    });

    if (!data) {
      return 0;
    }

    // @ts-expect-error
    return num(data.return_amount)
      .plus(data.commission_amount)
      .plus(data.spread_amount)
      .div(10 ** 6)
      .dp(6)
      .toNumber();
  };

  return {
    getPriceInUst,
  };
};

export default usePrice;
