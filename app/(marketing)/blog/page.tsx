import Featured from '@/modules/Posts/Featured';
import HeroTitle from '@/modules/UI/HeroTitle';
import { WithCategorySearchParams } from '@/types/UI';

const BlogMainPage = ({ searchParams }: WithCategorySearchParams) => {
    return (
        <div>
            <section className="apply-pt">
                <HeroTitle>
                    <div className="mb-3">
                        Let&apos;s dive deep into the world of{' '}
                        <div className="relative inline overflow-visible">
                            <span className="animated-gradient-text dark:fill-dark relative z-20 fill-gray-100 capitalize">
                                {searchParams?.category || 'frontend development'}{' '}
                            </span>
                        </div>
                        ! 👋
                    </div>
                </HeroTitle>
            </section>
            <Featured />
        </div>
    );
};

export default BlogMainPage;
