import { FC } from 'react';
import { isoToLocaleString } from '../../../helpers/date/date.helper';

interface Props {
  date: string;
}

export const Date: FC<Props> = ({ date }): JSX.Element => (
  <time dateTime={date}>{isoToLocaleString(date)}</time>
);
