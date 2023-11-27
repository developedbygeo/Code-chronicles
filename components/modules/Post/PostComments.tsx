import Link from 'next/link';

import { WithClassName } from '@/types/UI';
import CommentForm from '@/modules/Post/CommentForm';

const PostComments = ({ className }: WithClassName) => {
    const isAuth = true;

    return (
        <section className="container">
            <h2>Comments</h2>
            {isAuth ? <CommentForm /> : <Link href="/login">Sign in to comment</Link>}
        </section>
    );
};

export default PostComments;
