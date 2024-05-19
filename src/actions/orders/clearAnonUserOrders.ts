'use server';

import { eq } from 'drizzle-orm';

import { anonOrders } from '@/drizzle/schema/anonOrders/schema';
import { db } from '@/drizzle/db';

export const clearAnonUserOrders = async (anonUserId: string) => {
  try {
    await db.delete(anonOrders).where(eq(anonOrders.userId, anonUserId));
  } catch (error) {
    throw new Error('Failed to clear anonUserOrders from database');
  }
};
