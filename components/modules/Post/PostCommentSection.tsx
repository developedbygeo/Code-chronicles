import Link from 'next/link';

import { WithClassName } from '@/types/UI';
import CommentForm from '@/modules/Post/CommentForm';
import PostComments from '@/modules/Post/PostComments';

import mockComments from '@/data/blog-post-comments.json';
import { cn } from '@/lib/utils';

import ScribbleGraphic from '@/assets/scribble-1.svg';

const PostCommentSection = ({ className }: WithClassName) => {
    const isAuth = true;

    return (
        <section className={cn('', className)}>
            <div className="relative w-fit">
                <h2 className="section-title">Comments</h2>
                <ScribbleGraphic className="animated-gradient-text absolute -right-24 -top-10 h-20 w-20" />
            </div>
            {isAuth ? <CommentForm /> : <Link href="/login">Sign in to comment</Link>}
            <PostComments className="mt-12" comments={mockComments} />
        </section>
    );
};

export default PostCommentSection;
