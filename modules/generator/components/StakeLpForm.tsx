import React, { FC, useState, useCallback, useMemo } from "react";
import { chakra } from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/router";
import { TxStep, useNotEnoughUSTBalanceToPayFees } from "modules/common";
import { StakeLpFormInitial, useStakeLpToken } from "modules/generator";
import { PoolFormType } from "types/common";
import FormLoading from "components/common/FormLoading";
import FormConfirm from "components/common/FormConfirm";
import FormSummary from "components/common/FormSummary";
import { Pool } from "modules/pool";

type FormValues = {
  token: string;
  amount: string;
};

type Props = {
  pool: Pool;
  type: PoolFormType;
  onTypeClick: (v: PoolFormType) => void;
};

const StakeLpForm: FC<Props> = ({ pool, type, onTypeClick }) => {
  const router = useRouter();
  const [showConfirm, setShowConfirm] = useState(false);

  const methods = useForm<FormValues>({
    defaultValues: {
      token: pool.lpTokenContract,
      amount: "",
    },
  });
  const notEnoughUSTToPayFees = useNotEnoughUSTBalanceToPayFees();

  const error = useMemo(() => {
    if (notEnoughUSTToPayFees) {
      return "Insufficient USTC to pay for the transaction.";
    }

    return false;
  }, [notEnoughUSTToPayFees]);

  const { watch, handleSubmit } = methods;
  const token = watch("token");
  const amount = watch("amount");

  const state = useStakeLpToken({
    token,
    amount,
    onBroadcasting: () => {
      router.push("/pools");
    },
    onError: () => {
      resetForm();
    },
  });

  const { reset, submit } = state;

  const resetForm = useCallback(() => {
    setShowConfirm(false);
    methods.reset();
    reset();
  }, [reset, methods]);

  if (state.txHash && state.txStep == TxStep.Posting) {
    return <FormLoading txHash={state.txHash} />;
  }

  return (
    <FormProvider {...methods}>
      <chakra.form onSubmit={handleSubmit(submit)} width="full">
        {!showConfirm && (
          <StakeLpFormInitial
            state={state}
            type={type}
            onTypeClick={onTypeClick}
            error={error}
            txFeeNotEnough={notEnoughUSTToPayFees}
            onClick={() => setShowConfirm(true)}
          />
        )}

        {showConfirm && (
          <FormConfirm
            fee={state.fee}
            txFeeNotEnough={notEnoughUSTToPayFees}
            title="Confirm Staking LP Token"
            actionLabel="Confirm Staking LP Token"
            contentComponent={
              <FormSummary
                label="You are staking"
                tokens={[{ asset: token, amount, isLp: true }]}
              />
            }
            onCloseClick={() => setShowConfirm(false)}
            taxRate={0.002}
          />
        )}
      </chakra.form>
    </FormProvider>
  );
};

export default StakeLpForm;
