import React, { FC } from "react";
import { useWallet, WalletStatus } from "@terra-money/wallet-provider";
import { Flex, Text, Box, IconButton, Button } from "@chakra-ui/react";
import { Fee } from "@terra-money/terra.js";
import { NextLink } from "modules/common";
import { useProposals } from "modules/governance";

import Card from "components/Card";
import CloseIcon from "components/icons/CloseIcon";
import FormFee from "components/common/FormFee";
import { truncateStr } from "modules/common/helpers";

type Props = {
  id: string;
  action: string;
};

const TitleBox = ({ title }) => {
  return (
    <Box mb="5">
      <Text fontSize="sm" mb="3">
        Proposal Title
      </Text>
      <Box bg="white.50" p="5" borderRadius="lg">
        {truncateStr(title, 35)}
      </Box>
    </Box>
  );
};

const ActionBox = ({ action, amount, percentage }) => {
  const actionColor = action === "for" ? "green.500" : "red.500";

  return (
    <Box mb="5">
      <Text fontSize="sm" mb="3">
        Your Vote
      </Text>
      <Flex bg="white.50" p="5" borderRadius="lg" justify="space-between">
        <Text color={actionColor} textTransform="capitalize">
          {action}
        </Text>
        <Flex flexDirection="column" align="flex-end">
          <Text>{amount}</Text>
          <Text fontSize="sm" color="white.400">
            {percentage}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

const Footer = ({ status, action, fee, id }) => {
  const variant = action === "for" ? "votegreen" : "votered";

  return (
    <Flex flexDir="column" align="center" mt="8">
      <NextLink
        href="/governance"
        passHref
        isDisabled={status === WalletStatus.WALLET_NOT_CONNECTED}
      >
        <Button
          variant={variant}
          minW={["32", "64"]}
          mb="2"
          size="md"
          type="submit"
          isDisabled={status === WalletStatus.WALLET_NOT_CONNECTED}
        >
          Confirm Vote
        </Button>
      </NextLink>
      <FormFee fee={fee} />
    </Flex>
  );
};

const Vote: FC<Props> = ({ id, action }) => {
  const { status } = useWallet();

  // Get proposal
  let proposals = useProposals();
  let proposal = proposals.find((p) => p.id === id);

  // Temporary fee example
  const fee = new Fee(500, { uusd: 45000 });

  return (
    <Card>
      <Flex justify="space-between" align="center" mb="8">
        <Text fontSize="md">Confirm Vote</Text>
        <NextLink href={`/governance/proposal/${id}`} passHref>
          <Button
            aria-label="Close"
            variant="simple"
            isRound
            _hover={{
              bg: "rgba(255,255,255,0.1)",
            }}
          >
            <CloseIcon
              w={["4", "6"]}
              h={["4", "6"]}
              color="white"
              BackgroundOpacity="0"
            />
          </Button>
        </NextLink>
      </Flex>
      <TitleBox title={proposal.title} />
      <ActionBox action={action} amount="5000.00" percentage="0.005%" />
      <Footer status={status} action={action} fee={fee} id={id} />
    </Card>
  );
};

export default Vote;
