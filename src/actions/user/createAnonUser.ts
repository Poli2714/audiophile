'use server';

import { cookies } from 'next/headers';
import { v4 as uuidv4 } from 'uuid';

export async function createAnonUser() {
  const cookieStore = cookies();

  try {
    const anonUserId = uuidv4();
    cookieStore.set('userId', anonUserId);
    return anonUserId;
  } catch (error) {
    throw new Error('Failed to create a new anonUserId');
  }
}
