import React from 'react';
import { DateTime } from 'luxon';
import Box from '@mui/material/Box';
import { SystemStyleObject, Theme } from '@mui/system';
import { MintBurnFormMarginAction, SwapFormState, useAgent } from '@hooks';
import { Agents } from '@components/contexts';
import { Button, Panel } from '@components/atomic';
import {
  IconLabel,
  ProtocolInformation,
  MaturityInformation,
  NotionalAmount,
  MarginAmount,
} from '@components/composite';
import { TraderControls, MarginControls, SwapInfo } from './components';

export type SwapFormProps = {
  endDate?: DateTime;
  formState: SwapFormState;
  maxMargin?: number;
  marginEditMode?: boolean;
  onCancel: () => void;
  onChangeFcmMode: (value: boolean) => void;
  onChangeMargin: (value: number) => void;
  onChangeMarginAction: (value: MintBurnFormMarginAction) => void;
  onChangeNotional: (value: number) => void;
  onChangePartialCollateralization: (value: boolean) => void;
  onSubmit: () => void;
  protocol?: string;
  startDate?: DateTime;
  underlyingTokenName?: string;
};

const SwapForm: React.FunctionComponent<SwapFormProps> = ({
  endDate,
  formState,
  maxMargin,
  marginEditMode,
  onCancel,
  onChangeFcmMode,
  onChangeMargin,
  onChangeMarginAction,
  onChangeNotional,
  onChangePartialCollateralization,
  onSubmit,
  protocol,
  startDate,
  underlyingTokenName,
}) => {
  const { agent } = useAgent();

  const bottomSpacing: SystemStyleObject<Theme> = {
    marginBottom: (theme) => theme.spacing(6)
  }

  const getSubmitLabel = () => {
    if (marginEditMode) return "Update Margin";
    if(agent === Agents.FIXED_TRADER) return 'Trade Fixed Rate';
    return 'Trade Variable Rate';
  };

  return (
    <Panel
      variant="dark"
      sx={{
        marginTop: 12,
        width: (theme) => theme.spacing(97),
        boxShadow: () => agent === Agents.FIXED_TRADER 
          ? '0px 0px 88px rgba(0, 131, 155, 0.2)' 
          : '0px 0px 88px rgba(38, 103, 255, 0.20)',
      }}
    >
      <ProtocolInformation protocol={protocol}/>

      <Box sx={bottomSpacing}>
        <MaturityInformation
          label={
            <IconLabel
              label="maturity"
              icon="information-circle"
              info="The proportion between the time elapsed since the initiation of the pool and the entire duration."
              removeIcon
            />
          }
          startDate={startDate}
          endDate={endDate}
        />
      </Box>
 
      {marginEditMode && (
        <Box sx={{ ...bottomSpacing, display: 'flex' }}>
          <MarginControls 
            value={formState.marginAction}
            onChange={onChangeMarginAction}
          />
        </Box>
      )}  

      {!marginEditMode && (
        <Box sx={{ ...bottomSpacing, display: 'flex' }}>
          <TraderControls
            partialCollateralization={formState.partialCollateralization}
            fcmMode={formState.fcmMode}
            onChangePartialCollateralization={onChangePartialCollateralization}
            onChangeFcmMode={onChangeFcmMode}
          />
        </Box>
      )}

      {!marginEditMode && (
        <Box sx={bottomSpacing}>
          <NotionalAmount
            label="notional amount"
            info="Choose the notional you wish to trade. The notional amount is the total size of your trade."
            protocol={protocol}
            notional={formState.notional}
            onChangeNotional={onChangeNotional}
          />
        </Box>
      )}

      {formState.partialCollateralization && (
        <Box sx={bottomSpacing}>
          <MarginAmount
            protocol={protocol}
            maxMargin={maxMargin}
            margin={formState.margin}
            isAdditional={formState.marginAction === MintBurnFormMarginAction.ADD}
            onChangeMargin={onChangeMargin}
          />
        </Box>
      )}

      <Box sx={bottomSpacing}>
        <SwapInfo notional={formState.notional} underlyingTokenName={underlyingTokenName} />
      </Box>

      <Box sx={{ display: 'flex' }}>
        <Button size="large" onClick={onSubmit}>
          {getSubmitLabel()}
        </Button>
        <Button
          sx={{ marginLeft: (theme) => theme.spacing(4) }}
          variant="darker"
          onClick={onCancel}
        >
          Cancel
        </Button>
      </Box>
  
    </Panel>
  );
};

export default SwapForm;
