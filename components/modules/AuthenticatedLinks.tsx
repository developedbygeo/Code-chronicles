import Link from 'next/link';

import { WithClassName } from '@/types/UI';

import { Button } from '@/components/ui/Button';
import NavLink from '@/ui/NavLink';

const AuthenticatedLinks = ({ className }: WithClassName) => {
    // temp
    const isAuth = false;

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
                <NavLink href="/">Post</NavLink>
            </li>
            <li>
                <Button variant="secondary">Logout</Button>
            </li>
        </>
    );
};

export default AuthenticatedLinks;
