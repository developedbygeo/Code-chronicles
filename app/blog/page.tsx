import Featured from '@/modules/Posts/Featured';
import HeroTitle from '@/modules/UI/HeroTitle';

const BlogMainPage = () => {
    return (
        <section>
            <section className="apply-pt">
                <HeroTitle>
                    <div className="mb-3">
                        Let&apos;s dive deep into the world of{' '}
                        <div className="relative inline overflow-visible">
                            <span className="animated-gradient-text relative z-20 fill-gray-100 dark:fill-dark">
                                frontend development{' '}
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
