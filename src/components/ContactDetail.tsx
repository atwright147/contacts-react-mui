import { Avatar, Box, Stack, Typography } from '@mui/material';
import { Addresses } from './details/Addresses/Addresses';
import { Comments } from './details/Comments/Comments';
import { Date } from './details/Date/Date';
import { Emails } from './details/Emails/Emails';
import { String } from './details/String/String';
import { useContactsStore } from "../stores/contacts.store";
import { getInitials } from '../helpers/getInitials/getInitials';
import { Favourite } from './Favourite/Favourite';
import { ButtonBar } from './details/ButtonBar';

export const ContactDetail = () => {
  const selected = useContactsStore((store) => store.selected);

  if (!selected) {
    return <Box>Please select a contact</Box>;
  }

  return (
    <Stack>
      <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
        <Avatar
          alt={getInitials(`${selected.firstName} ${selected.lastName}`)}
          src={`http://localhost:3001/api/v1/avatar/${selected.id}`}
          variant="rounded"
          sx={{ height: 128, width: 128 }}
        />

        <Stack>
          <Stack direction="row" spacing={1}>
            <Typography variant="h3" component="h2">{selected.firstName} {selected.lastName}</Typography>
            <Favourite isFavourite={!!selected.isFavourite}/>
          </Stack>
          <String string={selected.jobTitle} />
          <Date date={selected.dateOfBirth} />
          <ButtonBar />
        </Stack>
      </Stack>

      <Stack spacing={2}>
        <Box>
          <Typography variant="h4" component="h3">Biography</Typography>
          <String string={selected.bio} />
        </Box>

        <Box>
          <Typography variant="h4" component="h3">Emails</Typography>
          <Emails emails={selected.emails} />
        </Box>

        <Box>
          <Typography variant="h4" component="h3">Addresses</Typography>
          <Addresses addresses={selected.addresses} />
        </Box>

        <Box>
          <Typography variant="h4" component="h3">Comments</Typography>
          <Comments comments={selected.comments} />
        </Box>
      </Stack>

      <details>
        <summary>Details</summary>
        {<pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(selected, null, 2)}</pre>}
      </details>
    </Stack>
  )
}
