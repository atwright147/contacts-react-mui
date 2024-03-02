import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface State {
  open: boolean;
  toggle: () => void;
}

export const useNavStore = create<State>()(
  devtools(
    (set) => ({
      open: false,
      toggle: () => set((state) => ({ open: !state.open })),
    }),
    { enabled: true },
  ),
);
