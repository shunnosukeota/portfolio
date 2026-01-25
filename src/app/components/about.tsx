import Link from 'next/link';

export default async function About() {
    return (
        <>
            <p className={`max-w-[30ch] text-lg lg:text-3xl mt-4 lg:mt-12 leading-normal`}>
                Stand × Endear<br />
                愛されるために立つ。
            </p>
            <p className={`opacity-60 font-mono mt-4 lg:mt-10 mb-8 max-lg:text-sm`}>
                Stendear(ステンディア)は、<br />
                太田駿之介が運営する個人の開発ブランドです。<br />

                <br />
                Web制作、システム開発、クラウド運用を中心に、
                企画から実装・運用まで一貫して支援しています。<br />

                <br />
                Stendearには、<br />
                「Stand - 信念を持って立つ」<br />
                「Endear - 人に愛され、心に寄り添う」<br />
                この想いが込められています。<br />
                <br />

                人のためであるという信念に立ち、
                長く愛され続ける存在を目指しています。<br />
                <br />
            </p>
        </>
    );
}
