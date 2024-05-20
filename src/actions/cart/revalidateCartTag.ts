'use server';

import { revalidateTag } from 'next/cache';

import { getCurrentUser } from '@/utils/getCurrentUser/getCurrentUser';

export async function revalidateCartTag() {
  const { isUserSignedIn } = await getCurrentUser();

  const tag = isUserSignedIn ? 'cartItem' : 'anonCartItem';

  revalidateTag(tag);
}
