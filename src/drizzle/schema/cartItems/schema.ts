import { integer, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

import { products } from '../products/schema';
import { users } from '../users/schema';

export const cartItems = pgTable('cartItem', {
  id: uuid('id').primaryKey().defaultRandom(),
  addedAt: timestamp('addedAt').notNull().defaultNow(),
  quantity: integer('quantity').notNull(),
  productId: uuid('productId')
    .references(() => products.id)
    .notNull(),
  userId: text('userId')
    .references(() => users.id)
    .notNull(),
});

export const cartItemsRelations = relations(cartItems, ({ one }) => {
  return {
    product: one(products, {
      fields: [cartItems.productId],
      references: [products.id],
    }),
    addedBy: one(users, {
      fields: [cartItems.userId],
      references: [users.id],
    }),
  };
});
