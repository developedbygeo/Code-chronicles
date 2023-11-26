import SmallBlogPostPreview from '@/modules/Posts/SmallBlogPostPreview';

import { WithClassName } from '@/types/UI';
import { BlogPreview } from '@/types/blogTypes';

import mockData from '@/data/editors-picks.json';

const EditorPicks = ({ className }: WithClassName) => (
    <section className={className}>
        <p className="text-sm text-gray-500 dark:text-gray-400">Handpicked by us</p>

        <h2 className="section-title">Editor&apos;s picks</h2>
        <div className="fle flex-row flex-wrap">
            {mockData.map((post) => (
                <SmallBlogPostPreview
                    key={post.slug}
                    className="mb-12 basis-full md:basis-1/3 xl:mb-8"
                    entry={post as BlogPreview}
                />
            ))}
        </div>
    </section>
);

export default EditorPicks;
