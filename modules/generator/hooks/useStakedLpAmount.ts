import { useMemo } from "react";
import { useTerraWebapp } from "context/TerraWebappContext";
import { useQuery } from "react-query";
import useAddress from "hooks/useAddress";
import { LpDepositResponse, useContracts } from "modules/common";
import { QUERY_STALE_TIME } from "constants/constants";

export const useStakedLpAmount = (lpTokenContract: string): string => {
  const address = useAddress();
  const { generator } = useContracts();
  const { client } = useTerraWebapp();

  const { data } = useQuery(
    ["stakedLpAmount", lpTokenContract, address],
    () => {
      return client.wasm.contractQuery<LpDepositResponse>(generator, {
        deposit: {
          lp_token: lpTokenContract,
          user: address,
        },
      });
    },
    {
      staleTime: QUERY_STALE_TIME,
    }
  );

  return useMemo(() => {
    if (data == null) {
      return "0";
    }

    return data;
  }, [data]);
};

export default useStakedLpAmount;
