import post from '@/data/blog-post.json';
import PostHeader from '@/modules/Post/PostHeader';
import PostCommentSection from '@/modules/Post/PostCommentSection';
import MostPopular from '@/modules/Posts/MostPopular';
import EditorPicks from '@/modules/Posts/EditorPicks';
import { BlogPost } from '@/types/blogTypes';

type BlogPostParams = {
    params: {
        slug: string;
    };
};

const BlogPost = async ({ params }: BlogPostParams) => {
    const { slug } = params;

    console.log(slug);

    return (
        <section className="apply-py">
            <PostHeader post={post as BlogPost} />
            <div className="grid grid-cols-12">
                <div className="col-span-12 xl:col-span-8">
                    <p className="themed-blog-text mt-12">{post.text}</p>
                    <PostCommentSection className="apply-pt" />
                </div>
                <div className="col-span-12 mt-12 xl:col-span-3 xl:col-start-10 xl:ml-12">
                    <MostPopular className="xl:col-span-3 xl:col-start-9" />
                    <EditorPicks className="apply-pt xl:col-span-3 xl:col-start-9" />
                </div>
            </div>
        </section>
    );
};

export default BlogPost;
