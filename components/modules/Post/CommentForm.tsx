import { cn } from '@/lib/utils';
import { WithClassName } from '@/types/UI';
import { Button } from '@/ui/Button';
import { Label } from '@/ui/Label';
import { Textarea } from '@/ui/Textarea';

const CommentForm = ({ className }: WithClassName) => {
    return (
        <form className={cn('', className)}>
            <div>
                <Label htmlFor="new-comment">Your Comment</Label>
                <Textarea placeholder="Type your message here." id="message-2" />
                <p className="text-muted-foreground text-sm">Your message will be copied to the support team.</p>
            </div>
            <Button>Submit</Button>
        </form>
    );
};

export default CommentForm;
