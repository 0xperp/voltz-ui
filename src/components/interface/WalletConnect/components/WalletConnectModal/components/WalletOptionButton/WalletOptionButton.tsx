import React from 'react';

import { Button, Icon, IconProps, Typography } from '@components/atomic';

export type WalletOptionButtonProps = {
  onClick: () => void;
  title: string;
  icon: IconProps['name'];
  selected: boolean;
};

const WalletOptionButton: React.FunctionComponent<WalletOptionButtonProps> = ({
  onClick,
  title,
  icon,
  selected,
}) => (
  <Button
    onClick={!selected ? onClick : undefined}
    variant="darker"
    sx={{
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      padding: (theme) => theme.spacing(4),
    }}
    selected={selected}
  >
    <Typography variant="h6">
      {selected && '• '}
      {title}
    </Typography>
    <Icon name={icon} />
  </Button>
);

export default WalletOptionButton;
