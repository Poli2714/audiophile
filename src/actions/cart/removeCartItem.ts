'use server';

import { and, eq } from 'drizzle-orm';

import { anonCartItems } from '@/drizzle/schema/anonCartItems/schema';
import { cartItems } from '@/drizzle/schema/cartItems/schema';
import { db } from '@/drizzle/db';

type removeCartItemProps = {
  isUserSignedIn: boolean;
  productId: string;
  userId: string;
};

export async function removeCartItem({
  isUserSignedIn,
  productId,
  userId,
}: removeCartItemProps) {
  const cartItem = isUserSignedIn ? cartItems : anonCartItems;

  try {
    await db
      .delete(cartItem)
      .where(
        and(eq(cartItem.userId, userId), eq(cartItem.productId, productId))
      );
  } catch (error) {
    throw new Error('Failed to delete the product from the cart');
  }
}
