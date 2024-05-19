import { create } from 'zustand';

import { createQuantitySlice, QuantitySlice } from './quantitySlice';
import { createPendingSlice, PendingSlice } from './pendingSlice';

export const useStore = create<QuantitySlice & PendingSlice>()((...a) => ({
  ...createQuantitySlice(...a),
  ...createPendingSlice(...a),
}));
