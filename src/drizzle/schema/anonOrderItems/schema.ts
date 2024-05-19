import { integer, pgTable, uuid } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

import { anonOrders } from '../anonOrders/schema';
import { products } from '../products/schema';

export const anonOrderItems = pgTable('anonOrderItem', {
  id: uuid('id').primaryKey().defaultRandom(),
  quantity: integer('quantity').notNull(),
  productId: uuid('productId')
    .references(() => products.id)
    .notNull(),
  orderId: uuid('orderId')
    .references(() => anonOrders.id)
    .notNull(),
});

export const anonOrderItemsRelations = relations(anonOrderItems, ({ one }) => {
  return {
    order: one(anonOrders, {
      fields: [anonOrderItems.orderId],
      references: [anonOrders.id],
    }),
    product: one(products, {
      fields: [anonOrderItems.productId],
      references: [products.id],
    }),
  };
});
