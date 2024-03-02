import { useQuery } from '@tanstack/react-query';
import { Contact } from '../types/contact.types';

const API_URL = 'http://localhost:3001';

const getContact = async (id: number) => {
  const response = await fetch(`${API_URL}/api/v1/contacts/${id}`);
  return response.json();
};

export const useContact = (id: number) => {
  return useQuery<Contact, Error>({
    queryKey: ['contact', id],
    queryFn: () => getContact(id),
    enabled: !!id,
  });
};
