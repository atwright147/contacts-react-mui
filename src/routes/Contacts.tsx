import { Typography } from '@mui/material';
import { useContacts } from '../queries/contacts.query';

export function Contacts() {
  const { data, isLoading, isError } = useContacts();

  return (
    <>
      <Typography variant="h1">Contacts</Typography>
      <Typography>Contacts route works!</Typography>
      <pre>data: {JSON.stringify(data, null, 2)}</pre>
      <pre>isLoading: {JSON.stringify(isLoading, null, 2)}</pre>
      <pre>isError: {JSON.stringify(isError, null, 2)}</pre>
    </>
  );
}
