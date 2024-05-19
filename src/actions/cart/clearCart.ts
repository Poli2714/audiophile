'use server';

import { eq } from 'drizzle-orm';

import { anonCartItems } from '@/drizzle/schema/anonCartItems/schema';
import { cartItems } from '@/drizzle/schema/cartItems/schema';
import { db } from '@/drizzle/db';

export async function clearCart(isUserSignedIn: boolean, userId: string) {
  const cart = isUserSignedIn ? cartItems : anonCartItems;

  try {
    await db.delete(cart).where(eq(cart.userId, userId));
  } catch (error) {
    throw new Error('Failed to clear the cart');
  }
}
