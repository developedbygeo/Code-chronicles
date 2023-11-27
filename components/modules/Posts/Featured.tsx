import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { WithClassName } from '@/types/UI';

import { Button } from '@/ui/Button';

const Featured = ({ className }: WithClassName) => (
    <section className={cn('', className)}>
        <div className="mt-14 flex flex-col items-center gap-12 lg:flex-row">
            <div className="relative h-[25rem] w-full xl:h-[25rem] xl:max-w-[40rem] xl:flex-1">
                <Image src="/test-blog-image.jpg" alt="Featured" fill />
            </div>
            <div className="flex flex-1 flex-col gap-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, sunt.
                </h3>
                <p className="themed-text text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor hic, maiores sunt harum ipsa debitis
                    fugiat ratione porro quae ab minima, dolorem nemo cupiditate consectetur mollitia odit quis ipsam
                    reiciendis possimus, officiis vitae aliquam. Cumque ullam recusandae fugiat repellendus similique
                    aut eius nulla, doloribus dignissimos odit rerum nemo ab non.
                </p>
                <Button asChild variant="default" size="lg" className="w-full md:w-fit md:self-center xl:self-start">
                    <Link href="/">Read More</Link>
                </Button>
            </div>
        </div>
    </section>
);

export default Featured;
