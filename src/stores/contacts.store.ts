import { create } from 'zustand';

export interface State {
  selectedId: number | undefined;
  setSelectedId: (id: number) => void;
  deselect: () => void;
}

export const useContactsStore = create<State>()((set) => ({
  selectedId: undefined,
  setSelectedId: (id) => set({ selectedId: id }),
  deselect: () => set({ selectedId: undefined }),
}));
