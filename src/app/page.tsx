import Image from 'next/image';
import {getFlashCards} from '@/db';
import {AddFlashcard} from '@/components/addFlashcard';
import {Separator} from '@/components/ui/separator';

export default async function Home() {
  const data = await getFlashCards();

  console.log(data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center w-[640px]">
        <AddFlashcard />
        <Separator className="my-12" />
        <div>
          {data.map(flashcard => (
            <div key={flashcard.id}>
              <h1>{flashcard.front_side}</h1>
              <p>{flashcard.back_side}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
