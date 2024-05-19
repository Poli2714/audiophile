import { integer, pgTable, uuid } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

import { orders } from '../orders/schema';
import { products } from '../products/schema';

export const orderItems = pgTable('orderItem', {
  id: uuid('id').primaryKey().defaultRandom(),
  quantity: integer('quantity').notNull(),
  productId: uuid('productId')
    .references(() => products.id)
    .notNull(),
  orderId: uuid('orderId')
    .references(() => orders.id)
    .notNull(),
});

export const orderItemsRelations = relations(orderItems, ({ one }) => {
  return {
    product: one(products, {
      fields: [orderItems.productId],
      references: [products.id],
    }),
    order: one(orders, {
      fields: [orderItems.orderId],
      references: [orders.id],
    }),
  };
});
