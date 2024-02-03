import {ThemeToggle} from '@/components/theme-toggle';

export function Header() {
  return (
    <div className="flex h-16 items-center justify-between px-10 border-b-2">
      <h4 className="text-xl font-semibold">Flashcards</h4>
      <ThemeToggle />
    </div>
  );
}
