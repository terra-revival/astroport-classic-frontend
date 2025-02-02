import { useMemo } from "react";
import { useTerraWebapp } from "context/TerraWebappContext";
import { useQuery } from "react-query";
import useAddress from "hooks/useAddress";
import { useContracts } from "modules/common";
import { QUERY_STALE_TIME } from "constants/constants";

type Response = {
  total_astro_rewards: string;
  delegated_astro_rewards: string;
  astro_transferred: boolean;
  claimable_generator_astro_debt: string;
  claimable_generator_proxy_debt: string;
  lockup_infos: {
    pool_address?: string;
    duration: number;
  }[];
  lockup_positions_index: number;
};

export const useUserInfoWithList = () => {
  const { client } = useTerraWebapp();
  const address = useAddress();
  const { lockdrop } = useContracts();

  const { data, isLoading } = useQuery(
    ["userInfoWithList", "lockdrop", address],
    () => {
      if (!address) {
        return null;
      }

      return client.wasm.contractQuery<Response>(lockdrop, {
        user_info_with_lockups_list: {
          address,
        },
      });
    },
    {
      staleTime: QUERY_STALE_TIME,
    }
  );

  return useMemo(() => {
    if (isLoading || data == null) {
      return null;
    }

    return data;
  }, [isLoading, data]);
};

export default useUserInfoWithList;
