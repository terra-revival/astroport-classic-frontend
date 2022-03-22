import React, { FC, useState } from "react";
import { useWallet, WalletStatus } from "@terra-money/wallet-provider";
import { useAddress, useTerraWebapp } from "@arthuryeti/terra";
import { useRouter } from "next/router";
import { Box, Button, Flex, Link, Text, Code } from "@chakra-ui/react";
import useFinder from "hooks/useFinder";
import { NextLink } from "modules/common";
import {
  useConfig,
  useProposalApi,
  useProposalClient,
} from "modules/governance";
import {
  composeTwitterLink,
  appendHttp,
  createHistoryBlocks,
} from "modules/governance/helpers";

import ProposalHeader from "components/proposal/Header";
import ProposalTime from "components/proposal/Time";
import ProposalVoteStats from "components/proposal/VoteStats";
import TimelineBar from "components/governance/TimelineBar";
import { Proposal, Proposal_History } from "types/common";
import VotePower from "components/proposal/VotePower";

type Props = {
  id: string;
};

type LeftColumnProps = {
  proposal: Proposal;
  addressOpen: boolean;
  quorum: string | null;
  setAddressOpen: (value: boolean) => void;
};

type RightColumnProps = {
  id: string;
  address: string;
  status: WalletStatus;
  link: string;
  totalVotePower: number | null;
  proposalContract: any;
};

const HistoryBox: FC<{ blocks: Proposal_History }> = ({ blocks }) => {
  return (
    <Flex
      flexDirection="column"
      mb="3"
      p="6"
      h="140px"
      bg="white.50"
      borderRadius="xl"
      width="100%"
    >
      <Text mb="6">Proposal History</Text>
      <TimelineBar blocks={blocks} />
    </Flex>
  );
};

const DescriptionBox: FC<{ address: string; description: string }> = ({
  address,
  description,
}) => {
  const finder = useFinder();

  return (
    <Box minH="250px" bg="white.50" mb="3" p="6" borderRadius="xl" width="100%">
      <Text mb="3">Description</Text>
      <Text mb="3" color="whiteAlpha.600" fontSize="sm">
        by:{" "}
        <Link href={finder(address)} isExternal>
          {address}
        </Link>
      </Text>
      <Box maxH="40" overflowY="auto">
        <Text color="whiteAlpha.400" fontSize="sm">
          {description}
        </Text>
      </Box>
    </Box>
  );
};

const MsgBox: FC<{ messages: string | null }> = ({ messages }) => {
  return (
    <Box minH="150px" bg="white.50" mb="3" p="6" borderRadius="xl" width="100%">
      <Text mb="3">Executable Messages</Text>
      <Box maxH="40" overflowY="auto">
        <Code bg="none" color="whiteAlpha.400" fontSize="sm">
          {messages}
        </Code>
      </Box>
    </Box>
  );
};

const DiscussionBox: FC<{ link: string | null }> = ({ link }) => {
  const forumLink = link ? appendHttp(link) : "https://forum.astroport.fi";

  return (
    <Flex
      flexDirection="column"
      h="190px"
      bg="proposalColours.purpleAlt"
      p="5"
      borderRadius="xl"
      color="blackAlpha.900"
      fontSize=".875rem"
      borderColor="proposalColours.purple"
      borderWidth="2px"
    >
      <Text fontWeight="500">Discuss</Text>
      <Text mt="2" mb="auto">
        Have thoughts about this proposal?
        <br />
        Discuss with others on the forum.
      </Text>
      <Button
        variant="primary"
        borderRadius="md"
        onClick={() => {
          window.open(forumLink, "_blank");
        }}
      >
        Go to Forum
      </Button>
    </Flex>
  );
};

const LeftColumn: FC<LeftColumnProps> = ({
  proposal,
  addressOpen,
  quorum,
  setAddressOpen,
}) => {
  return (
    <Flex flexDirection="column" w={["100%", "100%", "66.6%"]} mr="5">
      <ProposalTime
        endTimestamp={proposal.end_timestamp}
        state={proposal.state}
      />
      <ProposalVoteStats
        proposal={proposal}
        quorum={quorum}
        addressOpen={addressOpen}
        onClick={() => setAddressOpen(!addressOpen)}
      />
      <HistoryBox blocks={createHistoryBlocks(proposal)} />
      <DescriptionBox
        address={proposal.submitter}
        description={proposal.description}
      />
      <MsgBox messages={proposal.messages} />
    </Flex>
  );
};

const RightColumn: FC<RightColumnProps> = ({
  id,
  address,
  status,
  link,
  totalVotePower,
  proposalContract,
}) => {
  return (
    <Flex display={["none", "none", "flex"]} flexDirection="column" w="33.3%">
      <VotePower
        id={id}
        address={address}
        status={status}
        totalVotePower={totalVotePower}
        proposalContract={proposalContract}
      />
      <DiscussionBox link={link} />
    </Flex>
  );
};

const GovProposalPage: FC<Props> = ({ id }) => {
  const { status } = useWallet();
  const address = useAddress();
  const router = useRouter();
  const { proposal, proposalExists } = useProposalApi(id);
  const proposalContract = useProposalClient(id);
  const quorum = useConfig()?.proposal_required_quorum;
  const { network } = useTerraWebapp();
  const [addressOpen, setAddressOpen] = useState(false);
  const twitterLink = composeTwitterLink(network.name, proposal?.title, id);

  // proposal doesn't exist
  if (proposalExists === false) {
    router.push("/404");
  }

  if (!proposal) {
    return null;
  }

  return (
    <Box>
      <ProposalHeader
        title={proposal.title}
        state={proposal.state}
        twitterLink={twitterLink}
      />
      <Flex>
        <LeftColumn
          proposal={proposal}
          addressOpen={addressOpen}
          quorum={quorum}
          setAddressOpen={setAddressOpen}
        />
        <RightColumn
          id={id}
          address={address}
          status={status}
          link={proposal.link}
          totalVotePower={proposal.total_voting_power}
          proposalContract={proposalContract}
        />
      </Flex>
    </Box>
  );
};

export default GovProposalPage;
