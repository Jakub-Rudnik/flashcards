import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import FlashcardForm from '@/components/flashcardForm';
import insertFlashcard from '@/app/actions/flashcard';

export function AddFlashcard() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Add Flashcard</CardTitle>
      </CardHeader>
      <CardContent>
        <FlashcardForm action={insertFlashcard} />
      </CardContent>
    </Card>
  );
}
