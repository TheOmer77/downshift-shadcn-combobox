import { useMemo, useState } from 'react';
import { CheckIcon } from 'lucide-react';

import {
  ComboBox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
} from '@/components/Combobox';
import { BOOKS } from '@/constants/items';

const App = () => {
  const [value, setValue] = useState<string | null>(null);
  const bookByValue = useMemo(
    () => (value && BOOKS.find((book) => book.id === value)) || null,
    [value]
  );

  return (
    <div className='flex flex-col gap-4 justify-center items-start px-8 py-16 md:py-32 w-full max-w-md mx-auto'>
      <h1 className='text-3xl font-bold tracking-tight text-center'>
        Shadcn/ui Combobox
      </h1>
      <ComboBox
        value={value}
        onValueChange={setValue}
        filterItems={(inputValue, items) =>
          items.filter(({ value }) => {
            const book = BOOKS.find((book) => book.id === value);
            return (
              !inputValue ||
              (book &&
                (book.title.toLowerCase().includes(inputValue.toLowerCase()) ||
                  book.author.toLowerCase().includes(inputValue.toLowerCase())))
            );
          })
        }
      >
        <ComboboxInput placeholder='Pick a book...' />
        <ComboboxContent>
          {BOOKS.map(({ id, title, author }) => (
            <ComboboxItem
              key={id}
              value={id}
              label={title}
              disabled={id === 'book-5'}
              className='ps-8'
            >
              <span className='text-sm text-foreground'>{title}</span>
              <span className='text-xs text-muted-foreground'>{author}</span>
              {value === id && (
                <span className='absolute start-2 top-0 flex h-full items-center justify-center'>
                  <CheckIcon className='size-4' />
                </span>
              )}
            </ComboboxItem>
          ))}
          <ComboboxEmpty>No results.</ComboboxEmpty>
        </ComboboxContent>
      </ComboBox>

      <div className='flex flex-col items-start'>
        {bookByValue ? (
          <>
            <span className='text-sm text-muted-foreground'>
              Selected book:
            </span>
            <span className='font-semibold'>{bookByValue.title}</span>
            <span className='mb-4'>by {bookByValue.author}</span>
          </>
        ) : (
          <span className='text-sm text-muted-foreground'>
            No book selected.
          </span>
        )}
        {value && (
          <>
            <span className='text-sm text-muted-foreground'>Value:</span>
            <span
              className='font-mono text-muted-foreground px-2 py-1.5 bg-muted
rounded-sm'
            >
              {value}
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
