import {pgTable, serial, text, timestamp} from 'drizzle-orm/pg-core';

export const flashcards = pgTable('flashcards', {
  id: serial('id').primaryKey(),
  term: text('term').notNull(),
  definition: text('definition').notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
});
