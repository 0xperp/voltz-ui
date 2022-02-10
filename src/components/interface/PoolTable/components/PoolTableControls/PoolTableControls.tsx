import React from 'react';
import Box from '@mui/material/Box';

import { AgentProps, Agents } from '@theme';
import { Typography } from '@components/atomic';
import { ToggleButtonGroup } from '@components/composite';
import { Mode } from '../../types';

export type PoolTableControlsProps = AgentProps & {
  mode: Mode;
  quantity: number;
  onChangeAgent: (agent: Agents) => void;
};

const PoolTableControls: React.FunctionComponent<PoolTableControlsProps> = ({
  agent,
  mode,
  quantity,
  onChangeAgent,
}) => {
  if (mode === 'pools' || !agent) {
    return null;
  }

  const getTypographyLabel = () => {
    switch (agent) {
      case Agents.FIXED_TRADER:
        return 'FIXED RATE POSITIONS';

      case Agents.VARIABLE_TRADER:
        return 'VARIABLE RATE POSITIONS';

      case Agents.LIQUIDITY_PROVIDER:
        return 'ACTIVE FARMS';

      default:
        return undefined;
    }
  };
  const agentOptionTitles = {
    [Agents.FIXED_TRADER]: 'FIXED',
    [Agents.VARIABLE_TRADER]: 'VARIABLE',
  };
  const handleChangeAgent = (option: string) => {
    for (const [key, value] of Object.entries(agentOptionTitles)) {
      if (value === option) {
        onChangeAgent(key as Agents);
      }
    }
  };

  return (
    <Box>
      {agent !== Agents.LIQUIDITY_PROVIDER && (
        <ToggleButtonGroup
          label="Positions"
          options={Object.values(agentOptionTitles)}
          option={agentOptionTitles[agent]}
          defaultOption={agentOptionTitles[Agents.FIXED_TRADER]}
          onChangeOption={handleChangeAgent}
          agent={agent}
        />
      )}
      <Typography variant="body2" label={getTypographyLabel()}>
        {quantity}
      </Typography>
    </Box>
  );
};

export default PoolTableControls;