import { AnonUserId } from '@/types/Users';
import { db } from '@/drizzle/db';

export async function hasUserOrderedBefore(userId: AnonUserId) {
  try {
    const userHasPastOrder = await db.query.anonOrders.findFirst({
      where: (anonOrders, { eq }) => eq(anonOrders.userId, userId),
    });

    return !!userHasPastOrder;
  } catch (error) {
    throw new Error('Something went wrong');
  }
}

export const getAnonUserOrders = async (anonUserId: string) => {
  try {
    const anonOrders = await db.query.anonOrders.findMany({
      where: (anonOrders, { eq }) => eq(anonOrders.userId, anonUserId),
      with: {
        orderItems: true,
      },
    });

    return anonOrders;
  } catch (error) {
    throw new Error('Something went wrong');
  }
};
