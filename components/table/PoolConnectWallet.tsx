import React, { FC } from "react";
import { Button, Flex, Text, useDisclosure } from "@chakra-ui/react";

import ConnectWalletModal from "components/modals/ConnectWalletModal";
import Tr from "components/Tr";
import Td from "components/Td";

const PoolConnectWallet: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Tr>
      <Td>
        <Text textStyle="medium" ml="8">
          You need to connect your Wallet.
        </Text>
      </Td>
      <Td>
        <Flex justify="flex-end" align="center">
          <Button variant="primary" size="sm" onClick={onOpen}>
            <Text>Connect Your Wallet</Text>
          </Button>
          <ConnectWalletModal isOpen={isOpen} onClose={onClose} />
        </Flex>
      </Td>
    </Tr>
  );
};

export default PoolConnectWallet;
