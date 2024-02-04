import Image from 'next/image';
import {getFlashCards} from '@/db';
import {AddFlashcard} from '@/components/add-flashcard';
import {Separator} from '@/components/ui/separator';
import FlashcardWithDefinition from '@/components/flashcard-with-definition';

export default async function Home() {
  const data = await getFlashCards();

  const sortedData = data.sort((a, b) => {
    if (a.createdAt < b.createdAt) {
      return 1;
    }
    if (a.createdAt > b.createdAt) {
      return -1;
    }
    return 0;
  });

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center w-[640px]">
        <AddFlashcard />
        <Separator className="my-12" />
        <div className="flex flex-col gap-4 w-full">
          {sortedData.map(flashcard => (
            <FlashcardWithDefinition
              term={flashcard.term}
              definition={flashcard.definition}
              key={flashcard.id}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
