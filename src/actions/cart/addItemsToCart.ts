'use server';

import { anonCartItems } from '@/drizzle/schema/anonCartItems/schema';
import { cartItems } from '@/drizzle/schema/cartItems/schema';
import { db } from '@/drizzle/db';

import { CartItemQuantity, UserProduct } from '@/types/Cart';
import { UserType } from '@/types/Users';

type addItemsToCartProps = UserType & UserProduct & CartItemQuantity;

export async function addItemsToCart({
  isUserSignedIn,
  productId,
  quantity,
  userId,
}: addItemsToCartProps) {
  const cart = isUserSignedIn ? cartItems : anonCartItems;

  try {
    await db.insert(cart).values({
      quantity,
      productId,
      userId,
    });
  } catch (error) {
    throw new Error('Failed to add products to cart');
  }
}
