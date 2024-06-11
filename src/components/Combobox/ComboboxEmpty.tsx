import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

import { useComboboxContext } from './context';

export const ComboboxEmpty = ({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<'div'>) => {
  const { filteredItems } = useComboboxContext();
  if (filteredItems && filteredItems.length > 0) return null;

  return (
    <div
      {...props}
      className={cn('p-4 text-center text-sm text-muted-foreground', className)}
    >
      {children}
    </div>
  );
};
