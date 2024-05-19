import { AdapterUser } from 'next-auth/adapters';
import { cookies } from 'next/headers';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import Google from 'next-auth/providers/google';
import NextAuth, { User } from 'next-auth';

import {
  addItemsToCart,
  clearCart,
  incrementCartItemQuantityByNumber,
} from './actions/cart';
import { clearAnonUserOrderItems, clearAnonUserOrders } from './actions/orders';
import { db } from '@/drizzle/db';
import { deleteAnonUser } from './actions/user';
import { getAnonUserCart } from './drizzle/schema/anonCartItems/handler';
import { getAnonUserIdInDatabase } from './drizzle/schema/anonUsers/handler';
import { getAnonUserOrders } from './drizzle/schema/anonOrders/handler';
import {
  getProductQuantity,
  isProductInCart,
} from './drizzle/schema/products/handler';
import { orders } from './drizzle/schema/orders/schema';
import { orderItems } from './drizzle/schema/orderItems/schema';

export const config = {
  adapter: DrizzleAdapter(db),
  providers: [Google],
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async signIn({ user }: { user: User | AdapterUser }) {
      try {
        // Check if there is an anonUserId in cookies
        const cookiesStore = cookies();
        const anonUserIdInCookies = cookiesStore.get('userId')?.value;
        if (!anonUserIdInCookies) return true;

        const anonUserId = await getAnonUserIdInDatabase(anonUserIdInCookies);

        if (!!anonUserId) {
          // Get anonUser's cart and orders
          const anonUserCartData = getAnonUserCart(anonUserId);
          const anonUserOrderData = getAnonUserOrders(anonUserId);

          const [anonUserCart, anonUserOrders] = await Promise.all([
            anonUserCartData,
            anonUserOrderData,
          ]);

          const userId = user.id;
          if (!userId) return false;

          if (anonUserCart.length > 0) {
            // Merge userCart with anonUserCart
            for (const cartItem of anonUserCart) {
              const isProductInUserCart = await isProductInCart({
                isUserSignedIn: true,
                productId: cartItem.productId,
                userId,
              });
              if (isProductInUserCart) {
                const userCartItemQuantity = await getProductQuantity({
                  isUserSignedIn: true,
                  productId: cartItem.productId,
                  userId,
                });
                await incrementCartItemQuantityByNumber({
                  isUserSignedIn: true,
                  productId: cartItem.productId,
                  quantity: cartItem.quantity + userCartItemQuantity,
                  userId,
                });
              } else {
                await addItemsToCart({
                  isUserSignedIn: true,
                  productId: cartItem.productId,
                  quantity: cartItem.quantity,
                  userId,
                });
              }
            }
            await clearCart(false, anonUserId);
          }
          if (anonUserOrders.length > 0) {
            // Merge userOrders with anonUserOrders
            for (const order of anonUserOrders) {
              await db.insert(orders).values({
                id: order.id,
                userId,
                createdAt: order.createdAt,
                paymentMethod: order.paymentMethod,
                status: order.status,
              });
              for (const orderItem of order.orderItems) {
                await db.insert(orderItems).values({
                  id: orderItem.id,
                  quantity: orderItem.quantity,
                  productId: orderItem.productId,
                  orderId: orderItem.orderId,
                });
              }
              await clearAnonUserOrderItems(order.id);
            }
            await clearAnonUserOrders(anonUserId);
          }
          // delete anonUser from database
          await deleteAnonUser(anonUserId);
        }
        // delete anonUserId from cookies
        cookiesStore.delete('userId');
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(error.message);
        } else {
          throw new Error('Smoething went wrong. Failed to sign in');
        }
      }
      return true;
    },
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);
