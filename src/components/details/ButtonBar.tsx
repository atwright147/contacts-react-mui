import ForumIcon from '@mui/icons-material/Forum';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PhoneIcon from '@mui/icons-material/Phone';
import ShareIcon from '@mui/icons-material/Share';
import { Box, BoxProps, Button } from '@mui/material';
import classnames from 'classnames';
import { FC } from 'react';

import styles from './ButtonBar.module.scss';
import { ButtonMenu } from './ButtonMenu';

export const ButtonBar: FC<BoxProps> = ({ className, ...props }): JSX.Element => {
  return (
    <Box className={classnames(styles.buttons, className)} {...props}>
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
    </Box>
  );
};
