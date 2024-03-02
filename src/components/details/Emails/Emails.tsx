import { Link } from '@mui/material';
import { FC } from 'react';
import { Email } from '../../../types/email.type';
import styles from '../details.module.scss';

interface Props {
  emails: Email[];
}

export const Emails: FC<Props> = ({ emails }): JSX.Element => {
  return (
    <ul className={styles.list}>
      {emails?.map((email) => (
        <li key={email.id}>
          <Link href={`mailto:${email.email}`}>{email.email}</Link>
        </li>
      ))}
    </ul>
  );
};
