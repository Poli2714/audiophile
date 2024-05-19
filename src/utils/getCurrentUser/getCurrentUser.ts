import { cookies } from 'next/headers';

import { auth } from '@/auth';
import { UserId } from '@/types/Users';

export async function getCurrentUser() {
  let userId: UserId = undefined;
  let isUserSignedIn: boolean = false;
  const session = await auth();

  if (!!session?.user?.id) {
    userId = session.user.id;
    isUserSignedIn = true;
  } else {
    const cookieStore = cookies();
    if (cookieStore.has('userId')) {
      userId = cookieStore.get('userId')?.value;
    }
  }

  return { userId, isUserSignedIn };
}
