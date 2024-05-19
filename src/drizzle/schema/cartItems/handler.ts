import { db } from '@/drizzle/db';

async function getCartItems(isUserSignedIn: boolean, userId: string) {
  return isUserSignedIn
    ? await db.query.cartItems.findMany({
        columns: {
          addedAt: false,
        },
        where: (cartItems, { eq }) => eq(cartItems.userId, userId),
        with: {
          product: {
            columns: {
              name: true,
              price: true,
              slug: true,
            },
            with: {
              image: {
                columns: {
                  cart: true,
                },
              },
            },
          },
        },
      })
    : await db.query.anonCartItems.findMany({
        columns: {
          addedAt: false,
        },
        where: (anonCartItems, { eq }) => eq(anonCartItems.userId, userId),
        with: {
          product: {
            columns: {
              name: true,
              price: true,
              slug: true,
            },
            with: {
              image: {
                columns: {
                  cart: true,
                },
              },
            },
          },
        },
      });
}

export default getCartItems;
