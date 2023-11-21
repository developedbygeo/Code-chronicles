'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { PiSunFill, PiMoonFill } from 'react-icons/pi';

import { cn } from '@/lib/utils';
import { WithClassName } from '@/types/UI';
import { Button } from '@/ui/Button';

const ThemeToggle = ({ className }: WithClassName) => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        console.log(theme);
    }, [theme]);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const handleThemeToggle = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const themeClass = theme === 'dark' ? 'translate-x-[150%] left-[initial]' : 'translate-x-0 left-px';

    return (
        <Button
            onClick={handleThemeToggle}
            variant="ghost"
            className={cn(
                'relative flex h-6 w-14 cursor-pointer items-center justify-between rounded-2xl bg-gray-400 px-1 transition-colors hover:bg-gray-600 dark:bg-gray-500 dark:hover:bg-gray-700',
                className
            )}
        >
            <PiSunFill className="h-4 w-4 text-yellow-400" />
            <div
                className={cn(
                    'absolute left-px h-5 w-5 rounded-full bg-white transition-transform will-change-transform',
                    themeClass
                )}
            ></div>
            <PiMoonFill className="h-4 w-4 text-blue-100" />
        </Button>
    );
};

export default ThemeToggle;
