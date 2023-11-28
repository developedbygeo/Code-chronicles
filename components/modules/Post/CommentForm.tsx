import { cn } from '@/lib/utils';
import { WithClassName } from '@/types/UI';
import { Button } from '@/ui/Button';
import { Label } from '@/ui/Label';
import { Textarea } from '@/ui/Textarea';

const CommentForm = ({ className }: WithClassName) => {
    return (
        <form className={cn('', className)}>
            <div className="flex flex-col gap-3">
                <Label htmlFor="new-comment">Your Comment</Label>
                <Textarea placeholder="Type your message here." id="message-2" />
                <p className="themed-text">Your message will be reviewed prior to being published.</p>
            </div>
            <Button className="mt-4 w-fit">Submit</Button>
        </form>
    );
};

export default CommentForm;
