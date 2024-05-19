import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as accessories from './schema/accessories/schema';
import * as anonCartItems from './schema/anonCartItems/schema';
import * as anonOrderItems from './schema/anonOrderItems/schema';
import * as anonOrders from './schema/anonOrders/schema';
import * as anonUsers from './schema/anonUsers/schema';
import * as cartItems from './schema/cartItems/schema';
import * as orderItems from './schema/orderItems/schema';
import * as orders from './schema/orders/schema';
import * as productFeatures from './schema/productFeatures/schema';
import * as productImages from './schema/productImages/schema';
import * as products from './schema/products/schema';
import * as relatedProducts from './schema/relatedProducts/schema';
import * as users from './schema/users/schema';

const client = postgres(process.env.DATABASE_URL as string);
export const db = drizzle(client, {
  schema: {
    ...accessories,
    ...anonCartItems,
    ...anonOrderItems,
    ...anonOrders,
    ...anonUsers,
    ...cartItems,
    ...orderItems,
    ...orders,
    ...productFeatures,
    ...productImages,
    ...products,
    ...relatedProducts,
    ...users,
  },
  logger: true,
});
