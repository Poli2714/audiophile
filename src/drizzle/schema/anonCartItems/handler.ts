import { AnonUserId } from '@/types/Users';
import { db } from '@/drizzle/db';

export async function isUserCartEmpty(userId: AnonUserId) {
  try {
    const anonUserCart = await db.query.anonCartItems.findFirst({
      where: (anonCartItems, { eq }) => eq(anonCartItems.userId, userId),
    });

    return !anonUserCart;
  } catch (error) {
    throw new Error();
  }
}

export async function getAnonUserCart(userId: AnonUserId) {
  try {
    const anonUserCart = await db.query.anonCartItems.findMany({
      columns: {
        addedAt: false,
      },
      where: (anonCartItems, { eq }) => eq(anonCartItems.userId, userId),
    });

    return anonUserCart;
  } catch (error) {
    throw new Error('Failed to get anon user cart');
  }
}
