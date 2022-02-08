import React, { FC } from "react";
import { TxStep } from "@arthuryeti/terra";
import { Text, Button, VStack } from "@chakra-ui/react";

import { useAstroswap, useNotEnoughUSTBalanceToPayFees } from "modules/common";
import { useClaimAll } from "modules/reward";
import FormFee from "components/common/FormFee";

type Props = {
  onSuccess: () => void;
};

const ClaimAllRewardsBtn: FC<Props> = ({ onSuccess }) => {
  const { addNotification } = useAstroswap();
  const notEnoughUSTToPayFees = useNotEnoughUSTBalanceToPayFees();

  const state = useClaimAll({
    onSuccess,
    onBroadcasting: (txHash) => {
      addNotification({
        notification: {
          type: "started",
          txHash,
          txType: "claimRewards",
        },
      });
    },
  });

  return (
    <VStack>
      <Button
        mt={6}
        size="sm"
        w="full"
        variant="primary"
        onClick={state.submit}
        isDisabled={state.txStep != TxStep.Ready || notEnoughUSTToPayFees}
      >
        Claim Rewards
      </Button>
      <FormFee fee={state.fee} />
      <Text
        maxW="sm"
        mt="2"
        textStyle="small"
        variant="dimmed"
        textAlign="center"
      >
        Disclaimer: you can only claim 4 token rewards in one transaction
        because of wallet limitations
      </Text>
    </VStack>
  );
};

export default ClaimAllRewardsBtn;
