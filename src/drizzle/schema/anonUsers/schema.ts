import { pgTable, text, uuid } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

import { anonCartItems } from '../anonCartItems/schema';
import { anonOrders } from '../anonOrders/schema';

export const anonUsers = pgTable('anonUser', {
  id: text('id').primaryKey().notNull(),
  name: text('name'),
  email: text('email'),
  phoneNumber: text('phoneNumber'),
});

export const anonUsersRelations = relations(anonUsers, ({ many }) => {
  return {
    cart: many(anonCartItems),
    orders: many(anonOrders),
  };
});
