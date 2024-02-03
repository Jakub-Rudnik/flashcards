'use server';

import {z} from 'zod';
import {db} from '@/db';
import {flashcards} from '@/db/schema';
import {revalidatePath} from 'next/cache';

const schema = z.object({
  term: z
    .string()
    .min(1, 'Term must have at least 1 character')
    .max(150, "Term can't be longer than 150 characters"),
  definition: z
    .string()
    .min(1, 'Definition must have at least 1 character')
    .max(150, "Definition can't be longer than 150 characters"),
});

export default async function insertFlashcard(formData: FormData) {
  const validatedData = schema.safeParse({
    term: formData.get('term'),
    definition: formData.get('definition'),
  });

  if (!validatedData.success) {
    console.log(validatedData.error.flatten().fieldErrors);
    return {
      error: validatedData.error.flatten().fieldErrors,
    };
  }

  await db.insert(flashcards).values({
    front_side: validatedData.data.term,
    back_side: validatedData.data.definition,
  });

  revalidatePath('/');
}
