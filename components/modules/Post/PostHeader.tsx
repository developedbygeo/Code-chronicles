import Image from 'next/image';

import HeroTitle from '@/modules/UI/HeroTitle';

import { WithClassName } from '@/types/UI';
import { Author } from '@/types/blogTypes';
import PostAuthor from '@/modules/Post/PostAuthor';

type PostHeaderProps = WithClassName & {
    author: Author;
    title: string;
    publishedAt: string;
    image: string;
};

const PostHeader = ({ className, author, title, publishedAt }: PostHeaderProps) => (
    <article>
        <div className="flex flex-col gap-6 xl:flex-row">
            <HeroTitle className="flex flex-1 flex-col justify-between">
                <div className="mb-3">{title}</div>
                <PostAuthor author={author} date={publishedAt} />
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
