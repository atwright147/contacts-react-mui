import { FC, useMemo } from 'react';

import { useContacts } from '../../queries/contacts.query';
import { Card } from './Card';
import { ContactCardContent } from './ContactCardContent';
import { Grid } from './Grid';

export const ContactGrid: FC = (): JSX.Element => {
  const { data: contacts } = useContacts();

  const favourites = useMemo(() => contacts?.filter((contact) => contact.isFavourite), [contacts]);

  return (
    <Grid>
      {favourites?.map((contact) => (
        <Card key={contact.id}>
          <ContactCardContent contact={contact} />
        </Card>
      ))}
    </Grid>
  );
};
