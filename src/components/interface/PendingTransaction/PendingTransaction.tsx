import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import { AugmentedAMM } from '@utilities';
import { useWallet, useSelector, usePositions } from '@hooks';
import { selectors } from '@store';
import { AMMProvider } from '@components/contexts';
import { Button, Panel, Typography, Loading } from '@components/atomic';
import { ProtocolInformation, WalletAddressDisplay } from '@components/composite';

export type PendingTransactionProps = {
  amm: AugmentedAMM;
  transactionId?: string;
  onComplete: () => void;
};

const PendingTransaction: React.FunctionComponent<PendingTransactionProps> = ({
  amm,
  transactionId,
  onComplete,
}) => {
  usePositions();
  const { account } = useWallet();
  const activeTransaction = useSelector(selectors.transactionSelector)(transactionId);

  if (!activeTransaction) {
    return null;
  }

  const transactionLink = activeTransaction.txid
    ? `https://kovan.etherscan.io/tx/${activeTransaction.txid}`
    : undefined;

  const renderStatus = () => {
    if (activeTransaction.resolvedAt) {
      return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box
            sx={{
              paddingTop: (theme) => theme.spacing(6),
              paddingBottom: (theme) => theme.spacing(8),
            }}
          >
            <Box sx={{ height: 30, width: 30 }}>
              <img src="/images/done.png" alt="Done" height="100%" width="100%" />
            </Box>
          </Box>
          <Box
            sx={{
              paddingBottom: (theme) => theme.spacing(2),
            }}
          >
            <Typography variant="subtitle1">TRANSACTION CONFIRMED</Typography>
          </Box>
          <Box
            sx={{
              paddingBottom: (theme) => theme.spacing(8),
            }}
          >
            <Link href={transactionLink} variant="caption" color="primary.light">
              View on etherscan
            </Link>
          </Box>
          <Box
            sx={{
              paddingBottom: (theme) => theme.spacing(10),
            }}
          >
            <Button variant="contained" onClick={onComplete}>
              Go to your portfolio
            </Button>
          </Box>
        </Box>
      );
    }

    if (activeTransaction.failedAt) {
      return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box
            sx={{
              paddingTop: (theme) => theme.spacing(6),
              paddingBottom: (theme) => theme.spacing(8),
            }}
          >
            <Box sx={{ height: 30, width: 30 }}>
              <img src="/images/failed.png" alt="Done" height="100%" width="100%" />
            </Box>
          </Box>
          <Box
            sx={{
              paddingBottom: (theme) => theme.spacing(2),
            }}
          >
            <Typography variant="subtitle1">TRANSACTION FAILED</Typography>
          </Box>
          <Box
            sx={{
              paddingBottom: (theme) => theme.spacing(8),
            }}
          >
            <Typography variant="body2" color="error">
              {activeTransaction.failureMessage || "Unrecognized error"}
            </Typography>
          </Box>
          <Box
            sx={{
              paddingBottom: (theme) => theme.spacing(10),
            }}
          >
            <Button variant="contained" onClick={onComplete}>
              Go to your portfolio
            </Button>
          </Box>
        </Box>
      );
    }

    if (activeTransaction.succeededAt) {
      return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box
            sx={{
              paddingTop: (theme) => theme.spacing(6),
              paddingBottom: (theme) => theme.spacing(8),
            }}
          >
            <Loading />
          </Box>
          <Box
            sx={{
              paddingBottom: (theme) => theme.spacing(2),
            }}
          >
            <Typography variant="h6">TRANSACTION CONFIRMED</Typography>
          </Box>
          <Box
            sx={{
              paddingBottom: (theme) => theme.spacing(8),
            }}
          >
            <Link href={transactionLink} target="_blank" variant="caption" color="primary.light">
              View on etherscan
            </Link>
          </Box>
          <Box
            sx={{
              paddingBottom: (theme) => theme.spacing(10),
              textAlign: 'center',
            }}
          >
            <Typography variant="caption" color="secondary">
              Wait a few moments for the blockchain data to synchronize
            </Typography>
          </Box>
        </Box>
      );
    }

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box
          sx={{
            paddingTop: (theme) => theme.spacing(6),
            paddingBottom: (theme) => theme.spacing(8),
          }}
        >
          <Loading />
        </Box>
        <Box
          sx={{
            paddingBottom: (theme) => theme.spacing(2),
          }}
        >
          <Typography variant="h6">WAITING FOR CONFIRMATION</Typography>
        </Box>
        <Box
          sx={{
            paddingBottom: (theme) => theme.spacing(2),
          }}
        >
          <WalletAddressDisplay address={account} />
        </Box>
        <Box
          sx={{
            paddingBottom: (theme) => theme.spacing(10),
          }}
        >
          <Typography variant="caption" color="secondary">
            Confirm this transaction in your wallet
          </Typography>
        </Box>
      </Box>
    );
  };

  return (
    <Panel
      variant="dark"
      sx={{
        marginTop: 12,
        padding: 6,
        width: (theme) => theme.spacing(80),
        boxShadow: '0px 0px 60px rgba(255, 89, 156, 0.2)',
      }}
    >
      {renderStatus()}
      <Panel variant="main" sx={{ padding: 6 }}>
        <AMMProvider amm={amm}>
          <ProtocolInformation protocol={amm.protocol} fixedApr={amm.fixedApr} />
        </AMMProvider>
        <Box
          sx={{
            marginBottom: (theme) => theme.spacing(4),
          }}
        >
          <Typography label="NOTIONAL AMOUNT" variant="body2">
            {activeTransaction.notional} {amm.protocol}
          </Typography>
        </Box>
        <Box
          sx={{
            marginBottom: (theme) => theme.spacing(4),
          }}
        >
          <Typography label="MARGIN" variant="body2">
            {activeTransaction.margin} {amm.protocol}
          </Typography>
        </Box>
      </Panel>
    </Panel>
  );
};

export default PendingTransaction;
