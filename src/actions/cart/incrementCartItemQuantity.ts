'use server';

import { and, eq } from 'drizzle-orm';
import { revalidateTag } from 'next/cache';

import { anonCartItems } from '@/drizzle/schema/anonCartItems/schema';
import { cartItems } from '@/drizzle/schema/cartItems/schema';
import { db } from '@/drizzle/db';
import { getCurrentUserAction } from '@/actions/user';

async function incrementCartItemQuantity(
  itemQuantity: number,
  productId: string
) {
  const { userId, isUserSignedIn } = await getCurrentUserAction();
  const cart = isUserSignedIn ? cartItems : anonCartItems;
  const tag = isUserSignedIn ? 'cartItem' : 'anonCartItem';

  try {
    await db
      .update(cart)
      .set({ quantity: itemQuantity + 1 })
      .where(and(eq(cart.userId, userId), eq(cart.productId, productId)));
  } catch (error) {
    throw new Error('Failed to increment the product quantity in the cart');
  }
  revalidateTag(tag);
}

export default incrementCartItemQuantity;
