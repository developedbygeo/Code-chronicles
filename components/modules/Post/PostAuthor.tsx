import Image from 'next/image';

import { parseDate } from '@/lib/utils';
import { WithClassName } from '@/types/UI';
import { Author } from '@/types/blogTypes';

type PostAuthorType = WithClassName & {
    author: Author;
    date: string;
};

const PostAuthor = ({ className, author, date }: PostAuthorType) => (
    <div className="relative mt-8 flex items-center gap-x-4">
        <div className="relative h-10 w-10 rounded-full shadow-lg">
            <Image className="rounded-full" src={author.image} alt={author.name} fill />
        </div>
        <div className="text-sm leading-6">
            <p className="themed-text !font-semibold tracking-normal text-gray-900">{author.name}</p>
            <p className="themed-minor-text !font-normal text-gray-500">{parseDate(date)}</p>
        </div>
    </div>
);

export default PostAuthor;
