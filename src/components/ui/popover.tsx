import {
  type ComponentPropsWithoutRef,
  type ComponentRef,
  forwardRef,
} from 'react';
import { Content, Portal } from '@radix-ui/react-popover';

import { cn } from '@/lib/utils';

export { Popover, PopoverTrigger } from '@radix-ui/react-popover';

export const PopoverContent = forwardRef<
  ComponentRef<typeof Content>,
  ComponentPropsWithoutRef<typeof Content>
>(
  (
    { className, align = 'center', sideOffset = 4, forceMount, ...props },
    ref
  ) => (
    <Portal forceMount={forceMount}>
      <Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none fill-mode-forwards data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          className
        )}
        {...props}
      />
    </Portal>
  )
);
PopoverContent.displayName = Content.displayName;
