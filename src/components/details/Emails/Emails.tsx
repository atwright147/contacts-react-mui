import { Chip, Link } from '@mui/material';
import { FC } from 'react';
import { Email } from '../../../types/email.type';
import styles from '../details.module.scss';

interface Props {
  emails: Email[];
}

export const Emails: FC<Props> = ({ emails }): JSX.Element => {
  return (
    <ul className={styles.unlistVertical}>
      {emails?.map((email) => (
        <li key={email.id}>
          <Link href={`mailto:${email.email}`}>{email.email}</Link>
          {!!email.isPrimary && <Chip label="Primary" color="primary" size="small" />}
        </li>
      ))}
    </ul>
  );
};
