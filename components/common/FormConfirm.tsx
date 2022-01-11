import React, { FC, ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  Text,
  IconButton,
  Button,
  VStack,
} from "@chakra-ui/react";
import { Fee } from "@terra-money/terra.js";
import { motion } from "framer-motion";

import Card from "components/Card";
import FormFee from "components/common/FormFee";
import CloseIcon from "components/icons/CloseIcon";
import SwapFormWarning from "components/swap/SwapFormWarning";

type Props = {
  title?: string;
  contentComponent: ReactNode;
  details?: {
    label: string;
    value: string;
    color?: string;
  }[];
  fee?: Fee | null;
  actionLabel?: string;
  onCloseClick: () => void;
};

const MotionBox = motion(Box);

const FormConfirm: FC<Props> = ({
  title,
  actionLabel,
  fee,
  contentComponent,
  details,
  onCloseClick,
  children,
}) => {
  return (
    <MotionBox
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      maxW="470px"
      m="0 auto"
      mt="10"
      px={[6, 0]}
    >
      <Card>
        <Flex justify="space-between" align="center" mb="6">
          <Text textStyle={["small", "normal"]}>{title}</Text>
          <IconButton
            aria-label="Close"
            variant="simple"
            isRound
            _hover={{
              bg: "rgba(255,255,255,0.1)",
            }}
            icon={
              <CloseIcon
                w={["4", "6"]}
                h={["4", "6"]}
                color="white"
                BackgroundOpacity="0"
              />
            }
            onClick={onCloseClick}
          />
        </Flex>

        <Box>{contentComponent}</Box>

        {details && (
          <VStack mt={6} spacing={[2, 3]} align="stretch">
            <Text textStyle="small" variant="secondary">
              Further information:
            </Text>
            <VStack
              align="stretch"
              color="white"
              borderWidth="1px"
              borderRadius="xl"
              borderColor="white.200"
              bg="white.100"
              px="4"
              py={["3", "4"]}
            >
              {details.map((detail) => (
                <HStack key={detail.label} justify="space-between">
                  <Text textStyle="small" variant="secondary">
                    {detail.label}
                  </Text>
                  <Text
                    textStyle={["small", "medium"]}
                    color={detail.color ?? "white"}
                  >
                    {detail.value}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </VStack>
        )}

        {children}

        <Flex flexDir="column" align="center" mt="8">
          <Button variant="primary" minW={["32", "64"]} size="sm" type="submit">
            {actionLabel}
          </Button>
          {fee && <FormFee fee={fee} />}
        </Flex>
      </Card>
    </MotionBox>
  );
};

export default FormConfirm;
