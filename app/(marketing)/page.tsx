import Featured from '@/modules/Posts/Featured';
import BlogCategories from '@/modules/Posts/BlogCategories';
import RecentPosts from '@/modules/Posts/RecentPosts';
import MostPopular from '@/modules/Posts/MostPopular';
import SimpleBlogCategories from '@/modules/PostModules/SimpleBlogCategories';
import EditorPicks from '@/modules/Posts/EditorPicks';
import HeroTitle from '@/modules/UI/HeroTitle';

import UnderlineGraphic from '@/assets/underline-1.svg';

const Home = () => {
    return (
        <section>
            <section className="apply-pt">
                <HeroTitle>
                    <div className="mb-3">
                        Hello, I am{' '}
                        <div className="relative inline overflow-visible">
                            <span className="animated-gradient-text relative z-20 fill-gray-100 dark:fill-dark">
                                George{' '}
                            </span>
                            <UnderlineGraphic className="animated-gradient-text absolute -bottom-6 left-0 h-12 w-full" />
                        </div>
                        ! 👋
                    </div>
                    Find out more about frontend development, creative ideas and everything in between!
                </HeroTitle>
            </section>
            <Featured className="" />
            <BlogCategories className="apply-pt" />
            <div className="apply-pt grid grid-cols-1 xl:grid-cols-12">
                <RecentPosts className="xl:col-span-8" />
                <aside className="flex flex-col gap-12 xl:col-span-2 xl:col-start-11">
                    <MostPopular />
                    <SimpleBlogCategories listClassName="grid grid-cols-2 gap-6" />
                    <EditorPicks className="apply-pb mt-6" />
                </aside>
            </div>
        </section>
    );
};

export default Home;
