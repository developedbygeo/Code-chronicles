'use client';

import { WithChildren } from '@/types/UI';
import { ThemeProvider } from 'next-themes';

const CustomThemeProvider = ({ children }: WithChildren) => <ThemeProvider attribute="class">{children}</ThemeProvider>;

export default CustomThemeProvider;
