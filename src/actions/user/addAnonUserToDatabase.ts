'use server';

import { anonUsers } from '@/drizzle/schema/anonUsers/schema';
import { db } from '@/drizzle/db';

export async function addAnonUserToDatabase(userId: string) {
  try {
    await db.insert(anonUsers).values({
      id: userId,
    });
  } catch (error) {
    throw new Error('Failed to add userId to database');
  }
}
