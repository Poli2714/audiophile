import { db } from '@/drizzle/db';

export const getAnonUserIdInDatabase = async (id: string) => {
  const anonUserInDb = await db.query.anonUsers.findFirst({
    columns: {
      id: true,
    },
    where: (anonUsers, { eq }) => eq(anonUsers.id, id),
  });

  return anonUserInDb?.id;
};
