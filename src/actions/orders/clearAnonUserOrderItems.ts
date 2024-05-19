'use server';

import { eq } from 'drizzle-orm';

import { anonOrderItems } from '@/drizzle/schema/anonOrderItems/schema';
import { db } from '@/drizzle/db';

export const clearAnonUserOrderItems = async (orderId: string) => {
  try {
    await db.delete(anonOrderItems).where(eq(anonOrderItems.orderId, orderId));
  } catch (error) {
    throw new Error('Failed to delete anonUser order items from database');
  }
};
