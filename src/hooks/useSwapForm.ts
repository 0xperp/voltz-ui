import { isUndefined } from "lodash";
import { Dispatch, SetStateAction, useState } from "react";
import { MintBurnFormMarginAction } from "./useMintBurnForm";

export type SwapFormState = {
  fcmMode: boolean;
  margin?: number;
  marginAction: MintBurnFormMarginAction;
  notional?: number;
  partialCollateralization: boolean;
};

export type SwapForm = {
  errors: Record<string, string>,
  setFcmMode: Dispatch<SetStateAction<SwapFormState['fcmMode']>>;
  setMargin: Dispatch<SetStateAction<SwapFormState['margin']>>;
  setMarginAction: Dispatch<SetStateAction<SwapFormState['marginAction']>>;
  setNotional: Dispatch<SetStateAction<SwapFormState['notional']>>;
  setPartialCollateralization: Dispatch<SetStateAction<SwapFormState['partialCollateralization']>>;
  state: SwapFormState,
  validate: () => void;
};

export const useSwapForm = (defaultValues: Partial<SwapFormState> = {}): SwapForm => {
  const defaultFcmMode = !isUndefined(defaultValues.fcmMode) ? defaultValues.fcmMode : false;
  const defaultMargin = !isUndefined(defaultValues.margin) ? defaultValues.margin : 0;
  const defaultMarginAction = defaultValues.marginAction || MintBurnFormMarginAction.ADD;
  const defaultNotional = !isUndefined(defaultValues.notional) ? defaultValues.notional : 0;
  const defaultPartialCollateralization = !isUndefined(defaultValues.partialCollateralization) 
    ? defaultValues.partialCollateralization 
    : true;

  const [fcmMode, setFcmMode] = useState<boolean>(defaultFcmMode); 
  const [margin, setMargin] = useState<SwapFormState['margin']>(defaultMargin);
  const [marginAction, setMarginAction] = useState<MintBurnFormMarginAction>(defaultMarginAction);
  const [notional, setNotional] = useState<SwapFormState['notional']>(defaultNotional);
  const [partialCollateralization, setPartialCollateralization] = useState<boolean>(defaultPartialCollateralization);

  const [errors, setErrors] = useState<SwapForm['errors']>({});

  const validate = () => {
    setErrors({});
  }

  return {
    errors,
    setFcmMode,
    setMargin,
    setMarginAction,
    setNotional,
    setPartialCollateralization,
    state: {
      fcmMode,
      margin,
      marginAction,
      notional,
      partialCollateralization
    },
    validate
  }
}

export default useSwapForm;