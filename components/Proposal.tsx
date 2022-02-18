import React, { FC } from "react";
import Link from "next/link";
import {
  Box,
  Button,
  IconButton,
  Flex,
  Center,
  HStack,
  Text,
} from "@chakra-ui/react";
import { useProposals } from "modules/governance";

import BackIcon from "components/icons/BackIcon";
import TwitterIcon from "components/icons/TwitterIcon";

type Props = {
  id: string;
};

const TimeBox = ({ endDate }) => {
  const now = new Date();
  const end = new Date(endDate * 1000);

  return (
    <Center
      flexDirection="column"
      h="100px"
      bg="white.50"
      mb="3"
      borderRadius="xl"
      width="100%"
    >
      <Text fontSize="lg">{`${now.getUTCHours()}:${now.getUTCMinutes()}:${now.getUTCSeconds()} UTC`}</Text>
      <Text fontSize="sm" mt="1" color="proposalColours.purpleAlt">
        (
        {`Ends ${end.getUTCDate()}/${
          end.getUTCMonth() + 1
        }/${end.getUTCFullYear()} ${end.getUTCHours()}:${end.getUTCMinutes()} UTC`}
        )
      </Text>
    </Center>
  );
};

const VoteBox = () => {
  return (
    <Center
      h="200px"
      bg="white.50"
      mb="3"
      borderRadius="xl"
      width="100%"
      fontSize="sm"
      fontStyle="italic"
    >
      Voting Information...
    </Center>
  );
};

const HistoryBox = () => {
  return (
    <Center
      h="125px"
      bg="white.50"
      mb="3"
      borderRadius="xl"
      width="100%"
      fontSize="sm"
      fontStyle="italic"
    >
      Proposal History...
    </Center>
  );
};

const DescriptionBox = ({ address, description }) => {
  return (
    <Box minH="250px" bg="white.50" mb="3" p="6" borderRadius="xl" width="100%">
      <Text mb="3">Description</Text>
      <Text mb="3" color="whiteAlpha.600" fontSize="sm">
        by: {address}
      </Text>
      <Text color="whiteAlpha.400" fontSize="sm">
        {description}
      </Text>
    </Box>
  );
};

const MsgBox = ({ msg }) => {
  return (
    <Box minH="150px" bg="white.50" mb="3" p="6" borderRadius="xl" width="100%">
      <Text mb="3">Executable Messages</Text>
      <Text color="whiteAlpha.400" fontSize="sm">
        {msg}
      </Text>
    </Box>
  );
};

const MyVotingPowerBox = ({ id }) => {
  return (
    <Box h="200px" bg="white.50" mb="3" p="5" borderRadius="xl">
      <Text fontSize="sm">My Voting Power</Text>
      <Box bg="blackAlpha.400" p="3" my="3" borderRadius="lg">
        <Text>9,999,999.00</Text>
        <Text fontSize="sm" color="whiteAlpha.400">
          x.xxx%
        </Text>
      </Box>
      <Flex>
        <Link href={`/governance/proposal/${id}/vote/for`} passHref>
          <Button width="50%" mr="1" variant="votegreen">
            Vote For
          </Button>
        </Link>
        <Link href={`/governance/proposal/${id}/vote/against`} passHref>
          <Button width="50%" ml="1" variant="votered">
            Vote Against
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

const DiscussionBox = ({ link }) => {
  const forumLink = "https://forum.astroport.fi";

  return (
    <Flex
      flexDirection="column"
      h="190px"
      bg="proposalColours.purpleAlt"
      p="5"
      borderRadius="xl"
      color="blackAlpha.900"
      fontSize="sm"
      borderColor="proposalColours.purple"
      borderWidth="2px"
    >
      <Text>Discuss</Text>
      <Text mt="2" mb="auto">
        Have thoughts about this proposal?
        <br />
        Discuss with others.
      </Text>
      <Button
        variant="primary"
        borderRadius="md"
        onClick={() => {
          window.open(forumLink, "_blank");
        }}
      >
        Go To Forum
      </Button>
    </Flex>
  );
};

const Proposal: FC<Props> = ({ id }) => {
  const proposals = useProposals();
  const proposal = proposals.find((p) => p.id === id);
  const shareLink = `https://www.twitter.com/share?url=https://app.astroport.fi/governance/proposal/${id}`;

  return (
    <Box>
      <Flex mb="5" justify="space-between">
        <HStack spacing={4}>
          <Link href="/governance" passHref>
            <IconButton
              aria-label="Back"
              size="xs"
              variant="icon"
              isRound
              icon={<BackIcon />}
            />
          </Link>
          <Text>{proposal.title}</Text>
        </HStack>
        <IconButton
          aria-label="Tweet"
          size="xs"
          variant="icon"
          border="none"
          p="1"
          isRound
          icon={<TwitterIcon />}
          onClick={() => {
            window.open(shareLink, "_blank");
          }}
        />
      </Flex>
      <Flex>
        <Flex flexDirection="column" w="66.6%" mr="5">
          <TimeBox endDate={proposal.endDate} />
          <VoteBox />
          <HistoryBox />
          <DescriptionBox
            address={proposal.address}
            description={proposal.description}
          />
          <MsgBox msg={proposal.msg} />
        </Flex>
        <Flex flexDirection="column" w="33.3%">
          <MyVotingPowerBox id={id} />
          <DiscussionBox link={proposal.link} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Proposal;
