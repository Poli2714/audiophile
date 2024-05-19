'use server';

import { eq } from 'drizzle-orm';

import { anonUsers } from '@/drizzle/schema/anonUsers/schema';
import { AnonUserId } from '@/types/Users';
import { db } from '@/drizzle/db';

export async function deleteAnonUser(userId: AnonUserId) {
  try {
    await db.delete(anonUsers).where(eq(anonUsers.id, userId));
  } catch (error) {
    throw new Error('Failed to delete anonUser from database');
  }
}
