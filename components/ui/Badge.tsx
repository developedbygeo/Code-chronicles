import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const baseBadgeStyling =
    'inline-flex items-center scale-95 hover:scale-100 shadow-lg rounded-full border border-gray-200 dark:border-black/30 px-2.5 py-0.5 text-xs font-semibold transition-[transform_colors] focus:outline-none';

const badgeVariants = cva(baseBadgeStyling, {
    variants: {
        variant: {
            default:
                'border-transparent bg-gray-900 text-gray-50 hover:bg-gray-900/80 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/80',
            secondary:
                'border-transparent bg-gray-100 text-gray-900 hover:bg-gray-100/80 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-800/80',
            destructive:
                'border-transparent bg-red-500 text-gray-50 hover:bg-red-500/80 dark:bg-red-900 dark:text-gray-50 dark:hover:bg-red-900/80',
            outline: 'text-gray-950 dark:text-gray-50',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
});

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

const Badge = ({ className, variant, ...props }: BadgeProps) => {
    return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
};

export { Badge, badgeVariants, baseBadgeStyling };
