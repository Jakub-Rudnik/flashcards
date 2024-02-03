import {Input} from '@/components/ui/input';
import SubmitButton from '@/components/submit-button';
import {Label} from '@/components/ui/label';

export default function FlashcardForm({
  action,
}: {
  action: (
    formData: FormData
  ) => Promise<
    {error: {term?: string[] | undefined; definition?: string[] | undefined}} | undefined
  >;
}) {
  return (
    <form action={action} className="flex flex-col gap-4">
      <div className="flex flex-col items-start justify-center gap-1.5">
        <Label htmlFor="term">Term</Label>
        <Input id="temr" name="term" />
      </div>
      <div className="flex flex-col items-start justify-center gap-1.5">
        <Label htmlFor="definition">Definition</Label>
        <Input id="definition" name="definition" />
      </div>
      <SubmitButton />
    </form>
  );
}
