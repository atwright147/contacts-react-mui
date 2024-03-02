import { Suspense } from 'react';
import { List, ListItemAvatar, Avatar, ListItemText, Typography, Box, ListItemButton, ListItem, Stack } from '@mui/material';
import { useContacts } from '../queries/contacts.query';
import { useContactsStore } from '../stores/contacts.store';
import { Loading } from './Loading';
import { getInitials } from '../helpers/getInitials/getInitials';
import { Favourite } from './Favourite/Favourite';

export const ContactsList = () => {
  const { data: contacts } = useContacts();
  const selected = useContactsStore((store) => store.selected);
  const setSelected = useContactsStore((store) => store.setSelected);

  return (
    <Suspense fallback={<Loading />}>
      <Box>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.Box' }} dense>
          {contacts?.map((contact) => (
            <ListItem key={contact.id}>
              <ListItemButton
                alignItems="flex-start"
                selected={selected?.id === contact.id}
                component="button"
                onClick={() => setSelected(contact)}
              >
                <ListItemAvatar>
                  <Avatar
                    alt={getInitials(`${contact.firstName} ${contact.lastName}`)}
                    src={`http://localhost:3001/api/v1/avatar/${contact.id}`}
                    variant="rounded"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Stack direction="row" spacing={1}>
                      <Typography>{`${contact.firstName} ${contact.lastName}`}</Typography>
                      <Favourite isFavourite={!!contact.isFavourite} />
                    </Stack>
                  }
                  secondary={<Typography variant="body2">{contact.jobTitle}</Typography>}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Suspense>
  );
};
