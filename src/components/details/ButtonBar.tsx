import { Button } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';
import PhoneIcon from '@mui/icons-material/Phone';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { ButtonMenu } from './ButtonMenu';

import styles from './ButtonBar.module.scss';

export const ButtonBar = (): JSX.Element => {
  return (
    <div className={styles.buttons}>
      <Button type="button" variant="contained">
        <ForumIcon />
        Message
      </Button>

      <Button type="button">
        <PhoneIcon />
      </Button>

      <Button type="button">
        <ShareIcon />
      </Button>

      <ButtonMenu>
        <MoreHorizIcon />
      </ButtonMenu>
    </div>
  );
};
