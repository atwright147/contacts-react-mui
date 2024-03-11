import { Box, Paper } from '@mui/material';
import { FC, ReactNode } from 'react';

import styles from './Card.module.scss';

interface Props {
  children: ReactNode;
}

export const Card: FC<Props> = ({ children }): JSX.Element => (
  <Paper component="section" sx={{ p: 2 }} className={styles.card}>
    {children}
  </Paper>
);
