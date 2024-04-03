import { relations } from 'drizzle-orm';
import {
  boolean,
  integer,
  pgTable,
  real,
  uuid,
  varchar,
} from 'drizzle-orm/pg-core';

export const ProductTable = pgTable('product', {
  id: uuid('id').primaryKey().defaultRandom(),
  slug: varchar('slug', { length: 255 }).notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  category: varchar('category', { length: 255 }).notNull(),
  new: boolean('new').default(true),
  price: real('price').notNull(),
  description: varchar('description'),
  features: varchar('features'),
});

export const ProductImageTable = pgTable('productImage', {
  id: uuid('id').primaryKey().defaultRandom(),
  mobile: varchar('mobile'),
  tablet: varchar('tablet'),
  desktop: varchar('desktop'),
  catMobile: varchar('cat_mobile'),
  catTablet: varchar('cat_tablet'),
  catDesktop: varchar('cat_desktop'),
  productId: uuid('productId')
    .references(() => ProductTable.id)
    .notNull(),
});

export const AccessoryTable = pgTable('accessory', {
  id: uuid('id').primaryKey().defaultRandom(),
  item: varchar('item', { length: 255 }).notNull(),
  quantity: integer('quantity'),
  productId: uuid('productId')
    .references(() => ProductTable.id)
    .notNull(),
});

export const GalleryTable = pgTable('gallery', {
  id: uuid('id').primaryKey().defaultRandom(),
  mobile: varchar('mobile'),
  tablet: varchar('tablet'),
  desktop: varchar('desktop'),
  productId: uuid('productId')
    .references(() => ProductTable.id)
    .notNull(),
});

export const RelatedProductTable = pgTable('relatedProduct', {
  id: uuid('id').primaryKey().defaultRandom(),
  slug: varchar('slug', { length: 255 }),
  name: varchar('name', { length: 255 }),
  mobile: varchar('mobile'),
  tablet: varchar('tablet'),
  desktop: varchar('desktop'),
  productId: uuid('productId')
    .references(() => ProductTable.id)
    .notNull(),
});

// Relations

export const ProductTableRelations = relations(
  ProductTable,
  ({ one, many }) => {
    return {
      image: one(ProductImageTable),
      accessories: many(AccessoryTable),
      gallery: many(GalleryTable),
      relatedProducts: many(RelatedProductTable),
    };
  }
);

export const ProductImageTableRelations = relations(
  ProductImageTable,
  ({ one }) => {
    return {
      product: one(ProductTable, {
        fields: [ProductImageTable.productId],
        references: [ProductTable.id],
      }),
    };
  }
);

export const AccessoryTableReferences = relations(AccessoryTable, ({ one }) => {
  return {
    product: one(ProductTable, {
      fields: [AccessoryTable.productId],
      references: [ProductTable.id],
    }),
  };
});

export const GalleryTableRelations = relations(GalleryTable, ({ one }) => {
  return {
    product: one(ProductTable, {
      fields: [GalleryTable.productId],
      references: [ProductTable.id],
    }),
  };
});

export const RelatedProductTableRelations = relations(
  RelatedProductTable,
  ({ one }) => {
    return {
      product: one(ProductTable, {
        fields: [RelatedProductTable.productId],
        references: [ProductTable.id],
      }),
    };
  }
);
