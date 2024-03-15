import { create } from 'zustand';
import { FormValues } from '../components/ContactListSearchBar';

export interface State {
  searchForm: FormValues;
  setSearchForm: (data: FormValues) => void;
  selectedId: number | undefined;
  setSelectedId: (id: number) => void;
  deselect: () => void;
}

export const useContactsStore = create<State>()((set) => ({
  searchForm: {
    search: '',
    gender: 'all',
    view: 'all',
  },
  setSearchForm: (data) => set({ searchForm: data }),
  selectedId: undefined,
  setSelectedId: (id) => set({ selectedId: id }),
  deselect: () => set({ selectedId: undefined }),
}));
