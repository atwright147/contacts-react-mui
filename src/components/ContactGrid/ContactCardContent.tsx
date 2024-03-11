import { Avatar, Stack, Typography } from '@mui/material';
import { FC } from 'react';

import { getInitials } from '../../helpers/getInitials/getInitials';
import { Contact } from '../../types/contact.types';
import { Favourite } from '../Favourite/Favourite';
import { FormatString } from '../details/FormatString/FormatString';

interface Props {
  contact: Contact;
}

export const ContactCardContent: FC<Props> = ({ contact: contacts }): JSX.Element => (
  <Stack>
    <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
      <Avatar
        alt={getInitials(`${contacts.firstName} ${contacts.lastName}`)}
        src={`http://localhost:3001/api/v1/avatar/${contacts.id}`}
        variant="rounded"
        sx={{ height: 50, width: 50 }}
      />

      <Stack spacing={0.5} width="100%">
        <Stack direction="row" spacing={3} justifyContent="space-between" width="100%">
          <Typography variant="h4" component="h1">
            {contacts.firstName} {contacts.lastName}
          </Typography>
          <Favourite isFavourite={!!contacts.isFavourite} />
        </Stack>
        <FormatString string={contacts.jobTitle} />
      </Stack>
    </Stack>

    <Typography>{contacts.emails?.[0].email}</Typography>
  </Stack>
);
