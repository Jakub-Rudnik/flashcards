import {Card, CardContent} from '@/components/ui/card';
import {Separator} from '@/components/ui/separator';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';

export default function FlashcardWithDefinition({
  term,
  definition,
}: {
  term: string;
  definition: string;
}) {
  return (
    <Card className="w-full">
      <CardContent className="flex flex-row w-full justify-between p-6">
        <div className="flex flex-col items-start justify-center gap-1.5">
          <Label htmlFor="term">Term</Label>
          <Input defaultValue={term} id="flashcard-term" />
        </div>
        <div>
          <Separator orientation="vertical" />
        </div>
        <div className="flex flex-col items-start justify-center gap-1.5">
          <Label htmlFor="definition">Definition</Label>
          <Input defaultValue={definition} id="flashcard-definition" />
        </div>
      </CardContent>
    </Card>
  );
}
