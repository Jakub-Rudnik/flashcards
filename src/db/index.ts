import { drizzle } from 'drizzle-orm/vercel-postgres';
import * as schema from './schema';
import { sql } from "@vercel/postgres";
import { flashcards } from "./schema";

export const db = drizzle(sql, {schema});

export const getFlashCards = async () => await db.select().from(flashcards);