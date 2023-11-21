'use client';

import { useReducer } from 'react';
import { MdMenu, MdMenuOpen } from 'react-icons/md';

import { cn } from '@/lib/utils';
import Logo from '@/assets/default-monochrome.svg';

import { WithClassName } from '@/types/UI';
import { Sheet, SheetContent, SheetTrigger } from '@/ui/Sheet';
import NavLink from '@/ui/NavLink';

import navLinks from '@/data/navigation.json';
import AuthenticatedLinks from '@/modules/AuthenticatedLinks';
import ThemeToggle from '@/modules/ThemeToggle';

const MobileMenu = ({ className }: WithClassName) => {
    const [open, toggleOpen] = useReducer((state) => !state, false);

    return (
        <>
            <div className={cn('flex items-center lg:hidden', className)} onClick={toggleOpen}>
                {open ? (
                    <MdMenuOpen className="h-10 w-10 text-gray-200" />
                ) : (
                    <MdMenu className=" text-text-gray-600 h-10 w-10" />
                )}
            </div>
            <Sheet open={open} onOpenChange={toggleOpen}>
                <SheetContent className="h-[101vh] bg-gray-100 text-center dark:bg-dark" side="top">
                    {' '}
                    <Logo className="h-auto w-56 fill-black transition-colors dark:fill-gray-200 lg:w-72" />
                    <nav className="h-11/12 flex w-11/12 flex-col items-center justify-center gap-10">
                        <ul className="flex flex-col items-center justify-center gap-12 text-base">
                            {navLinks.map((link) => (
                                <li key={link.key}>
                                    <SheetTrigger>
                                        <NavLink className="navlink text-theme" href={link.url}>
                                            {link.name}
                                        </NavLink>
                                    </SheetTrigger>
                                </li>
                            ))}
                            <AuthenticatedLinks />
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
