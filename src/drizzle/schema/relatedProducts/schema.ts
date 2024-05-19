import { pgTable, text, uuid, varchar } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

import { products } from '../products/schema';

export const relatedProducts = pgTable('relatedProduct', {
  id: uuid('id').primaryKey().defaultRandom(),
  slug: varchar('slug', { length: 255 }).notNull(),
  name: text('name').notNull(),
  mobile: text('mobile'),
  tablet: text('tablet'),
  desktop: text('desktop'),
  productId: uuid('productId')
    .references(() => products.id)
    .notNull(),
});

// Relations
export const relatedProductsRelations = relations(
  relatedProducts,
  ({ one }) => {
    return {
      product: one(products, {
        fields: [relatedProducts.productId],
        references: [products.id],
      }),
    };
  }
);
