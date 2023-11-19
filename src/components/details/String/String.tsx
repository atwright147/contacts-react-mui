import { Typography } from '@mui/material';
import { FC } from 'react';

interface Props {
  string: string;
}

export const String: FC<Props> = ({ string }): JSX.Element => (
  <Typography>{string}</Typography>
);
