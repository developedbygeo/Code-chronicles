import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/styles/globals.css';

import CustomThemeProvider from '@/modules/CustomThemeProvider';

import Navbar from '@/components/modules/Navbar';
import Footer from '@/components/modules/Footer';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Code Chroines',
    description: 'Developedbygeo blog about coding and other things',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cn(inter.className, 'bg-gray-100 dark:bg-dark')}>
                <CustomThemeProvider>
                    <div className="container min-h-screen dark:bg-dark">
                        <Navbar />
                        <main>{children}</main>
                        <Footer />
                    </div>
                </CustomThemeProvider>
            </body>
        </html>
    );
}
