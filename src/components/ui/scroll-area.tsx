import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';
import {
  Corner,
  Root,
  ScrollAreaScrollbar,
  Thumb,
  Viewport,
} from '@radix-ui/react-scroll-area';

import { cn } from '@/lib/utils';

export const ScrollArea = forwardRef<
  ComponentRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root>
>(({ className, children, ...props }, ref) => (
  <Root
    ref={ref}
    className={cn('relative overflow-hidden', className)}
    {...props}
  >
    <Viewport className='size-full rounded-[inherit]'>{children}</Viewport>
    <ScrollBar />
    <Corner />
  </Root>
));
ScrollArea.displayName = Root.displayName;

export const ScrollBar = forwardRef<
  ComponentRef<typeof ScrollAreaScrollbar>,
  ComponentPropsWithoutRef<typeof ScrollAreaScrollbar>
>(({ className, orientation = 'vertical', ...props }, ref) => (
  <ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      'flex touch-none select-none transition-colors',
      orientation === 'vertical' &&
        'h-full w-2.5 border-l border-l-transparent p-px',
      orientation === 'horizontal' &&
        'h-2.5 flex-col border-t border-t-transparent p-px',
      className
    )}
    {...props}
  >
    <Thumb className='relative flex-1 rounded-full bg-border' />
  </ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaScrollbar.displayName;
