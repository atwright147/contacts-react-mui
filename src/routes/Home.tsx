import { Grid, Typography } from '@mui/material';

import { Agenda } from '../components/Agenda/Agenda';
import { ContactGrid } from '../components/ContactGrid/ContactGrid';

export function Home() {
  return (
    <>
      <Typography variant="h1">Home</Typography>

      <Grid container>
        <Grid item lg={4} md={6} xs={12}>
          <Agenda />
        </Grid>

        <Grid item lg={8} md={6} xs={12} sx={{ pl: 2 }}>
          <Typography variant="h2">Favourite Contacts</Typography>
          <ContactGrid />
        </Grid>
      </Grid>
    </>
  );
}
