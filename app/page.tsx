import Featured from '@/modules/Home/Featured';
import BlogCategories from '@/modules/Home/BlogCategories';
import RecentPosts from '@/modules/Home/RecentPosts';
import MostPopular from '@/modules/Home/MostPopular';

export default function Home() {
    return (
        <section>
            <Featured className="apply-pt" />
            <BlogCategories className="apply-pt" />
            <div className="apply-pt grid grid-cols-1 xl:grid-cols-12">
                <RecentPosts className="xl:col-span-8" />
                <MostPopular className="xl:col-span-2 xl:col-start-11" />
            </div>
        </section>
    );
}
