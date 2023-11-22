import ts from '@/assets/categories/typescript.png';
import js from '@/assets/categories/javascript.png';
import next from '@/assets/categories/next.png';
import react from '@/assets/categories/react.png';
import music from '@/assets/categories/music.png';
import food from '@/assets/categories/food.png';
import travel from '@/assets/categories/travel.png';
import books from '@/assets/categories/books.png';

const blogCategories = [
    {
        id: 'category-javascript',
        name: 'JavaScript',
        image: js,
        slug: 'javascript',
        description:
            'Having started out with JavaScript 5 years ago, I have played around with many different frameworks and libraries. Here I am sharing my experiences and favorite tips & tricks.',
        backgroundColor: 'rgba(207, 191, 164, 0.175)',
    },
    {
        id: 'category-typescript',
        name: 'TypeScript',
        image: ts,
        slug: 'typescript',
        description:
            'TypeScript can feel intimidating at first, but it is a great tool to help you write better code. Here I am sharing some advice to make your life easier.',
        backgroundColor: 'rgba(124, 187, 228, 0.175)',
    },
    {
        id: 'category-next',
        name: 'NextJS',
        image: next,
        slug: 'next',
        description:
            'NextJS is my favorite framework for building React applications. Here I am sharing some tips & tricks to help you get started.',
        backgroundColor: 'rgba(126, 126, 126, 0.175)',
    },
    {
        id: 'category-react',
        name: 'React',
        image: react,
        slug: 'react',
        description:
            "React needs no introduction, but can be challenging at first. Let's explore some of the best practices and tips & tricks to help you get started.",
        backgroundColor: 'rgba(119, 198, 255, 0.175)',
    },
    {
        id: 'category-music',
        name: 'Music',
        image: music,
        slug: 'music',
        description:
            'Who can say no to some good music while programming? Here I am sharing some of my favorite playlists and songs.',
        backgroundColor: 'rgba(48, 64, 254, 0.1)',
    },
    {
        id: 'category-food',
        name: 'Food',
        image: food,
        slug: 'food',
        description:
            'I love cooking and trying out new recipes. Here I am sharing some of my favorite dishes, mainly from the Greek cuisine.',
        backgroundColor: 'rgba(89, 12, 91, 0.1)',
    },
    {
        id: 'category-travel',
        name: 'Travel',
        image: travel,
        slug: 'travel',
        description:
            "They say travelling expands your horizons. Let's explore some of the places I have visited and the experiences I have had.",
        backgroundColor: 'rgba(289, 184, 54, 0.15)',
    },
    {
        id: 'category-books',
        name: 'Books',
        image: books,
        slug: 'books',
        description:
            "After a long day, there's nothing better than reading a good book. Here I am sharing some of my favorite books.",
        backgroundColor: 'rgba(255, 12, 91, 0.1)',
    },
];

export default blogCategories;
