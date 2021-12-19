import React from "react";
import { Text, Flex, Box } from "@chakra-ui/react";
import { useFormContext, Controller } from "react-hook-form";
import { num } from "@arthuryeti/terra";

import { StakeLpTokenState, useStakedLpAmount } from "modules/lp";
import { PoolFormType } from "types/common";
import { ONE_TOKEN } from "constants/constants";

import Card from "components/Card";
import UnstakeFormFooter from "components/lp/unstake/UnstakeFormFooter";
import TokenInput from "components/TokenInput";
import NewAmountInput from "components/NewAmountInput";
import AstroSlider from "components/AstroSlider";
import StakeActions from "components/lp/stake/StakeActions";

type Params = {
  state: StakeLpTokenState;
  type: PoolFormType;
  onTypeClick: any;
  isChartOpen: boolean;
  onChartClick: () => void;
  onClick: () => void;
};

const UnstakeFormInitial = ({
  type,
  onTypeClick,
  isChartOpen,
  onChartClick,
  state,
  onClick,
}: Params) => {
  const { control, watch, setValue } = useFormContext();

  const token = watch("token");
  const amount = watch("amount");
  const stakedAmount = useStakedLpAmount(token);
  const max = num(stakedAmount).div(ONE_TOKEN).toNumber();

  const handleChange = (value: number) => {
    setValue("amount", String(value));
  };

  return (
    <>
      <StakeActions
        type={type}
        isChartOpen={isChartOpen}
        onChartClick={onChartClick}
        onTypeClick={onTypeClick}
      />

      <Card mb="2">
        <Text textStyle="small" variant="secondary">
          Unstake your LP tokens below. Any ASTRO rewards accrued can be claimed
          in your rewards center. If you unstake all of your LP tokens, you stop
          receiving ASTRO and potential third party rewards.
        </Text>
      </Card>

      <Card>
        <Flex>
          <Box flex="1">
            <Controller
              name="token"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TokenInput {...field} isLpToken isSingle />
              )}
            />
          </Box>
          <Box flex="1">
            <Controller
              name="amount"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <NewAmountInput
                  asset={token}
                  balance={stakedAmount}
                  {...field}
                />
              )}
            />
          </Box>
        </Flex>
      </Card>

      <Card mt="2">
        <AstroSlider
          min={0}
          minLabel="0%"
          max={max}
          maxLabel="100%"
          step={0.01}
          value={+amount}
          onChange={handleChange}
        />
      </Card>

      {state.error && (
        <Card mt="2">
          <Text textStyle="small" variant="secondary">
            {state.error}
          </Text>
        </Card>
      )}

      <UnstakeFormFooter data={state} onConfirmClick={onClick} />
    </>
  );
};

export default UnstakeFormInitial;
