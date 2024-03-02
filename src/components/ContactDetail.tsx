import { Avatar, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, Typography } from '@mui/material';

import { getInitials } from '../helpers/getInitials/getInitials';
import { useContact } from '../queries/contact.query';
import { useContactsStore } from '../stores/contacts.store';
import { useModalsStore } from '../stores/modals.store';
import { ContactsForm } from './ContactsForm';
import { Favourite } from './Favourite/Favourite';
import { Addresses } from './details/Addresses/Addresses';
import { ButtonBar } from './details/ButtonBar';
import { Comments } from './details/Comments/Comments';
import { Emails } from './details/Emails/Emails';
import { FormatDate } from './details/FormatDate/FormatDate';
import { FormatString } from './details/FormatString/FormatString';

export const ContactDetail = () => {
  const selected = useContactsStore((store) => store.selected);
  const { data: contact, isError, isLoading } = useContact(selected?.id as number);
  const contactsEdit = useModalsStore((store) => store.contactsEdit);
  const setContactsEdit = useModalsStore((store) => store.setContactsEdit);

  console.info('contact', contact);
  console.info('isLoading', isLoading);
  console.info('isError', isError);

  if (!selected) {
    return <Box>Please select a contact</Box>;
  }

  return (
    <>
      {!isLoading && !isError && contact && (
        <>
          <Stack>
            <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
              <Avatar
                alt={getInitials(`${contact.firstName} ${contact.lastName}`)}
                src={`http://localhost:3001/api/v1/avatar/${contact.id}`}
                variant="rounded"
                sx={{ height: 128, width: 128 }}
              />

              <Stack>
                <Stack direction="row" spacing={1}>
                  <Typography variant="h3" component="h2">
                    {contact.firstName} {contact.lastName}
                  </Typography>
                  <Favourite isFavourite={!!contact.isFavourite} />
                </Stack>
                <FormatString string={contact.jobTitle} />
                <FormatDate date={contact.dateOfBirth} />
                <ButtonBar />
              </Stack>
            </Stack>

            <Stack spacing={2}>
              <Box>
                <Typography variant="h4" component="h3">
                  Biography
                </Typography>
                <FormatString string={contact.bio} />
              </Box>

              <Box>
                <Typography variant="h4" component="h3">
                  Emails
                </Typography>
                <Emails emails={contact.emails} />
              </Box>

              <Box>
                <Typography variant="h4" component="h3">
                  Addresses
                </Typography>
                <Addresses addresses={contact.addresses} />
              </Box>

              <Box>
                <Typography variant="h4" component="h3">
                  Comments
                </Typography>
                <Comments comments={contact.comments} />
              </Box>
            </Stack>

            <details>
              <summary>Details</summary>
              {<pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(selected, null, 2)}</pre>}
            </details>
          </Stack>

          <Dialog fullWidth maxWidth="sm" open={contactsEdit} onClose={() => setContactsEdit(false)}>
            <DialogTitle variant="h3">Edit Contact</DialogTitle>

            <DialogContent sx={{ pt: 2, mt: 2 }}>
              <ContactsForm />
            </DialogContent>

            <DialogActions>
              <Button onClick={() => setContactsEdit(false)}>Cancel</Button>
              <Button variant="contained" onClick={() => setContactsEdit(false)}>
                Save
              </Button>
            </DialogActions>
          </Dialog>
        </>
      )}
    </>
  );
};
