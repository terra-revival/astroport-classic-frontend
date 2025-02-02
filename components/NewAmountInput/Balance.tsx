import React, { FC } from "react";
import { Box, Text, Flex, HStack } from "@chakra-ui/react";
import num from "libs/num";

import { MaxButton } from "components/NewAmountInput";
import { useBalance, useTokenInfo } from "modules/common";
import { ONE_TOKEN } from "constants/constants";
import numeral from "numeral";

type Props = {
  asset: string;
  label?: string | undefined;
  max?: string | number | undefined;
  initial?: string | undefined;
  hideLabel?: boolean;
  hideButton?: boolean;
  isDisabled?: boolean;
  isMobile?: boolean;
  onChange: (value: string | number) => void;
};

const Balance: FC<Props> = ({
  asset,
  max,
  initial,
  label = "In Wallet",
  hideLabel = false,
  hideButton = false,
  isDisabled = false,
  isMobile = false,
  onChange,
}) => {
  const { getDecimals } = useTokenInfo();
  const balance = useBalance(asset);
  const newBalance = num(balance)
    .div(10 ** getDecimals(asset))
    .times(ONE_TOKEN)
    .toFixed(0);
  const amount = num(initial ?? newBalance)
    .div(ONE_TOKEN)
    .dp(6)
    .toNumber();

  const renderButton = () => {
    if (hideButton) {
      return;
    }

    return (
      <MaxButton
        asset={asset}
        max={max ?? amount}
        onChange={onChange}
        isDisabled={isDisabled}
      />
    );
  };

  return (
    <Flex
      align="center"
      justify="space-between"
      mt={isMobile ? "4" : "1"}
      {...(isMobile && { px: "2" })}
    >
      <Box>
        <HStack {...(!isMobile && { spacing: "4" })}>
          {!hideLabel && (
            <Text fontSize="sm" fontWeight="500" color="white.400">
              {label}:
            </Text>
          )}{" "}
          <Text fontSize="sm" color="white" ml="2">
            {numeral(amount).format("0,0.000[000]")}
          </Text>
        </HStack>
      </Box>
      <Box>{renderButton()}</Box>
    </Flex>
  );
};

export default Balance;
