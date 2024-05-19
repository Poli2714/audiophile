import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

import { anonUsers } from '../anonUsers/schema';
import { anonOrderItems } from '../anonOrderItems/schema';
import { paymentMethodEnum, orderStatusEnum } from '../orders/schema';

export const anonOrders = pgTable('anonOrder', {
  id: uuid('id').primaryKey().defaultRandom(),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  paymentMethod: paymentMethodEnum('paymentMethod').notNull(),
  status: orderStatusEnum('orderStatus').notNull(),
  userId: text('userId')
    .references(() => anonUsers.id)
    .notNull(),
});

export const anonOrdersRelations = relations(anonOrders, ({ one, many }) => {
  return {
    createdBy: one(anonUsers, {
      fields: [anonOrders.userId],
      references: [anonUsers.id],
    }),
    orderItems: many(anonOrderItems),
  };
});
