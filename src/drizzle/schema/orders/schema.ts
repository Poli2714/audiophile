import { pgEnum, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

import { orderItems } from '../orderItems/schema';
import { users } from '../users/schema';

export const paymentMethodEnum = pgEnum('paymentMethod', ['eMoney', 'cash']);
export const orderStatusEnum = pgEnum('orderStatus', [
  'proccessing',
  'received',
  'shipped',
  'cancelled',
  'delivered',
  'returned',
]);

export const orders = pgTable('order', {
  id: uuid('id').primaryKey().defaultRandom(),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  paymentMethod: paymentMethodEnum('paymentMethod').notNull(),
  status: orderStatusEnum('orderStatus').notNull(),
  userId: text('userId')
    .references(() => users.id)
    .notNull(),
});

export const ordersRelations = relations(orders, ({ one, many }) => {
  return {
    orderItems: many(orderItems),
    createdBy: one(users, {
      fields: [orders.userId],
      references: [users.id],
    }),
  };
});
