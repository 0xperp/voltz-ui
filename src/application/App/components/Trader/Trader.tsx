import React, { useState, useEffect, useMemo } from 'react';
import Box from '@mui/material/Box';
import { useLocation } from 'react-router-dom';
import { Position } from '@voltz-protocol/v1-sdk';

import { AugmentedAMM, setPageTitle } from '@utilities';
import { Agents, AMMProvider } from '@components/contexts';
import { PageTitleDesc } from '@components/composite';
import { Panel } from '@components/atomic';
import { useAgent } from '@hooks';
import { Page, SwapFormModes } from '@components/interface';
import ConnectedAMMTable from '../ConnectedAMMTable/ConnectedAMMTable';
import ConnectedPositionTable from '../ConnectedPositionTable/ConnectedPositionTable';
import { ConnectedSwapForm } from './components';
import { getRenderMode } from './services';

const Trader: React.FunctionComponent = () => {
  const [formMode, setFormMode] = useState<SwapFormModes>();
  const [amm, setAMM] = useState<AugmentedAMM>();
  const [position, setPosition] = useState<Position>();

  const { onChangeAgent } = useAgent();
  const { pathname, key } = useLocation();

  const pathnameWithoutPrefix = pathname.slice(1);
  const effectiveAmm = position?.amm as AugmentedAMM || amm;
  const renderMode = getRenderMode(formMode, pathnameWithoutPrefix);

  useEffect(() => {
    setFormMode(undefined);
    setAMM(undefined);
    setPosition(undefined);
    onChangeAgent(Agents.FIXED_TRADER);
  }, [setFormMode, setAMM, pathnameWithoutPrefix, onChangeAgent]);

  useEffect(() => {
    handleReset();
  }, [key]);

  useEffect(() => {
    switch(renderMode) {
      case 'pools': {
        setPageTitle('Trader Pools');
        break;
      }
      case 'portfolio': {
        setPageTitle('Trader Portfolio');
        break;
      }
      case 'form': {
        setPageTitle(`${position ? 'Edit' : 'New'} Trader Position`);
        break;
      }
    }
  }, [setPageTitle, renderMode, position])

  const handleSelectAmm = (selected: AugmentedAMM) => {
    setFormMode(SwapFormModes.NEW_POSITION);
    setAMM(selected);
    setPosition(undefined);
  };
  const handleSelectPosition = (selected: Position) => {
    setFormMode(SwapFormModes.EDIT_MARGIN)
    setAMM(undefined);
    setPosition(selected);
  };
  const handleReset = () => {
    setFormMode(undefined)
    setAMM(undefined);
    setPosition(undefined);
  };

  return (
    <Page backgroundView={formMode ? 'form' : 'table'}>

      {renderMode === 'pools' && (
        <Box sx={{ width: '100%', maxWidth: '768px', margin: '0 auto' }}>
          <Box sx={{ marginBottom: (theme) => theme.spacing(12) }}>
            <PageTitleDesc 
              title='Trade Fixed or Variable Rates' 
              desc='Choose a pool and decide whether to trade fixed or variable rates.' 
            />
          </Box>
          <ConnectedAMMTable onSelectItem={handleSelectAmm} />
        </Box>
      )}

      {renderMode === 'portfolio' && (
        <Panel variant='dark' sx={{ width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
          <ConnectedPositionTable onSelectItem={handleSelectPosition} agent={Agents.FIXED_TRADER}/>
        </Panel>
      )}

      {renderMode === 'form' && (
        <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center' }}>
          <AMMProvider amm={effectiveAmm}>
            <ConnectedSwapForm 
              amm={effectiveAmm} 
              mode={formMode}
              onReset={handleReset} 
              position={position}
            />
          </AMMProvider>
        </Box>
      )}
    </Page>
  );
};

export default Trader;
