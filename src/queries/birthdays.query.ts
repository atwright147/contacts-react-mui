import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

import { Contact } from '../types/contact.types';

type ContactWithDateOfBirth = Contact & { birthdayDate: dayjs.Dayjs; isSameOrAfter: boolean; isSameOrBefore: boolean };

const API_URL = 'http://localhost:3001';

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

const getBirthdays = async () => {
  const response = await fetch(`${API_URL}/api/v1/contacts/birthdays`);
  const data = await response.json();
  const thisYear = new Date().getFullYear();

  const processed = data?.map((contact: Contact) => ({
    ...contact,
    birthdayDate: dayjs(contact.dateOfBirth).set('year', thisYear),
    isSameOrAfter: dayjs(dayjs(contact.dateOfBirth).set('year', thisYear)).isSameOrAfter(dayjs(), 'day'),
    isSameOrBefore: dayjs(dayjs(contact.dateOfBirth).set('year', thisYear)).isSameOrBefore(dayjs(), 'day'),
  }));

  // sort by date
  processed
    ?.filter((contact: ContactWithDateOfBirth) => contact.isSameOrAfter)
    .sort((a: ContactWithDateOfBirth, b: ContactWithDateOfBirth) => (a.birthdayDate.toISOString() < b.birthdayDate.toISOString() ? -1 : 1));

  return processed;
};

export const useBirthdays = () => {
  return useQuery<Contact[], Error>({
    queryKey: ['contacts', 'birthdays'],
    queryFn: getBirthdays,
  });
};
