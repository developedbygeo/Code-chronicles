'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

import { WithClassName } from '@/types/UI';
import { Button } from '@/ui/Button';

// TODO - implement pagination logic
type PaginationProps = WithClassName & {
    page?: number;
    hasPrev?: boolean;
    hasNext?: boolean;
};

const Pagination = ({ page, hasPrev, hasNext }: PaginationProps) => {
    const router = useRouter();

    return (
        <div className="flex justify-between">
            <Button
                variant="ghost"
                disabled={!hasPrev}
                // onClick={() => router.push(`?page=${page - 1}`)}
            >
                <SlArrowLeft className="h-7 w-7" />
            </Button>
            <Button
                variant="ghost"
                disabled={!hasNext}
                // onClick={() => router.push(`?page=${page + 1}`)}
            >
                <SlArrowRight className="h-7 w-7" />
            </Button>
        </div>
    );
};

export default Pagination;
