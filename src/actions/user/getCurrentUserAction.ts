'use server';

import { cookies } from 'next/headers';

import { addAnonUserToDatabase } from './addAnonUserToDatabase';
import { auth } from '@/auth';
import { createAnonUser } from './createAnonUser';
import { db } from '@/drizzle/db';

type UserId = string;

export async function getCurrentUserAction() {
  let userId: UserId;
  let isUserSignedIn: boolean = false;

  try {
    const session = await auth();
    if (!!session?.user?.id) {
      userId = session.user.id;
      isUserSignedIn = true;
    } else {
      const cookieStore = cookies();
      if (cookieStore.has('userId')) {
        userId = cookieStore.get('userId')?.value as string;
        if (!userId) {
          throw new Error();
        }
        const isUserInDatabase = await db.query.anonUsers.findFirst({
          where: (anonUsers, { eq }) => eq(anonUsers.id, userId),
        });
        if (!isUserInDatabase) {
          await addAnonUserToDatabase(userId);
        }
      } else {
        userId = await createAnonUser();
        await addAnonUserToDatabase(userId);
      }
    }

    return { userId, isUserSignedIn };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error();
    }
  }
}
