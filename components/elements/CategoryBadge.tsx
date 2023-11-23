import { VariantProps, cva } from 'class-variance-authority';
import { BadgeProps } from '@/ui/Badge';

import { cn } from '@/lib/utils';

import { baseBadgeStyling } from '@/ui/Badge';
import { HTMLAttributes } from 'react';
import { WithClassName } from '@/types/UI';

const categoryBadgeStyling = baseBadgeStyling.concat('!text-gray-600');

const badgeVariants = cva(categoryBadgeStyling, {
    variants: {
        variant: {
            JavaScript:
                'border-transparent bg-[rgba(207,191,164,0.65)] dark:hover:bg-[rgba(207,191,164,0.8)] dark:peer-hover:bg-[rgba(207,191,164,0.8)] peer-hover:bg-[rgba(207,191,164,1)] hover:bg-[rgba(207,191,164,1)]',
            TypeScript:
                'border-transparent bg-[rgba(124,187,228,0.175)] peer-hover:bg-[rgba(124,187,228,0.35)] hover:bg-[rgba(124,187,228,0.35)]',
            NextJS: 'border-transparent bg-[rgba(126,126,126,0.65)] peer-hover:text-gray-200 hover:text-gray-200 peer-hover:bg-[rgba(126,126,126,1)] hover:bg-[rgba(126,126,126,1)]',
            React: 'bg-[rgba(119,198,255,0.6)] peer-hover:bg-[rgba(119,198,255,1)] dark:hover:bg-[rgba(119,198,255,0.75)] dark:peer-hover:bg-[rgba(119,198,255,0.75)] hover:bg-[rgba(119,198,255,1)]',
            Music: 'bg-[rgba(48,64,254,0.35)] peer-hover:text-gray-200 hover:text-gray-200 peer-hover:bg-[rgba(48,64,254,0.5)] dark:bg-[rgba(48,64,254,0.5)] dark:hover:bg-[rgba(48,64,254,0.75)] dark:peer-hover:bg-[rgba(48,64,254,0.75)] hover:bg-[rgba(48,64,254,0.5)]',
            Food: 'bg-[rgba(89,12,91,0.1)] dark:bg-[rgba(89,12,91,0.65)] dark:peer-hover:bg-[rgba(89,12,91,1)] dark:hover:bg-[rgba(89,12,91,1)] peer-hover:bg-[rgba(89,12,91,0.2)] hover:bg-[rgba(89,12,91,0.2)]',
            Travel: 'bg-[rgba(289,184,54,0.15)] peer-hover:bg-[rgba(289,184,54,0.3)] hover:bg-[rgba(289,184,54,0.3)]',
            Books: 'bg-[rgba(255,12,91,0.1)] peer-hover:bg-rgba(255,12,91,0.2) hover:bg-rgba(255,12,91,0.2)',
            default:
                'border-transparent bg-gray-900 text-gray-50 hover:bg-gray-900/80 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/80',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
});

type CategoryBadgeProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof badgeVariants> & WithClassName;

const CategoryBadge = ({ className, variant, ...props }: CategoryBadgeProps) => {
    return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
};

export default CategoryBadge;
