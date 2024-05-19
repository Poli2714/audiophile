import { pgTable, text, uuid } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

import { products } from '../products/schema';

export const productImages = pgTable('productImage', {
  id: uuid('id').primaryKey().defaultRandom(),
  catMobile: text('cat_mobile'),
  catTablet: text('cat_tablet'),
  catDesktop: text('cat_desktop'),
  cart: text('cart'),
  gallery1: text('gallery_1'),
  gallery2: text('gallery_2'),
  gallery3: text('gallery_3'),
  mobile: text('mobile'),
  tablet: text('tablet'),
  desktop: text('desktop'),
  productId: uuid('productId')
    .references(() => products.id)
    .notNull(),
});

// Relations
export const productImagesRelations = relations(productImages, ({ one }) => {
  return {
    product: one(products, {
      fields: [productImages.productId],
      references: [products.id],
    }),
  };
});
