'use client';

import { LuBadgePlus, LuImage, LuUpload, LuVideo } from 'react-icons/lu';

import { WithClassName } from '@/types/UI';
import { useReducer } from 'react';
import { Button } from '@/ui/Button';
import { cn } from '@/lib/utils';

const EditorOptions = ({ className }: WithClassName) => {
    const [open, toggleOpen] = useReducer((open) => !open, false);

    return (
        <div className={cn('flex justify-start gap-6', className)}>
            <Button variant="editor" onClick={toggleOpen}>
                <LuBadgePlus
                    className={cn(
                        'h-6 w-6 transition-[colors_transform] duration-200 will-change-transform',
                        open ? 'rotate-45 text-accent-vibrant' : 'rotate-0 text-inherit'
                    )}
                />
            </Button>
            <div className={cn('flex gap-8 transition-opacity', open ? 'visible opacity-100' : 'invisible opacity-0')}>
                <Button title="Upload an image" variant="editor">
                    <LuImage className="h-6 w-6" />
                </Button>
                <Button title="Upload a video" variant="editor">
                    <LuVideo className="h-6 w-6" />
                </Button>
                <Button title="Upload an external file" variant="editor">
                    <LuUpload className="h-6 w-6" />
                </Button>
            </div>
        </div>
    );
};

export default EditorOptions;
