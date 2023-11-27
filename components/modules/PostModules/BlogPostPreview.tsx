import Link from 'next/link';
import Image from 'next/image';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/ui/Card';
import { WithClassName } from '@/types/UI';
import { BlogPreview } from '@/types/blogTypes';
import { cn } from '@/lib/utils';

type BlogPostPreviewProps = WithClassName & {
    post: BlogPreview;
};

const BlogPostPreview = ({ className, post }: BlogPostPreviewProps) => (
    <article className={cn('flex w-full flex-col gap-8 xl:flex-row', className)}>
        <div className="relative h-80 w-full shadow-xl xl:h-[initial] xl:w-[initial] xl:flex-1 xl:basis-1/2">
            <Image src={post.image} alt="Blog post image" className="rounded-md object-cover" fill />
        </div>
        <Card className="flex-1 basis-1/2 border-0 px-0 shadow-none xl:px-6">
            <CardHeader className="px-0 xl:px-6">
                <div className="mb-3 flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">{post.date}</span>
                    <span className="gradient-text font-semibold uppercase">{post.category}</span>
                </div>
                <CardTitle>
                    <Link href="/">{post.title}</Link>
                </CardTitle>
                <CardDescription className="text-gray-500">{post.subtitle}</CardDescription>
            </CardHeader>
            <CardContent className="px-0 xl:px-6">
                <p className="themed-text">{post.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between px-0 xl:px-6">
                <Link className="see-more" href="/">
                    Read More
                </Link>
            </CardFooter>
        </Card>
    </article>
);

export default BlogPostPreview;
