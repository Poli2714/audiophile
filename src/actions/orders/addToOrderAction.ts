'use server';

import { v4 as uuidv4 } from 'uuid';

import { addOrderItems } from './addOrderItems';
import { addToOrder } from './addToOrder';
import {
  CheckoutFormSchemaProps,
  checkoutFormSchema,
} from '@/validations/CheckoutFormValidation';
import { clearCart } from '../cart';
import { getCurrentUser } from '@/utils/getCurrentUser/getCurrentUser';

export async function addToOrderAction(formData: CheckoutFormSchemaProps) {
  const result = checkoutFormSchema.safeParse(formData);
  if (!result.success) {
    const errors = result.error.flatten();
    return {
      error: errors.fieldErrors,
    };
  }
  const { isUserSignedIn, userId } = await getCurrentUser();
  if (!userId) throw new Error('Something went wrong');

  try {
    const orderId = uuidv4();
    await addToOrder(formData, isUserSignedIn, orderId, userId);
    await addOrderItems(isUserSignedIn, orderId, userId);
    await clearCart(isUserSignedIn, userId);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('Failed to complete the order');
    }
  }
}
