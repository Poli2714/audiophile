'use server';

import { anonOrders } from '@/drizzle/schema/anonOrders/schema';
import { CheckoutFormSchemaProps } from '@/validations/CheckoutFormValidation';
import { db } from '@/drizzle/db';
import { orders } from '@/drizzle/schema/orders/schema';

export async function addToOrder(
  formData: CheckoutFormSchemaProps,
  isUserSignedIn: boolean,
  orderId: string,
  userId: string
) {
  const orderTable = isUserSignedIn ? orders : anonOrders;

  try {
    await db.insert(orderTable).values({
      id: orderId,
      paymentMethod: formData.payment,
      status: 'proccessing',
      userId,
    });
  } catch (error) {
    throw new Error('Failed to complete the order');
  }
}
