import Footer from '@/modules/Footer';
import Navbar from '@/modules/Navbar';
import { WithChildren } from '@/types/UI';

const AuthLayout = ({ children }: WithChildren) => (
    <div className="container min-h-screen">
        <Navbar shouldHideThemeToggle />
        <main>{children}</main>
    </div>
);

export default AuthLayout;
