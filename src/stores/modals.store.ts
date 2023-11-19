import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface State {
  contactsEdit: boolean,
  setContactsEdit: (value: boolean) => void,
}

export const useModalsStore = create<State>()(
  devtools(
    (set) => ({
      contactsEdit: false,
      setContactsEdit: (value) => set({ contactsEdit: value }),
    }),
    { enabled: true },
  ),
);
