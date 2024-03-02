import { create } from 'zustand';
// import { devtools } from 'zustand/middleware';
import { Contact } from '../types/contact.types';

export interface State {
  selected: Contact | null;
  setSelected: (contact: Contact) => void;
  empty: () => void;
}

export const useContactsStore = create<State>((set) => ({
  selected: null,
  setSelected: (contact) => set({ selected: contact }),
  empty: () => set({ selected: null }),
}));
