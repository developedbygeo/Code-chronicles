import Link from 'next/link';
import { WithClassName } from '@/types/UI';

import AuthenticatedLinks from '@/modules/AuthenticatedLinks';
import ThemeToggle from '@/modules/ThemeToggle';
import MobileMenu from '@/modules/MobileMenu';

import { cn } from '@/lib/utils';
import NavLink from '@/ui/NavLink';

import Logo from '@/assets/default-monochrome.svg';

import navLinks from '@/data/navigation.json';

type NavbarProps = WithClassName & {
    shouldHideThemeToggle?: boolean;
};

const Navbar = ({ className, shouldHideThemeToggle }: NavbarProps) => (
    <div className={cn('flex justify-between py-8 xl:px-4', className)}>
        <Link href="/">
            <Logo className="h-auto w-56 fill-black transition-colors dark:fill-gray-200 lg:w-72" />
        </Link>
        <nav className="hidden items-center xl:flex">
            {!shouldHideThemeToggle && <ThemeToggle className="mr-12" />}

            <ul className="flex justify-center space-x-12 text-base">
                {navLinks.map((link) => (
                    <li key={link.key}>
                        <NavLink className="navlink" activeClassName="!text-black dark:!text-white" href={link.url}>
                            {link.name}
                        </NavLink>
                    </li>
                ))}
                <AuthenticatedLinks />
            </ul>
        </nav>

        <MobileMenu />
    </div>
);

export default Navbar;
