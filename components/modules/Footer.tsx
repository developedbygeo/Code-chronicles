import Link from 'next/link';

import { cn } from '@/lib/utils';
import { WithClassName } from '@/types/UI';

import Logo from '@/assets/default-monochrome.svg';
import socialMedia from '@/data/socialMedia';
import blogCategories from '@/data/blogCategories';

const Footer = ({ className }: WithClassName) => {
    return (
        <footer
            className={cn('border-t border-t-gray-200 py-12 dark:border-t-gray-700', className)}
            aria-labelledby="footer-heading"
        >
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="container flex flex-col xl:flex-row">
                <div className="flex flex-1 flex-col space-y-8">
                    <Logo className="h-auto w-56 fill-black transition-colors dark:fill-gray-200 lg:w-48" />
                    <p className="themed-minor-text">Designing & developing apps, websites and systems for the web.</p>
                    <ul className="flex space-x-6">
                        {socialMedia.map((item) => {
                            const Icon = item.icon;

                            return (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    target="_blank"
                                    referrerPolicy="no-referrer"
                                    className="text-gray-400 hover:text-gray-500"
                                >
                                    <span className="sr-only">{item.name}</span>
                                    <Icon className="h-6 w-6 transition-colors hover:text-dark dark:text-gray-400 dark:hover:text-gray-100" />
                                </a>
                            );
                        })}
                    </ul>
                    <div className="flex flex-1 flex-col space-y-8 xl:hidden">
                        <h3 className="themed-minor-text text-sm font-semibold">Categories</h3>
                        <ul className="mt-6 flex flex-col gap-4 xl:flex-row xl:items-center">
                            {blogCategories.map((category) => (
                                <Link key={category.name} href={`/blog?category=${category.slug}`} className="">
                                    <span className="navlink">{category.name}</span>
                                </Link>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-4 pt-8">
                        <p className="themed-minor-text text-xs font-light">
                            &copy; {new Date().getFullYear()} developedbygeo. All rights reserved.
                        </p>
                    </div>
                </div>
                <div className="hidden flex-1 flex-col space-y-8 xl:flex">
                    <h3 className="themed-minor-text text-sm font-semibold">Categories</h3>
                    <ul className="mt-6 flex flex-col gap-4 xl:flex-row xl:items-center">
                        {blogCategories.map((category) => (
                            <Link key={category.name} href={`/blog?category=${category.slug}`} className="">
                                <span className="navlink font-light">{category.name}</span>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
