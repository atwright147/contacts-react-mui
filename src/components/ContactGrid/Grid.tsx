import { Box, SxProps, Theme } from '@mui/material';
import classnames from 'classnames';
import { FC, ReactNode } from 'react';

import styles from './Grid.module.scss';

interface Props {
  children: ReactNode;
  className?: string;
  sx?: SxProps<Theme>;
}

export const Grid: FC<Props> = ({ children, className, sx }): JSX.Element => {
  return (
    <Box className={classnames(styles.grid, className)} sx={sx}>
      {children}
    </Box>
  );
};
