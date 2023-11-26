'use client';

import { useReducer } from 'react';
import { MdMenu, MdMenuOpen } from 'react-icons/md';

import { cn } from '@/lib/utils';
import Logo from '@/assets/default-monochrome.svg';
import socialMedia from '@/data/socialMedia';

import { WithClassName } from '@/types/UI';
import { Sheet, SheetContent, SheetTrigger } from '@/ui/Sheet';
import NavLink from '@/ui/NavLink';

import navLinks from '@/data/navigation.json';
import AuthenticatedLinks from '@/modules/AuthenticatedLinks';
import ThemeToggle from '@/modules/ThemeToggle';

import { Button } from '@/ui/Button';

const MobileMenu = ({ className }: WithClassName) => {
    const [open, toggleOpen] = useReducer((state) => !state, false);

    return (
        <>
            <Button variant="ghost" className={cn('flex items-center px-0 lg:hidden', className)} onClick={toggleOpen}>
                <MdMenu className=" text-text-gray-600 h-10 w-10" />
            </Button>
            <Sheet open={open} onOpenChange={toggleOpen}>
                <SheetContent className="h-[101vh] bg-gray-100 text-center dark:bg-dark" side="top">
                    {' '}
                    <Logo className="h-auto w-56 fill-black transition-colors dark:fill-gray-200 lg:w-72" />
                    <nav className="flex h-11/12 w-11/12 flex-col items-center justify-center gap-10">
                        <ul className="flex flex-col items-center justify-center gap-12 text-base">
                            {navLinks.map((link) => (
                                <li key={link.key}>
                                    <SheetTrigger>
                                        <NavLink className="navlink themed-text" href={link.url}>
                                            {link.name}
                                        </NavLink>
                                    </SheetTrigger>
                                </li>
                            ))}
                            <AuthenticatedLinks />
                        </ul>

                        <ul className="mt-20 flex w-full justify-center space-x-6">
                            {socialMedia.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                                        <span className="sr-only">{item.name}</span>
                                        <Icon className="h-6 w-6 transition-colors hover:text-dark dark:text-gray-400 dark:hover:text-gray-100" />
                                    </a>
                                );
                            })}
                        </ul>
                    </nav>
                    <div className="flex w-full justify-center">
                        <ThemeToggle />
                    </div>
                </SheetContent>
            </Sheet>
        </>
    );
};

export default MobileMenu;
