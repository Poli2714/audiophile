'use server';

import { revalidateTag } from 'next/cache';

import { clearCart } from './clearCart';
import { deleteAnonUser } from '@/actions/user';
import { getCurrentUser } from '@/utils/getCurrentUser/getCurrentUser';
import { hasUserOrderedBefore } from '@/drizzle/schema';

export async function clearCartAction() {
  const { isUserSignedIn, userId } = await getCurrentUser();
  if (!userId) return;
  const tag = isUserSignedIn ? 'cartItem' : 'anonCartItem';

  try {
    await clearCart(isUserSignedIn, userId);
    const doesUserHavePastOrders = await hasUserOrderedBefore(userId);
    if (!isUserSignedIn && !doesUserHavePastOrders) {
      await deleteAnonUser(userId);
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
