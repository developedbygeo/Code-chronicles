import Featured from '@/modules/Home/Featured';
import BlogCategories from '@/modules/Home/BlogCategories';
import RecentPosts from '@/modules/Home/RecentPosts';
import MostPopular from '@/modules/Home/MostPopular';
import SimpleBlogCategories from '@/modules/Blog/SimpleBlogCategories';
import EditorPicks from '@/modules/Home/EditorPicks';

const Home = () => {
    return (
        <section>
            <Featured className="apply-pt" />
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
