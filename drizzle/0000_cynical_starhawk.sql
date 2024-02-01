CREATE TABLE IF NOT EXISTS "flashcards" (
	"id" serial PRIMARY KEY NOT NULL,
	"front_side" text NOT NULL,
	"back_side" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
