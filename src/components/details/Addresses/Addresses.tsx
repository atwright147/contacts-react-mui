import { FC } from 'react';
import { Address } from '../../../types/address.type';
import { Chip } from '@mui/material';
import styles from '../details.module.scss';

interface Props {
  addresses: Address[]
}

export const Addresses: FC<Props> = ({ addresses }): JSX.Element => {
  return (
    <ul className={styles.list}>
      {addresses.map((address) => {
        const preparedAddress = [
          address.address1,
          address.address2,
          address.address3,
          address.city,
          address.county,
          address.postCode,
        ].join(',\n');

        return (
          <li key={address.address1}>
            <div className={styles.address}>{preparedAddress}</div>
            {!!address.isPrimary && (
              <Chip label="Primary" color="primary" />
            )}
          </li>
        );
      })}
    </ul>
  );
}
