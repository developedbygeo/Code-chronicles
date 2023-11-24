import Link from 'next/link';
import { LuDot } from 'react-icons/lu';

import { cn } from '@/lib/utils';

import { WithClassName } from '@/types/UI';
import { PopularEntryPreview } from '@/types/blogTypes';

import CategoryBadge from '@/elements/CategoryBadge';

type PopularEntryProps = WithClassName & {
    entry: PopularEntryPreview;
};

const HotEntry = ({ className, entry }: PopularEntryProps) => (
    <article className={cn('mb-12', className)}>
        <div className="group mb-2 flex flex-col-reverse gap-2">
            <Link className="peer" href={`/blog/${entry.category}/${entry.slug}`}>
                <h3 className="themed-entry-subtitle">{entry.title}</h3>
            </Link>
            <CategoryBadge className="w-fit group-hover:scale-100 group-hover:shadow-lg" variant={entry.category}>
                {entry.category}
            </CategoryBadge>
        </div>
        <div className="flex justify-start gap-2 text-xs">
            <div className="flex items-center gap-2">
                <span className="themed-text font-normal">{entry.author}</span>
                <LuDot className="h-4 w-4 text-dark" />
            </div>
            <span className="themed-minor-text font-light ">{entry.date}</span>
        </div>
    </article>
);

export default HotEntry;
