import React, { useMemo } from "react";
import { Text, Flex, Box, ListItem, UnorderedList } from "@chakra-ui/react";
import { useFormContext, Controller } from "react-hook-form";
import { num } from "@arthuryeti/terra";

import { ONE_TOKEN } from "constants/constants";
import { AuctionUnlockState, useUserInfo } from "modules/auction";

import Card from "components/Card";
import TokenInput from "components/TokenInput";
import NewAmountInput from "components/NewAmountInput";
import UnlockFormFooter from "components/auction/unlock/UnlockFormFooter";

type Params = {
  state: AuctionUnlockState;
  onClick: () => void;
};

const UnlockFormInitial = ({ state, onClick }: Params) => {
  const { control, watch } = useFormContext();
  const userInfo = useUserInfo();

  const balance = useMemo(() => {
    if (userInfo == null) {
      return "0";
    }

    return userInfo.withdrawable_lp_shares;
  }, [userInfo]);

  const { token } = watch();

  return (
    <>
      <Flex justify="space-between" color="white" mb="4" px="6">
        <Box flex="1">
          <Text fontSize="xl" color="white">
            Unlock LP Tokens
          </Text>
        </Box>
      </Flex>

      <Card mb="2">
        <Text fontSize="xs" color="white.500" fontWeight="500">
          Once you’ve unlocked your LP tokens you can:
          <UnorderedList>
            <ListItem>
              Withdraw your liquidity on the “Pools” page under “My Pools”
            </ListItem>
            <ListItem>
              Or stake your LP tokens into the generator to continue receiving
              dual rewards
            </ListItem>
          </UnorderedList>
        </Text>
      </Card>

      <Card>
        <Flex>
          <Box flex="1" pr="8">
            <Controller
              name="token"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TokenInput isSingle isLpToken {...field} />
              )}
            />
          </Box>
          <Box flex="1">
            <Controller
              name="amount"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <NewAmountInput
                  {...field}
                  asset={token}
                  balance={balance}
                  isLpToken
                  isSingle
                  balanceLabel="Withdrawable LP Tokens"
                />
              )}
            />
          </Box>
        </Flex>
      </Card>

      {state.error && (
        <Card mt="3">
          <Text textStyle="small" variant="dimmed">
            {state.error}
          </Text>
        </Card>
      )}

      <UnlockFormFooter data={state} onConfirmClick={onClick} />
    </>
  );
};

export default UnlockFormInitial;
