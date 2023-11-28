import { Author } from '@/types/blogTypes';

export type Comment = {
    id: string;
    author: Author;
    text: string;
    date: string;
};
