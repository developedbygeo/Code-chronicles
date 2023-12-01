import Image from 'next/image';

import HeroTitle from '@/modules/UI/HeroTitle';

import { WithClassName } from '@/types/UI';
import { Author, BlogPost, BlogPostCategory } from '@/types/blogTypes';
import PostAuthor from '@/modules/Post/PostAuthor';
import CategoryBadge from '@/elements/CategoryBadge';

type PostHeaderProps = WithClassName & {
    post: BlogPost;
};

const PostHeader = ({ className, post }: PostHeaderProps) => (
    <article>
        <div className="flex flex-col-reverse gap-6 xl:flex-row">
            <HeroTitle className="flex flex-1 flex-col justify-between">
                <div className="mb-3">{post.title}</div>
                <article className="group flex items-center gap-8">
                    <PostAuthor author={post.author} date={post.publishedAt} />
                    <CategoryBadge className="self-end" variant={post.category as BlogPostCategory}>
                        {post.category}
                    </CategoryBadge>
                </article>
            </HeroTitle>
            <div className="relative basis-1/2">
                <Image
                    src="/test-blog-image.jpg"
                    alt="Featured"
                    height={1080}
                    width={1920}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
        </div>
    </article>
);

export default PostHeader;
