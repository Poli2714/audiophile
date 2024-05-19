import { StateCreator } from 'zustand';

export type PendingSlice = {
  isPending: boolean;
  setIsPending: () => void;
};

export const createPendingSlice: StateCreator<
  PendingSlice,
  [],
  [],
  PendingSlice
> = (set) => ({
  isPending: false,
  setIsPending: () =>
    set((state) => ({
      isPending: !state.isPending,
    })),
});
