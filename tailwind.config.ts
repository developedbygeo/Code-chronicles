/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
    future: { hoverOnlyWhenSupported: true },
    darkMode: ['class'],
    content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        extend: {
            height: {
                '10/12': '83.333333%',
                '11/12': '91.666667%',
            },
            colors: {
                dark: '#2D2D30',
                gray: {
                    50: '#f9fafb',
                    100: '#f4f5f7',
                    200: '#e5e7eb',
                    300: '#d6d8db',
                    400: '#a1a1aa',
                    500: '#71717a',
                    600: '#52525b',
                    700: '#3f3f46',
                    800: '#27272a',
                    900: '#18181b',
                },
                accent: {
                    default: '#7987FF',
                    vibrant: '#6978FF',
                    hover: '#5C6CFF',
                },
            },
            textShadow: {
                '2xl': '1px 1px 5px rgb(33 34 43 / 20%)',
                '3xl': '0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)',
                'hero-header': '1px 1px 5px rgba(121,135,255,1)',
            },
            backgroundImage: {
                'gradient-background': 'linear-gradient(to top, #191B1F, #26292E)',
                'gradient-container': 'linear-gradient(to bottom, #26292E, #191B1F)',
            },
            boxShadow: {
                'container-neumorph':
                    '-0.5rem -0.625rem 2.5rem -0.3125rem rgba(150, 190, 231, 0.15), 0.5rem 0.625rem 2.5rem 0.3125rem rgba(10, 10, 10, 0.7)',
                'container-neumorph-sm':
                    '-0.5rem -0.625rem 2.5rem -0.3125rem rgba(150, 190, 231, 0.1), 0.5rem 0.625rem 2.5rem 0.3125rem rgba(10, 10, 10, 0.3)',
            },
            fontFamily: {
                sans: ['var(--font-montserrat)', ...defaultTheme.fontFamily.sans],
                anton: ['var(--font-anton)', ...defaultTheme.fontFamily.sans],
            },
            keyframes: {
                'moving-gradient': {
                    '0%': { backgroundPosition: '0% 50%' },
                    '100%': { backgroundPosition: '100% 50%' },
                },
                spinning: {
                    from: { transform: 'rotate(0deg)' },
                    to: { transform: 'rotate(360deg)' },
                },
                'accordion-down': {
                    from: { height: 0 },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: 0 },
                },
                'bubble-bounce': {
                    '0%, 100%': {
                        transform: 'translateY(-1.5rem)',
                    },
                    '50%': {
                        transform: 'translateY(1.5rem)',
                    },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                bubble: 'bubble-bounce 8s ease-in-out infinite alternate',
                'bubble-mid': 'bubble-bounce 12s ease-in-out infinite alternate',
                'bubble-slow': 'bubble-bounce 22s linear infinite',
                spinning: 'spinning 4s linear infinite',
                'moving-gradient': 'moving-gradient 12s ease infinite alternate',
            },
        },
    },
    plugins: [
        require('tailwindcss-animate'),
        require('tailwindcss-fluid-type')({
            values: {
                xs: [-2, 1.6],
                sm: [-1, 1.6],
                base: [0, 1.6],
                lg: [1, 1.6],
                xl: [2, 1.2],
                '2xl': [3, 1.2],
                '3xl': [4],
                '4xl': [5],
                '5xl': [6, 1.1],
                '6xl': [7, 1.1],
                '7xl': [8, 1],
                '8xl': [9, 1],
                '9xl': [10, 1],
            },
        }),
        require('tailwind-scrollbar')({ nocompatible: true }),
        require('tailwindcss-textshadow'),
    ],
};
