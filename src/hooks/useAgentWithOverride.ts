import { useEffect } from 'react';

import { Agents, AgentSettings } from '@components/contexts';
import useAgent from './useAgent';

export type AgentSettingsOverride = {
  agent?: AgentSettings['agent'];
  onChangeAgent?: AgentSettings['onChangeAgent'];
};

const useAgentWithOverride = (agentOverride: Agents | undefined): AgentSettings => {
  const { agent, onChangeAgent } = useAgent();

  useEffect(() => {
    if (agentOverride) {
      onChangeAgent(agentOverride);
    }
  }, [agentOverride]);

  if (!agentOverride) {
    return { agent, onChangeAgent };
  }

  return {
    agent: agentOverride,
    onChangeAgent,
  };
};

export default useAgentWithOverride;
