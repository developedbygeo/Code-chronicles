import CustomThemeProvider from '@/modules/CustomThemeProvider';
import Footer from '@/modules/Footer';
import Navbar from '@/modules/Navbar';
import { WithChildren } from '@/types/UI';

const MarketingLayout = ({ children }: WithChildren) => (
    <CustomThemeProvider>
        <div className="container min-h-screen dark:bg-dark">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    </CustomThemeProvider>
);

export default MarketingLayout;
