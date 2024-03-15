import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Stack, Typography } from '@mui/material';
import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getInitials } from '../helpers/getInitials/getInitials';
import { useContacts } from '../queries/contacts.query';
import { useContactsStore } from '../stores/contacts.store';
import { Contact } from '../types/contact.types';
import { ContactListSearchBar } from './ContactListSearchBar';
import { Favourite } from './Favourite/Favourite';

export const ContactsList = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: contacts } = useContacts();
  const { searchForm } = useContactsStore((store) => ({ searchForm: store.searchForm }));

  const contactsToDisplay = useMemo(() => {
    let filteredContacts = contacts;

    if (searchForm.search) {
      filteredContacts = filteredContacts?.filter((contact) =>
        `${contact.firstName} ${contact.lastName}`.toLowerCase().includes(searchForm.search.toLowerCase()),
      );
    }

    if (searchForm.view === 'favourites') {
      filteredContacts = filteredContacts?.filter((contact) => contact.isFavourite);
    }

    if (searchForm.view === 'non-favourites') {
      filteredContacts = filteredContacts?.filter((contact) => !contact.isFavourite);
    }

    if (searchForm.gender !== 'all') {
      filteredContacts = filteredContacts?.filter((contact) => contact.gender === searchForm.gender);
    }

    return filteredContacts;
  }, [searchForm, contacts]);

  const handleContactClick = (id: number): void => {
    navigate(`/contacts/${id}`);
  };

  return (
    <Box>
      <ContactListSearchBar />

      <List dense>
        {contactsToDisplay?.map((contact) => (
          <ListItem key={contact.id} id={`contact-${contact.id}`} sx={{ p: 0 }}>
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
  );
};
