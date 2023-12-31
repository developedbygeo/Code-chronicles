export type BlogPostCategory = 'JavaScript' | 'TypeScript' | 'NextJS' | 'React' | 'Music' | 'Food' | 'Travel' | 'Books';

export type BlogPreview = {
    id: string;
    image: string;
    date: string;
    category: BlogPostCategory;
    title: string;
    subtitle: string;
    description: string;
    slug: string;
    author: string;
};

export type PopularEntryPreview = {
    id: string;
    title: string;
    author: string;
    date: string;
    category: BlogPostCategory;
    slug: string;
};

export type Author = {
    name: string;
    image: string;
    description: string;
};

export type BlogPost = {
    id: string;
    image: string;
    date: string;
    category: BlogPostCategory;
    title: string;
    subtitle: string;
    text: string;
    slug: string;
    author: Author;
    publishedAt: string;
};
