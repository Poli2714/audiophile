import { integer, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

import { products } from '../products/schema';
import { anonUsers } from '../anonUsers/schema';

export const anonCartItems = pgTable('anonCartItem', {
  id: uuid('id').primaryKey().defaultRandom(),
  addedAt: timestamp('addedAt').notNull().defaultNow(),
  quantity: integer('quantity').notNull(),
  productId: uuid('productId')
    .references(() => products.id)
    .notNull(),
  userId: text('userId')
    .references(() => anonUsers.id)
    .notNull(),
});

export const anonCartItemsRelations = relations(anonCartItems, ({ one }) => {
  return {
    product: one(products, {
      fields: [anonCartItems.productId],
      references: [products.id],
    }),
    addedBy: one(anonUsers, {
      fields: [anonCartItems.userId],
      references: [anonUsers.id],
    }),
  };
});
