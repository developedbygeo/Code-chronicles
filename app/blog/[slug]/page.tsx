import HeroTitle from '@/modules/UI/HeroTitle';
import { AspectRatio } from '@/ui/AspectRatio';
import Image from 'next/image';

import post from '@/data/blog-post.json';
import PostHeader from '@/modules/Post/PostHeader';
import PostComments from '@/modules/Post/PostComments';

type BlogPostParams = {
    params: {
        slug: string;
    };
};

const BlogPost = async ({ params }: BlogPostParams) => {
    const { slug } = params;

    console.log(slug);

    return (
        <section className="apply-pt">
            <PostHeader author={post.author} title={post.title} image={post.image} publishedAt={post.publishedAt} />
            <div className="mt-12">
                <p className="themed-blog-text">{post.text}</p>
            </div>
            <PostComments />
        </section>
    );
};

export default BlogPost;
