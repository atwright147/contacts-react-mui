import { FC } from 'react';
import { Star, StarOutline } from '@mui/icons-material';
import styles from './Favourite.module.scss';

interface Props {
  isFavourite?: boolean;
}

export const Favourite: FC<Props> = ({ isFavourite }) => {
  return (
    <div className={styles.favourite} data-testid='favourite'>
      {isFavourite ? <Star /> : <StarOutline />}
    </div>
  );
}
