'use server';

import { revalidateTag } from 'next/cache';

import { decrementCartItemQuantity, removeCartItem } from '@/actions/cart';
import { deleteAnonUser, getCurrentUserAction } from '@/actions/user';
import { hasUserOrderedBefore } from '@/drizzle/schema/anonOrders/handler';
import { isUserCartEmpty } from '@/drizzle/schema/anonCartItems/handler';

export async function decrementCartItemQuantityAction(
  itemQuantity: number,
  productId: string
) {
  let tag: 'cartItem' | 'anonCartItem';
  try {
    const { userId, isUserSignedIn } = await getCurrentUserAction();
    tag = isUserSignedIn ? 'cartItem' : 'anonCartItem';

    if (itemQuantity === 1) {
      await removeCartItem({ isUserSignedIn, productId, userId });
      if (!isUserSignedIn) {
        const isCartEmpty = await isUserCartEmpty(userId);
        const hasUserPastOrder = await hasUserOrderedBefore(userId);
        if (isCartEmpty && !hasUserPastOrder) await deleteAnonUser(userId);
      }
    } else {
      await decrementCartItemQuantity({
        isUserSignedIn,
        itemQuantity,
        productId,
        userId,
      });
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error();
    }
  }
  revalidateTag(tag);
}
