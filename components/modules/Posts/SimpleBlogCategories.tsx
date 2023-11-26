import Link from 'next/link';

import { WithClassName } from '@/types/UI';

import { cn } from '@/lib/utils';

import blogCategories from '@/data/blogCategories';

import { Card, CardHeader, CardTitle } from '@/ui/Card';

type BlogCategoriesProps = WithClassName & {
    listClassName?: string;
};

const SimpleBlogCategories = ({ className, listClassName }: BlogCategoriesProps) => (
    <section className={className}>
        <p className="text-sm text-gray-500 dark:text-gray-400">Discover by category</p>
        <h2 className="section-title">Categories</h2>
        <ul className={cn('flex w-full flex-wrap justify-evenly gap-4 xl:flex-nowrap', listClassName)}>
            {blogCategories.map((category) => (
                <Card
                    className="rounded-xl shadow-lg"
                    key={category.id}
                    style={{ background: category.backgroundColor }}
                >
                    <CardHeader className="py-4">
                        <div className="cursor-pointer border-0">
                            <CardTitle>
                                <Link
                                    className="flex items-center justify-center gap-4"
                                    href={`/blog?category=${category.slug}`}
                                >
                                    <span className="text-xs font-semibold tracking-wide">{category.name}</span>
                                </Link>
                            </CardTitle>
                        </div>
                    </CardHeader>
                </Card>
            ))}
        </ul>
    </section>
);

export default SimpleBlogCategories;
