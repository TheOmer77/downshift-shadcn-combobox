import type { ComponentPropsWithoutRef } from 'react';
import type { UseComboboxGetInputPropsReturnValue } from 'downshift';
import { PopoverAnchor } from '@radix-ui/react-popover';
import { ChevronDownIcon } from 'lucide-react';

import { Input } from '@/components/ui/input';

import { useComboboxContext } from './context';

export type ComboboxInputProps = Omit<
  ComponentPropsWithoutRef<'input'>,
  keyof UseComboboxGetInputPropsReturnValue
>;

export const ComboboxInput = (props: ComboboxInputProps) => {
  const { getInputProps } = useComboboxContext();

  return (
    <div className='relative w-full' data-combobox-input-wrapper=''>
      <PopoverAnchor asChild>
        <Input {...props} {...getInputProps?.()} />
      </PopoverAnchor>
      <div
        className='absolute end-3 inset-y-0 grid place-items-center h-full
pointer-events-none'
      >
        <ChevronDownIcon className='size-4 opacity-50' />
      </div>
    </div>
  );
};
