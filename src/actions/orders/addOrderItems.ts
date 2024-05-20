'use server';

import { eq } from 'drizzle-orm';

import { anonCartItems } from '@/drizzle/schema/anonCartItems/schema';
import { anonOrderItems } from '@/drizzle/schema/anonOrderItems/schema';
import { cartItems } from '@/drizzle/schema/cartItems/schema';
import { db } from '@/drizzle/db';
import { orderItems } from '@/drizzle/schema/orderItems/schema';

export async function addOrderItems(
  isUserSignedIn: boolean,
  orderId: string,
  userId: string
) {
  const orderItemsTable = isUserSignedIn ? orderItems : anonOrderItems;
  const cart = isUserSignedIn ? cartItems : anonCartItems;

  try {
    const userCart = await db
      .select({
        quantity: cart.quantity,
        productId: cart.productId,
      })
      .from(cart)
      .where(eq(cart.userId, userId));
    const { quantity, productId } = userCart[0];

    await db.insert(orderItemsTable).values({
      quantity,
      productId,
      orderId,
    });
  } catch (error) {
    throw new Error('Failed to add order items to database');
  }
}
