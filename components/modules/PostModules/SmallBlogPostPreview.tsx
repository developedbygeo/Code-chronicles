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
            <article className={cn('grid grid-cols-2 gap-4 xl:grid-cols-[4rem_1fr] xl:gap-4', className)}>
                <div className="relative h-full w-full self-center xl:h-16 xl:w-16">
                    <AspectRatio ratio={1}>
                        <Image className="xl:rounded-full" src={entry.image} alt={entry.title} fill />
                    </AspectRatio>
                </div>

                <div className="xl:max-w-[12rem] xl:self-center">
                    <div className="mt-2 xl:mt-0">
                        <CategoryBadge
                            className="mb-2 w-fit group-hover:scale-100 group-hover:shadow-lg"
                            variant={entry.category}
                        >
                            {entry.category}
                        </CategoryBadge>
                        <h3
                            className="themed-entry-subtitle multi-line-ellipsis !text-sm group-hover:text-gray-800 dark:text-gray-300 dark:group-hover:text-gray-100"
                            title={entry.title}
                        >
                            {entry.title}
                        </h3>
                    </div>

                    <div className="themed-text">
                        <p>{entry.author}</p>
                        <p>{entry.date}</p>
                        <p className="mt-8 hidden md:block lg:hidden">{entry.description}</p>
                    </div>
                </div>
            </article>
        </Link>
    );
};

export default SmallBlogPostPreview;
