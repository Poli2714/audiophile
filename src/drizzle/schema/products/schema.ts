import {
  boolean,
  pgTable,
  real,
  text,
  uuid,
  varchar,
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

import { accessories } from '../accessories/schema';
import { productFeatures } from '../productFeatures/schema';
import { productImages } from '../productImages/schema';
import { relatedProducts } from '../relatedProducts/schema';

export const products = pgTable('product', {
  id: uuid('id').primaryKey().defaultRandom(),
  slug: varchar('slug', { length: 255 }).notNull(),
  name: text('name').notNull(),
  category: varchar('category', { length: 255 }).notNull(),
  new: boolean('new').default(true),
  price: real('price').notNull(),
  description: varchar('description').notNull(),
});

// Relations
export const productsRelations = relations(products, ({ one, many }) => {
  return {
    accessories: many(accessories),
    features: many(productFeatures),
    image: one(productImages),
    relatedProducts: many(relatedProducts),
  };
});
