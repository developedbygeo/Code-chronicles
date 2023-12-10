import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/styles/globals.css';

import { cn } from '@/lib/utils';
import { WithChildren } from '@/types/UI';
import { Root } from 'postcss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Code Chronicles',
    description: 'Developedbygeo blog about coding and other things',
};

const RootLayout = ({ children }: WithChildren) => (
    <html lang="en" suppressHydrationWarning>
        <body className={cn(inter.className, 'dark:bg-dark bg-gray-100')}>
            <main>{children}</main>
        </body>
    </html>
);

export default RootLayout;
