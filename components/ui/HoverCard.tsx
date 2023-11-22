'use client';

import * as React from 'react';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';

import { cn } from '@/lib/utils';

const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = React.forwardRef<
    React.ElementRef<typeof HoverCardPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
    <HoverCardPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={cn(
            'z-50 w-[20rem] rounded-xl border border-transparent bg-gray-100/80 px-8 py-4 text-gray-950 shadow-lg outline-none backdrop-blur-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-black/30 dark:bg-dark/80 dark:text-gray-50',
            className
        )}
        {...props}
    />
));

HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };
