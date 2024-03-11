import { Grid, Stack, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ContactDetail } from '../components/ContactDetail';
import { ContactsList } from '../components/ContactsList';
import { useContact } from '../queries/contact.query';
import { useContacts } from '../queries/contacts.query';

export function Contacts() {
  const { id } = useParams();
  const navigate = useNavigate();
  useContact(Number(id));
  const { data: contacts } = useContacts();

  useEffect(() => {
    if ((!id || Number.isNaN(Number(id))) && contacts?.[0]) {
      navigate(`/contacts/${contacts?.[0]?.id}`);
    }
  }, [contacts?.[0], id, navigate]);

  return (
    <Stack>
      <Typography variant="h1">Contacts</Typography>
      <Grid container spacing={2}>
        <Grid item lg={3} md={5} xs={12}>
          <ContactsList />
        </Grid>
        <Grid item lg={9} md={7} xs={12}>
          <ContactDetail />
        </Grid>
      </Grid>
    </Stack>
  );
}
