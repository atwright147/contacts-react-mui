import { Typography } from '@mui/material';
import { FC } from 'react';

interface Props {
  string: string;
}

export const FormatString: FC<Props> = ({ string }): JSX.Element => <Typography>{string}</Typography>;
