import SmallBlogPostPreview from '@/modules/Blog/SmallBlogPostPreview';

import { WithClassName } from '@/types/UI';
import { BlogPreview } from '@/types/blogTypes';

import mockData from '@/data/editors-picks.json';

const EditorPicks = ({ className }: WithClassName) => (
    <section className={className}>
        <p className="text-sm text-gray-500 dark:text-gray-400">Handpicked by us</p>

        <h2 className="section-title">Editor&apos;s picks</h2>
        {mockData.map((post) => (
            <SmallBlogPostPreview key={post.slug} className="mb-8" entry={post as BlogPreview} />
        ))}
    </section>
);

export default EditorPicks;
