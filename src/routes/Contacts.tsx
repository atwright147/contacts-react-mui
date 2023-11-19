import { Box, Grid, Stack, Typography } from '@mui/material';
import { ContactsList } from '../components/ContactsList';
import { ContactDetail } from '../components/ContactDetail';

export function Contacts() {
  return (
    <Stack>
      <Typography variant="h1">Contacts</Typography>
      <Grid container spacing={2}>
        <Grid item lg={2} md={5} xs={12}>
          <ContactsList />
        </Grid>
        <Grid item lg={10} md={7} xs={12}>
          <ContactDetail />
        </Grid>
      </Grid>
    </Stack>
  );
}
