import { pgTable, text, uuid } from 'drizzle-orm/pg-core';
import { products } from '../products/schema';
import { relations } from 'drizzle-orm';

export const productFeatures = pgTable('productFeature', {
  id: uuid('id').primaryKey().defaultRandom(),
  feature: text('feature').notNull(),
  productId: uuid('productId')
    .references(() => products.id)
    .notNull(),
});

export const productFeaturesRelations = relations(
  productFeatures,
  ({ one }) => {
    return {
      product: one(products, {
        fields: [productFeatures.productId],
        references: [products.id],
      }),
    };
  }
);
