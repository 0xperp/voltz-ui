import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Position } from '@voltz-protocol/v1-sdk/dist/types/entities';

import { AugmentedAMM } from '@utilities';
import { routes } from '@routes';
import { actions, selectors } from '@store';
import { MintBurnFormLiquidityAction, MintBurnFormMarginAction, useAgent, useAMMContext, useBalance, useDispatch, useMintBurnForm, useSelector, useTokenApproval } from '@hooks';
import { MintBurnForm, MintBurnFormModes, PendingTransaction } from '@components/interface';
import { updateFixedRate } from './utilities';
import * as s from './services';
import { isUndefined } from 'lodash';
import { BigNumber } from 'ethers';

export type ConnectedMintBurnFormProps = {
  amm: AugmentedAMM;
  mode?: MintBurnFormModes;
  onReset: () => void;
  position?: Position;
};

const ConnectedMintBurnForm: React.FunctionComponent<ConnectedMintBurnFormProps> = ({
  amm,
  onReset,
  mode = MintBurnFormModes.NEW_POSITION,
  position
}) => {
  const { agent } = useAgent();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { mintMinimumMarginRequirement: { call: loadMintInfo, loading: minRequiredMarginLoading, result: minRequiredMargin } } = useAMMContext();

  const balance = useBalance(amm);
  const defaultValues = {
    fixedLow: position ? parseFloat(position.fixedRateLower.toFixed() ) : undefined,
    fixedHigh: position ? parseFloat(position.fixedRateUpper.toFixed() ) : undefined
  }
  const form = useMintBurnForm(amm, mode, minRequiredMargin || undefined, defaultValues);
  const tokenApprovals = useTokenApproval(amm, true);

  const [transactionId, setTransactionId] = useState<string | undefined>();
  const activeTransaction = useSelector(selectors.transactionSelector)(transactionId);
  const formAction = s.getFormAction(mode, form.state.liquidityAction);
  const isBurningLiquidity = mode === MintBurnFormModes.EDIT_LIQUIDITY && form.state.liquidityAction === MintBurnFormLiquidityAction.BURN;
  const isRemovingMargin = mode === MintBurnFormModes.EDIT_MARGIN && form.state.marginAction === MintBurnFormMarginAction.REMOVE;
  const submitButtonHint = s.getSubmitButtonHint(amm, mode, form, tokenApprovals);
  const submitButtonText = s.getSubmitButtonText(mode, tokenApprovals, amm, form.state);

  const approvalsNeeded = s.approvalsNeeded(tokenApprovals, isBurningLiquidity, isRemovingMargin);

  const handleComplete = () => {
    onReset();
    navigate(`/${routes.LP_FARM}`);
  };

  const handleGoBack = () => {
    const action = actions.closeTransaction(transactionId as string);
    dispatch(action);
  }

  const handleSetFixedHigh = useCallback(
    updateFixedRate({ amm, fixedRate: form.state.fixedHigh, setFixedRate: form.setFixedHigh }),
    [amm, form.state.fixedHigh, form.setFixedHigh],
  );

  const handleSetFixedLow = useCallback(
    updateFixedRate({ amm, fixedRate: form.state.fixedLow, setFixedRate: form.setFixedLow }),
    [amm, form.state.fixedLow, form.setFixedLow],
  );

  const handleSubmit = () => {
    if(!form.isValid) return;

    if(approvalsNeeded) {
      if(!tokenApprovals.underlyingTokenApprovedForPeriphery) {
        tokenApprovals.approveUnderlyingTokenForPeriphery();
        return;
      }
    }

    const action = s.getSubmitAction(amm, formAction, form.state, agent, mode);
    setTransactionId(action.payload.transaction.id);
    dispatch(action);
  };

  // Load the mint summary info
  useEffect(() => {
    if (
      !isUndefined(form.state.notional) && form.state.notional !== 0 &&
      !isUndefined(form.state.fixedLow) && form.state.fixedLow !== 0 &&
      !isUndefined(form.state.fixedHigh) && form.state.fixedHigh !== 0
    ) {
      loadMintInfo({ 
        fixedLow: form.state.fixedLow, 
        fixedHigh: form.state.fixedHigh, 
        notional: form.state.notional 
      });
    }
  }, [loadMintInfo, form.state.notional, form.state.fixedLow, form.state.fixedHigh, approvalsNeeded]);

  if (!amm) {
    return null;
  }

  if (activeTransaction) {
    return (
      <PendingTransaction 
        amm={amm} 
        isEditingMargin={mode === MintBurnFormModes.EDIT_MARGIN} 
        liquidityAction={form.state.liquidityAction} 
        transactionId={transactionId} 
        onComplete={handleComplete}
        notional={form.state.notional}
        margin={Math.abs(form.state.margin as number) * (isRemovingMargin ? -1 : 1) }
        onBack={handleGoBack} 
      />
    );
  }

  return (
    <MintBurnForm
      balance={balance ? amm.descale(balance) : undefined}
      endDate={amm.endDateTime}
      formState={form.state}
      errors={form.errors}
      mode={mode}
      isFormValid={form.isValid}
      minRequiredMargin={minRequiredMargin || undefined}
      minRequiredMarginLoading={minRequiredMarginLoading}
      onCancel={onReset}
      onChangeFixedLow={handleSetFixedLow}
      onChangeFixedHigh={handleSetFixedHigh}
      onChangeLiquidityAction={form.setLiquidityAction}
      onChangeMargin={form.setMargin}
      onChangeMarginAction={form.setMarginAction} 
      onChangeNotional={form.setNotional}
      onSubmit={handleSubmit}
      positionMargin={position?.margin ? amm.descale(BigNumber.from(position.margin.toString())) : undefined}
      protocol={amm.protocol}
      startDate={amm.startDateTime}
      submitButtonHint={submitButtonHint}
      submitButtonText={submitButtonText}
      tokenApprovals={tokenApprovals}
      underlyingTokenName={amm.underlyingToken.name}
    />
  );
};

export default ConnectedMintBurnForm;
