import React, { useState, useEffect, useMemo } from 'react';
import Box from '@mui/material/Box';
import { useLocation } from 'react-router-dom';
import isNull from 'lodash/isNull';
import { Position } from '@voltz/v1-sdk';

import { Agents } from '@components/contexts';
import { useAgent, AugmentedAMM } from '@hooks';
import { routes } from '@routes';
import { Typography, Button } from '@components/atomic';
import { Page } from '@components/interface';
import ConnectedAMMTable from '../ConnectedAMMTable/ConnectedAMMTable';
import ConnectedPositionTable from '../ConnectedPositionTable/ConnectedPositionTable';
import { ConnectedSwapForm } from './components';

const Trader: React.FunctionComponent = () => {
  const [formActive, setFormActive] = useState(false);
  const [amm, setAMM] = useState<AugmentedAMM | null>(null);
  const [position, setPosition] = useState<Position | null>(null);
  const { onChangeAgent } = useAgent();
  const { pathname } = useLocation();
  const pathnameWithoutPrefix = pathname.slice(1);

  useEffect(() => {
    setFormActive(false);
    setAMM(null);
    setPosition(null);
    onChangeAgent(Agents.FIXED_TRADER);
  }, [setFormActive, setAMM, pathnameWithoutPrefix, onChangeAgent]);

  const pageTitle = useMemo(() => {
    switch (pathnameWithoutPrefix) {
      case routes.SWAP:
        return 'Swap Fixed or Variable Rates';

      case routes.PORTFOLIO:
        return 'PORTFOLIO';

      default:
        return null;
    }
  }, [pathnameWithoutPrefix]);
  const handleSelectAmm = (selected: AugmentedAMM) => {
    setFormActive(true);
    setAMM(selected);
    setPosition(null);
  };
  const handleSelectPosition = (selected: Position) => {
    setFormActive(true);
    setAMM(null);
    setPosition(selected);
  };
  const handleReset = () => {
    setFormActive(false);
    setAMM(null);
    setPosition(null);
  };

  return (
    <Page>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        {!formActive && (
          <Box sx={{ height: '100%' }}>
            <Typography variant="h1">{pageTitle}</Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: (theme) => theme.spacing(90),
                marginBottom: (theme) => theme.spacing(4),
              }}
            >
              Our model allows for sophisticated trading strategies and produces highly attractive
              fixed rates of return for investors.
            </Typography>
            {pathnameWithoutPrefix === routes.SWAP && (
              <Button
                variant="text"
                size="large"
                sx={{ marginBottom: (theme) => theme.spacing(8) }}
                link={`/${routes.POOLS}`}
              >
                PROVIDE LIQUIDITY
              </Button>
            )}
            {pathnameWithoutPrefix === routes.SWAP ? (
              <ConnectedAMMTable onSelectItem={handleSelectAmm} />
            ) : (
              <ConnectedPositionTable onSelectItem={handleSelectPosition} />
            )}
          </Box>
        )}
        {formActive && !isNull(amm) && (
          <Box sx={{ height: '100%' }}>
            <ConnectedSwapForm amm={amm} position={position} onReset={handleReset} />
          </Box>
        )}
      </Box>
    </Page>
  );
};

export default Trader;
