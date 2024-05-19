'use server';

import { and, eq } from 'drizzle-orm';

import { anonCartItems } from '@/drizzle/schema/anonCartItems/schema';
import { cartItems } from '@/drizzle/schema/cartItems/schema';
import { db } from '@/drizzle/db';

import { CartItemQuantity, UserProduct } from '@/types/Cart';
import { UserType } from '@/types/Users';

type incrementCartItemQuantityByNumberProps = UserProduct &
  UserType &
  CartItemQuantity;

export async function incrementCartItemQuantityByNumber({
  isUserSignedIn,
  productId,
  userId,
  quantity,
}: incrementCartItemQuantityByNumberProps) {
  const cart = isUserSignedIn ? cartItems : anonCartItems;

  try {
    await db
      .update(cart)
      .set({ quantity: quantity })
      .where(and(eq(cart.userId, userId), eq(cart.productId, productId)));
  } catch (error) {
    throw new Error('Failed to increment the product quantity in the cart');
  }
}
