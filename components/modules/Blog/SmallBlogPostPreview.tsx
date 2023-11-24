import Image from 'next/image';
import { LuDot } from 'react-icons/lu';

import { WithClassName } from '@/types/UI';
import { BlogPreview } from '@/types/blogTypes';

import CategoryBadge from '@/elements/CategoryBadge';
import { cn } from '@/lib/utils';
import { AspectRatio } from '@/ui/AspectRatio';
import Link from 'next/link';

type SmallBlogPostPreviewProps = WithClassName & {
    entry: BlogPreview;
};

const SmallBlogPostPreview = ({ className, entry }: SmallBlogPostPreviewProps) => {
    const lowercaseCategory = entry.category.toLowerCase();

    return (
        <Link className="group" href={`/blog/${lowercaseCategory}/${entry.slug}`}>
            <article className={cn('grid grid-cols-[1fr_3fr] content-center gap-4', className)}>
                <div className="flex-1">
                    <AspectRatio className="flex items-center" ratio={4 / 4}>
                        <Image className="rounded-full" src={entry.image} alt={entry.title} width={100} height={100} />
                    </AspectRatio>
                </div>

                <div className="flex-3 max-w-[12rem]">
                    <div className="">
                        <CategoryBadge
                            className="mb-2
                        w-fit group-hover:scale-100 group-hover:shadow-lg"
                            variant={entry.category}
                        >
                            {entry.category}
                        </CategoryBadge>

                        <h3 className="themed-entry-subtitle !text-sm group-hover:text-gray-800 dark:text-gray-300 dark:group-hover:text-gray-100">
                            {entry.title}
                        </h3>
                    </div>

                    <p className="themed-text mt-1 whitespace-nowrap text-xs font-normal">
                        {entry.author} <span className="themed-minor-text ml-2 font-light">{entry.date}</span>
                    </p>
                </div>
            </article>

            {/* <article className={cn('flex gap-4', className)}>
            <div className="flex-1">
                <AspectRatio className="flex items-center" ratio={4 / 4}>
                    <Image className="rounded-full" src={entry.image} alt={entry.title} width={100} height={100} />
                </AspectRatio>
            </div>

            <div className="flex-3 max-w-[12rem]">
                <div className="">
                    <CategoryBadge
                        className="mb-2
                        w-fit group-hover:scale-100 group-hover:shadow-lg"
                        variant={entry.category}
                    >
                        {entry.category}
                    </CategoryBadge>

                    <h3 className="themed-entry-subtitle !text-sm group-hover:text-gray-800 dark:text-gray-300 dark:group-hover:text-gray-100">
                        {entry.title}
                    </h3>
                </div>

                <p className="mt-1 flex items-center text-xs">
                    <span className="themed-text font-normal">{entry.author}</span>
                    <span className="themed-minor-text ml-2 font-light">{entry.date}</span>
                </p>
            </div>
        </article> */}
        </Link>
    );
};

export default SmallBlogPostPreview;
