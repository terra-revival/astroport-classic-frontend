import React, { FC } from "react";
import { detect } from "detect-browser";
import { useBalance, fromTerraAmount } from "@arthuryeti/terra";

import {
  useWallet,
  WalletStatus,
  useConnectedWallet,
} from "@terra-money/wallet-provider";
import {
  Link,
  Text,
  Image,
  Center,
  HStack,
  chakra,
  useDisclosure,
  Divider,
} from "@chakra-ui/react";

import { truncate } from "libs/text";
import { useTokenInfo } from "modules/common";

import ConnectWalletModal from "components/modals/ConnectWalletModal";
import WalletInfoPopover from "components/popovers/WalletInfoPopover";
import TerraIcon from "components/icons/TerraIcon";
import ChromeIcon from "components/icons/ChromeIcon";

const TerraWallet: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { status } = useWallet();
  const wallet = useConnectedWallet();
  const browser = detect();
  const balance = useBalance("uusd");
  const { getIcon } = useTokenInfo();

  if (!["chrome", "opera", "edge", "edge-chromium"].includes(browser?.name)) {
    return (
      <Link
        href="https://www.google.com/chrome/"
        isExternal
        _hover={{
          textDecoration: "none",
        }}
        _focus={{
          outline: "none",
          boxShadow: "none",
        }}
        bg="white"
        py="2"
        px="4"
        borderRadius="full"
      >
        <HStack spacing="3">
          <ChromeIcon width="1.25rem" height="1.25rem" />
          <Text>Get Chrome</Text>
        </HStack>
      </Link>
    );
  }

  if (status === WalletStatus.WALLET_CONNECTED) {
    return <WalletInfoPopover />;
  }

  return (
    <>
      <chakra.button
        type="button"
        color="white"
        onClick={onOpen}
        _focus={{
          outline: "none",
          boxShadow: "none",
        }}
        _hover={{
          bg: "brand.purple",
        }}
        bg="brand.lightBlue"
        py="2"
        px="4"
        borderRadius="full"
      >
        <HStack spacing="3">
          <TerraIcon width="1.25rem" height="1.25rem" />
          <Text>Connect your wallet</Text>
        </HStack>
      </chakra.button>
      <ConnectWalletModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default TerraWallet;
