import Link from 'next/link';
import { CONTACT_INFO } from '../constants/contact';

export default function About() {
  const birthYear = 2001;
  const birthMonth = 10; // 誕生月（0-11で指定、例: 0=1月）
  const birthDay = 24; // 誕生日
  
  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(birthYear, birthMonth, birthDay);
    let age = today.getFullYear() - birthYear;
    const monthDiff = today.getMonth() - birthMonth;
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDay)) {
      age--;
    }
    return age;
  };

  return (
    <div className="about-page w-[90vw] lg:w-[70vw] mt-[8rem]">
      <div className="animate-fade-in max-lg:fixed absolute inset-0 bg-[url('/about_main2.jpg')] bg-cover max-md:bg-[55%_0%] lg:bg-[20%_0%] z-0"></div>

      <div className="relative z-10 text-white p-6">
        <h2 className={`animate-fade-in animation-delay-1000 m-auto md:mb-40 max-md:mb-20 text-5xl lg:text-8xl`}>
            About{" "}
        </h2>
        
        <div className="details flex justify-between lg:w-1/2 max-md:text-sm">

          <div className="group animate-fade-in animation-delay-1300">
            <h2 className="mb-3 text-2xl">
              太田 駿之介 ({calculateAge()}歳)
            </h2>
            <h2 className="mb-1 text-2xl">
              SHUNNOSUKE OTA
            </h2>
            <h3 className="mb-3 text-xl">
              システムエンジニア/データエンジニア
            </h3>
            <div>
              <dt>居住地:</dt><dd>宮城県仙台市</dd>
              <dt>投打:</dt><dd>右投右打</dd>
              <dt>身長体重:</dt><dd>171cm/64kg</dd>
              <dt>趣味:</dt>
                <dd>フルマラソン</dd>
                <dd>UVERworld</dd>
                <dd>野球観戦</dd>
                <dd></dd>
              <dt>お問い合わせ:</dt>
                <dd>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="underline hover:opacity-30 duration-500">
                    {CONTACT_INFO.email}
                  </a>
                </dd>
              {/* ブログ廃止中
              <dt>ブログ:</dt>
                <dd>
                  <a href="https://kosennoshun.com/" target="_blank" className='underline hover:opacity-30 duration-500'>
                    Shun Page
                  </a>
                </dd>
              */}
              <dt>SNS:</dt>
                <dd>
                  <a href="https://www.instagram.com/shunnosukeshunnosukeshunnosuke/" target="_blank" className='underline hover:opacity-30 duration-500'>
                  instagram
                  </a>
                </dd>
            </div>

          </div>

        </div>

        <div className="group animate-fade-in animation-delay-1300 mt-10 max-md:text-sm">
          <p className='w-fit bg-black bg-opacity-20 p-[0.5rem]'>
            高専の建築デザインコースを卒業後、施工業界にて半年間勤務。<br />
            趣味でブログとアプリの開発後、IT業界へ転職し、<br />
            ECサイト開発のプロジェクトリーダーに就任。<br />
            顧客折衝を中心に、提案・要件定義から設計、開発、<br />
            テストまでプロジェクト全工程を経験。<br /><br />
            現在はデータエンジニアへ転身し、<br />
            データ基盤構築や分析環境の整備に従事。<br />
            EC・CMSサイト構築、データエンジニアリング、<br />
            クラウドサーバーの管理から、<br />
            cssの修正や軽微な機能改修まで幅広く経験あり。<br /><br />
            ブランドStendearのアイコンである
            「S」の中心には、<br />一貫した軸、信念があります。<br />
            人のために、人から愛されるように、<br />
            信念を持って立ちます。<br />
            Stendearにはそんな想いが込められています。
          </p>
        </div>

      </div>

    </div>
    
  );
}
