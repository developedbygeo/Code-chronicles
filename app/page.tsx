import Image from 'next/image';

import Featured from '@/modules/Home/Featured';

export default function Home() {
    return (
        <section>
            <Featured className="apply-py" />
        </section>
    );
}
