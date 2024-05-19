import { integer, pgTable, uuid, varchar } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

import { products } from '../products/schema';

export const accessories = pgTable('accessory', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 255 }).notNull(),
  quantity: integer('quantity').notNull(),
  productId: uuid('productId')
    .references(() => products.id)
    .notNull(),
});

// Relations
export const accessoriesRelations = relations(accessories, ({ one }) => {
  return {
    product: one(products, {
      fields: [accessories.productId],
      references: [products.id],
    }),
  };
});
