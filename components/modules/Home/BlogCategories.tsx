import { WithClassName } from '@/types/UI';
import Image from 'next/image';
import Link from 'next/link';

import blogCategories from '@/data/blogCategories';

import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/ui/HoverCard';

const BlogCategories = ({ className }: WithClassName) => (
    <section className={className}>
        <h2 className="section-title">Popular Categories</h2>
        <ul className="flex w-full flex-wrap justify-evenly gap-4 xl:flex-nowrap">
            {blogCategories.map((category) => (
                <HoverCard key={category.id}>
                    <HoverCardTrigger asChild>
                        <div
                            className="flex-1 basis-full cursor-pointer rounded-xl border border-gray-200 px-6 py-4 shadow-lg dark:border-black/30 md:basis-1/3"
                            style={{ background: category.backgroundColor }}
                        >
                            <Link
                                className="flex items-center justify-center gap-4"
                                href={`/blog?category=${category.slug}`}
                            >
                                <Image
                                    className="rounded-full"
                                    width={32}
                                    height={32}
                                    src={category.image}
                                    alt={category.name}
                                />
                                <span className="font-semibold">{category.name}</span>
                            </Link>
                        </div>
                    </HoverCardTrigger>
                    <HoverCardContent
                        style={{ background: category.backgroundColor }}
                        align="start"
                        sideOffset={20}
                        asChild
                    >
                        <article className="flex flex-col gap-4">
                            <div className="flex justify-start gap-4">
                                <div className="relative h-5 w-5">
                                    <Image fill src={category.image} alt={category.name} />
                                </div>
                                <h3 className="">{category.name}</h3>
                            </div>
                            <p className="flex-1">{category.description}</p>
                        </article>
                    </HoverCardContent>
                </HoverCard>
            ))}
        </ul>
    </section>
);

export default BlogCategories;
