import Featured from '@/modules/Posts/Featured';
import HeroTitle from '@/modules/UI/HeroTitle';
import { WithCategorySearchParams } from '@/types/UI';

const BlogMainPage = ({ searchParams }: WithCategorySearchParams) => {
    return (
        <section>
            <section className="apply-pt">
                <HeroTitle>
                    <div className="mb-3">
                        Let&apos;s dive deep into the world of{' '}
                        <div className="relative inline overflow-visible">
                            <span className="animated-gradient-text relative z-20 fill-gray-100 capitalize dark:fill-dark">
                                {searchParams?.category || 'frontend development'}{' '}
                            </span>
                        </div>
                        ! 👋
                    </div>
                </HeroTitle>
            </section>
            <Featured />
        </section>
    );
};

export default BlogMainPage;
