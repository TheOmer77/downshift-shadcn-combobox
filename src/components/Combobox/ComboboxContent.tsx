import {
  Children,
  isValidElement,
  useEffect,
  useMemo,
  type ComponentPropsWithoutRef,
  type ReactElement,
} from 'react';

import { PopoverContent } from '@/components/ui/popover';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

import { useComboboxContext } from './context';
import { ComboboxItem, type ComboboxItemProps } from './ComboboxItem';

export const ComboboxContent = ({
  onOpenAutoFocus,
  children,
  ...props
}: ComponentPropsWithoutRef<typeof PopoverContent>) => {
  const { getMenuProps, isOpen, openedOnce, onItemsChange } =
    useComboboxContext();

  const childItems = useMemo(
    () =>
      Children.toArray(children).filter(
        (child): child is ReactElement<ComboboxItemProps> =>
          isValidElement(child) && child.type === ComboboxItem
      ),
    [children]
  );

  useEffect(() => {
    onItemsChange?.(
      childItems.map(child => ({
        disabled: child.props.disabled,
        label: child.props.label,
        value: child.props.value,
      }))
    );
  }, [childItems, onItemsChange]);

  return (
    <PopoverContent
      {...props}
      forceMount
      asChild
      onOpenAutoFocus={e => {
        e.preventDefault();
        onOpenAutoFocus?.(e);
      }}
      className={cn(
        'w-[--radix-popper-anchor-width] p-0',
        !isOpen && '!pointer-events-none',
        !openedOnce && 'hidden'
      )}
      {...getMenuProps?.()}
    >
      <ScrollArea className='[&>[data-radix-scroll-area-viewport]]:max-h-80 [&>[data-radix-scroll-area-viewport]]:p-1'>
        {children}
      </ScrollArea>
    </PopoverContent>
  );
};
