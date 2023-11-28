import { cn } from '@/lib/utils';
import PostAuthor from '@/modules/Post/PostAuthor';
import { WithClassName } from '@/types/UI';
import { Comment } from '@/types/comments';

type PostCommentsProps = WithClassName & {
    comments: Comment[];
};

const PostComments = ({ className, comments }: PostCommentsProps) => {
    return (
        <ul className={cn('flex flex-col gap-1', className)}>
            {comments.map((comment) => (
                <li key={comment.id}>
                    <PostAuthor author={comment.author} date={comment.date} />
                    <p className="themed-minor-text mt-2">{comment.text}</p>
                </li>
            ))}
        </ul>
    );
};

export default PostComments;
