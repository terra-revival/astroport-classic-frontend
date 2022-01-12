import { useMemo } from "react";
import { num, useAddress } from "@arthuryeti/terra";

import { useAirdrop, useUserInfo } from "modules/airdrop";
import { ONE_TOKEN } from "constants/constants";

export const useAirdropBalance = () => {
  const address = useAddress();
  const { isLoading, data } = useAirdrop(address);
  const userInfo = useUserInfo();

  const airdrop = useMemo(() => {
    if (data == null) {
      return null;
    }

    return data.find(({ airdrop_series }) => airdrop_series === 1);
  }, [data]);

  return useMemo(() => {
    if (userInfo == null || isLoading == null) {
      return 0;
    }

    if (airdrop == null) {
      return 0;
    }

    if (userInfo.tokens_withdrawn) {
      return 0;
    }

    if (num(userInfo.airdrop_amount).eq(0)) {
      return num(airdrop.amount).div(ONE_TOKEN).dp(6).toNumber();
    }

    return num(userInfo.airdrop_amount)
      .minus(userInfo.delegated_amount)
      .div(ONE_TOKEN)
      .dp(6)
      .toNumber();
  }, [userInfo, airdrop]);
};

export default useAirdropBalance;
