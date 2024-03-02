import { useQuery } from '@tanstack/react-query';
import { Contact } from '../types/contact.types';

const API_URL = 'http://localhost:3001';

const getContacts = async () => {
  const response = await fetch(`${API_URL}/api/v1/contacts`);
  return response.json();
};

export const useContacts = () => {
  return useQuery<Contact[], Error>({
    queryKey: ['contacts', 'all'],
    queryFn: getContacts,
  });
};
