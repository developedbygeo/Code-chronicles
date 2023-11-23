import { cn } from '@/lib/utils';
import { WithClassName } from '@/types/UI';

import { BlogPreview } from '@/types/blogTypes';

import Pagination from '@/modules/Pagination';
import BlogPostPreview from '@/modules/Blog/BlogPostPreview';

import mockData from '@/data/recent-posts.json';

const RecentPosts = ({ className }: WithClassName) => (
    <section className={cn('', className)}>
        <h2 className="section-title">Recent Posts</h2>
        {mockData.map((post) => (
            <BlogPostPreview key={post.id} className="mb-8" post={post as BlogPreview} />
        ))}
        <Pagination />
    </section>
);

export default RecentPosts;