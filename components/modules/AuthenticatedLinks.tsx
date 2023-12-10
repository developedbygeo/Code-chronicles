import Link from 'next/link';

import { WithClassName } from '@/types/UI';

import { Button } from '@/components/ui/Button';
import NavLink from '@/ui/NavLink';

const AuthenticatedLinks = ({ className }: WithClassName) => {
    // temp
    const isAuth = true;

    if (!isAuth) {
        return (
            <li>
                <NavLink className="navlink" activeClassName="!text-white" href="/login">
                    Login
                </NavLink>
            </li>
        );
    }

    return (
        <>
            <li>
                <NavLink className="navlink" activeClassName="!text-black dark:!text-white" href="/create-new-post">
                    Post
                </NavLink>
            </li>
            <li>
                <NavLink className="navlink" activeClassName="!text-black dark:!text-white" href="/logout">
                    Logout
                </NavLink>
            </li>
        </>
    );
};

export default AuthenticatedLinks;
