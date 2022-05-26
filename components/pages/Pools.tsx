import React, { FC } from "react";
import { Container, Box, Heading } from "@chakra-ui/react";

import PoolsOverview from "components/pool/PoolsOverview";
import MyPools from "components/pool/MyPools";
import OtherPools from "components/pool/OtherPools";

const Pools: FC = () => {
  return (
    <Container
      px={["3", null, "12"]}
      pt={["8", null, "24"]}
      pb={["16", null, "64"]}
      maxWidth="container.xl"
      color="white"
    >
      <Box px={["1", null, "6"]} mb="4" mt={["4", null, "12"]}>
        <Heading fontSize="xl">Overview</Heading>
      </Box>
      <PoolsOverview />

      <Box px={["1", null, "6"]} mb="4" mt={["8", null, "12"]}>
        <Heading fontSize="xl">My Pools</Heading>
      </Box>
      <MyPools />

      <Box px={["1", null, "6"]} mb="4" mt={["8", null, "12"]}>
        <Heading fontSize="xl">Other Pools</Heading>
      </Box>
      <OtherPools />
    </Container>
  );
};

export default Pools;
