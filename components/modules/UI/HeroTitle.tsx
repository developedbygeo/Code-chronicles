import { cn } from '@/lib/utils';
import { WithChildren, WithClassName } from '@/types/UI';
import { ElementType } from 'react';

type HeroTitleProps = WithClassName &
    WithChildren & {
        as?: ElementType;
    };

const HeroTitle = ({ className, children, as }: HeroTitleProps) => {
    const Component = as ?? 'h2';

    return <Component className={cn('hero-title', className)}>{children}</Component>;
};

export default HeroTitle;
