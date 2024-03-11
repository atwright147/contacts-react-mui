import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Stack, Typography } from '@mui/material';
import { Suspense } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getInitials } from '../helpers/getInitials/getInitials';
import { useContacts } from '../queries/contacts.query';
import { Favourite } from './Favourite/Favourite';
import { Loading } from './Loading';

export const ContactsList = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: contacts } = useContacts();

  const handleContactClick = (id: number): void => {
    navigate(`/contacts/${id}`);
  };

  return (
    <Suspense fallback={<Loading />}>
      <Box>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.Box' }} dense>
          {contacts?.map((contact) => (
            <ListItem key={contact.id} id={`contact-${contact.id}`}>
              <ListItemButton
                alignItems="flex-start"
                selected={Number(id) === contact.id}
                component="button"
                onClick={() => handleContactClick(contact.id)}
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
                    <Stack direction="row" spacing={1} justifyContent="space-between">
                      <Typography>
                        {`${contact.firstName} ${contact.lastName}`} {contact.id}
                      </Typography>
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
