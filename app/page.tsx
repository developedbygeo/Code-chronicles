import Image from 'next/image';

import Featured from '@/modules/Home/Featured';
import BlogCategories from '@/modules/Home/BlogCategories';

export default function Home() {
    return (
        <section>
            <Featured className="apply-pt" />
            <BlogCategories className="apply-pt" />
        </section>
    );
}
