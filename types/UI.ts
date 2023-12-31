export type WithClassName = {
    className?: string;
};

export type WithChildren = {
    children?: React.ReactNode;
};

export type WithSource = {
    src: string;
};

export type WithSearchParams = {
    searchParams?: string | string[] | undefined;
};

export type WithCategorySearchParams = {
    searchParams?: {
        category: string;
    };
};

export type AnimationDirection = 'up' | 'down' | 'left' | 'right' | 'default';
