import {pgTable, serial, text, timestamp} from "drizzle-orm/pg-core";

export const flashcards = pgTable("flashcards", {
    id: serial("id").primaryKey(),
    front_side: text("front_side").notNull(),
    back_side: text("back_side").notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
})