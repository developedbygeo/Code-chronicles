import { cn } from '@/lib/utils';
import { WithClassName } from '@/types/UI';

import mockData from '@/data/most-popular.json';
import HotEntry from '@/modules/Blog/HotEntry';
import { PopularEntryPreview } from '@/types/blogTypes';

const MostPopular = ({ className }: WithClassName) => (
    <aside className={cn('', className)}>
        <p className="text-sm text-gray-500 dark:text-gray-400">What&apos;s hot</p>
        <h2 className="section-title">Most Popular</h2>
        {mockData.map((entry) => (
            <HotEntry key={entry.id} entry={entry as PopularEntryPreview} />
        ))}
    </aside>
);

export default MostPopular;
