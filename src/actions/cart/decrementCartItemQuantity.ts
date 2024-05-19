'use server';

import { and, eq } from 'drizzle-orm';

import { anonCartItems } from '@/drizzle/schema/anonCartItems/schema';
import { cartItems } from '@/drizzle/schema/cartItems/schema';
import { db } from '@/drizzle/db';

type decrementItemQuantityProps = {
  isUserSignedIn: boolean;
  itemQuantity: number;
  productId: string;
  userId: string;
};

export async function decrementCartItemQuantity({
  isUserSignedIn,
  itemQuantity,
  productId,
  userId,
}: decrementItemQuantityProps) {
  const cartItem = isUserSignedIn ? cartItems : anonCartItems;

  try {
    await db
      .update(cartItem)
      .set({ quantity: itemQuantity - 1 })
      .where(
        and(eq(cartItem.userId, userId), eq(cartItem.productId, productId))
      );
  } catch (error) {
    throw new Error('Failed to decrement product quantity');
  }
}
