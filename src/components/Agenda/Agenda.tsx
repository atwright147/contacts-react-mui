import { Box, Paper, Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

import { useBirthdays } from '../../queries/birthdays.query';

dayjs.extend(advancedFormat);

export const Agenda = () => {
  const { data: contacts } = useBirthdays();

  return (
    <Box>
      <Typography variant="h2">Upcoming Birthdays</Typography>

      <Stack spacing={2}>
        {contacts?.map((contact) => {
          const date = dayjs(contact.dateOfBirth);

          return (
            <Paper component="section" elevation={3} key={contact.id} sx={{ p: 1 }}>
              <Stack direction="row" spacing={4}>
                <Stack>
                  <Typography variant="h4" component="p">
                    {date.format('Do')}
                  </Typography>
                  <Typography>{date.format('MMMM')}</Typography>
                </Stack>
                <Stack>
                  <Typography variant="h4" component="p">
                    {contact.firstName} {contact.lastName}
                  </Typography>
                  <Typography>{contact.emails?.[0].email}</Typography>
                </Stack>
              </Stack>
            </Paper>
          );
        })}
      </Stack>
    </Box>
  );
};
