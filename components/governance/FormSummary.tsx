import React, { FC } from "react";
import { Heading, Box, Flex, Text, Code, Link } from "@chakra-ui/react";
import { GovernanceProposal } from "types/common";
import { truncateStr } from "modules/common/helpers";

type Props = {
  proposal: GovernanceProposal;
};

const FormTextHeader = (text) => {
  return (
    <Heading mb="4" ml="1" fontSize="xs">
      {text}:
    </Heading>
  );
};

const FormBlock = ({
  children,
  maxH = null,
  overflowY = null,
  overflow = "hidden",
}) => {
  return (
    <Box
      bg="white.50"
      p="4"
      borderRadius="lg"
      maxH={maxH}
      overflowY={overflowY}
      overflow={overflow}
    >
      {children}
    </Box>
  );
};

const ForumSummary: FC<Props> = ({ proposal }) => {
  const { title, description, msg, link } = proposal;

  return (
    <Box>
      <Box mb="8">
        {FormTextHeader("Proposal Title")}
        <FormBlock>
          <Text isTruncated title={title}>
            {title}
          </Text>
        </FormBlock>
      </Box>
      <Box mb="8">
        {FormTextHeader("Proposal Description")}
        <FormBlock maxH="40" overflowY="auto" overflow={null}>
          <Text>{description}</Text>
        </FormBlock>
      </Box>
      <Box mb="8">
        {FormTextHeader("Executable Messages")}
        <FormBlock maxH="40" overflowY="auto" overflow={null}>
          <Code bg="none" color="inherit">
            {msg}
          </Code>
        </FormBlock>
      </Box>
      <Box mb="8">
        {FormTextHeader("Additional Info")}
        <FormBlock>
          <Flex justify="space-between" fontSize="sm" mb="1">
            <Text fontSize="xs">Link to Discord:</Text>
            <Link href={link} isExternal>
              <Text color="white.600" fontSize="2xs">
                {truncateStr(link, 35)}
              </Text>
            </Link>
          </Flex>
          <Flex justify="space-between" fontSize="sm">
            <Text fontSize="xs">Deposit:</Text>
            <Text color="white.600" fontSize="2xs">
              5,000 xASTRO ($250.00)
            </Text>
          </Flex>
        </FormBlock>
      </Box>
    </Box>
  );
};

export default ForumSummary;
