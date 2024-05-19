import { StateCreator } from 'zustand';

export type QuantitySlice = {
  qty: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

export const createQuantitySlice: StateCreator<
  QuantitySlice,
  [],
  [],
  QuantitySlice
> = (set) => ({
  qty: 1,
  increment: () => set((state) => ({ qty: state.qty + 1 })),
  decrement: () => set((state) => ({ qty: state.qty - 1 })),
  reset: () => set({ qty: 1 }),
});
