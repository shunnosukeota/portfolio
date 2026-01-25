export default function Works() {
  return (
    <div className="works-page w-[90vw] lg:w-[80vw] mt-[8rem]">
      <div className="relative z-10 p-6">
        <h2 className="animate-fade-in animation-delay-1000 m-auto max-md:mb-20 text-5xl lg:text-8xl">
          Works
        </h2>

        <p className="animate-fade-in animation-delay-1100 mt-10 mb-20 max-md:text-sm">
          真心を込めて作成した、愛する作品を紹介。
        </p>

        <div className="grid md:grid-cols-2 md:gap-8 max-lg:text-sm">
          {/* プレツイ */}
          <div className="grid animate-fade-in animation-delay-1200">
            <div className="max-md:order-2 bg-[url('/works/pretwe.jpg')] max-md:h-[45vw] h-[20.5vw] bg-cover rounded-lg shadow-2xl transition-all duration-300 hover:scale-105 hover:opacity-90"></div>
            <h2 className="max-md:order-1 mt-4 md:text-center text-xl max-md:mb-2">プレツイ</h2>
            <div className="max-md:order-3 mt-2 max-md:text-xs">
              <dt>使用技術:</dt>
              <dd>Laravel/AWS EC2</dd>
              <dt className="mt-1 max-md:hidden">詳細:</dt>
              <dd className="mt-1 text-sm max-md:text-xs max-md:w-full max-md:mt-2 max-md:opacity-60">
                受け取った・贈ったプレゼントをシェアするアプリ。<br />
                プレゼントを贈る際、実際に投稿されているプレゼントを参考にすることが可能。<br />
                他の人から自身の投稿を評価を受ける機能も搭載。
              </dd>
            </div>
          </div>

          {/* ポートフォリオサイト */}
          <div className="grid animate-fade-in animation-delay-1200 max-md:mt-8">
            <div className="max-md:order-2 bg-[url('/works/shunnosukeota_site.png')] max-md:h-[45vw] h-[20.5vw] bg-cover rounded-lg shadow-2xl transition-all duration-300 hover:scale-105 hover:opacity-90"></div>
            <h2 className="max-md:order-1 mt-4 md:text-center text-xl max-md:mb-2">ポートフォリオサイト</h2>
            <div className="max-md:order-3 mt-2 max-md:text-xs">
              <dt>使用技術:</dt>
              <dd>Next.js/AWS S3 CloudFront Lambda@edge</dd>
              <dt className="mt-1 max-md:hidden">詳細:</dt>
              <dd className="mt-1 text-sm max-md:text-xs max-md:w-full max-md:mt-2 max-md:opacity-60">
                可読性を重視したモダンなサイトを作成。<br />
                SSR/SSGにより軽快な読み込みと、SEOに強いサイトを実現。<br />
                AWSにてサーバーレス環境を構築し、コスト削減に成功。
              </dd>
            </div>
          </div>

          {/* CMSサイト構築 */}
          <div className="grid mt-6 animate-fade-in animation-delay-1400 max-md:mt-8">
            <a href="https://drawers9.tokyo/" target="_blank"><div className="max-md:order-2 bg-[url('/works/drawers9.png')] max-md:h-[45vw] h-[20.5vw] bg-cover rounded-lg shadow-2xl transition-all duration-300 hover:scale-105 hover:opacity-90"></div></a>
            <h2 className="max-md:order-1 mt-4 md:text-center text-xl max-md:mb-2">CMSサイト構築</h2>
            <div className="max-md:order-3 mt-2 max-md:text-xs">
              <dt>デザイナー:</dt>
              <dd>
                <a href="https://www.dottetedesign.com/" target="_blank" className="underline hover:opacity-30 duration-500">
                  加藤 健吾 (DotteteDesign)
                </a>
              </dd>
              <dt className="mt-1">使用技術:</dt>
              <dd className="mt-1">WordPress</dd>
              <dt className="mt-1 max-md:hidden">詳細:</dt>
              <dd className="mt-1 text-sm max-md:text-xs max-md:w-full max-md:mt-2 max-md:opacity-60">
                デザイナーが手掛けたレスポンシブなサイトを構築。<br />
                管理性を重視し、日々のスムーズな投稿を可能とした。<br />
                動画や画像の配置がメインだが、サイトのパフォーマンスを維持。
              </dd>
            </div>
          </div>

          {/* ECサイト構築・改修 */}
          <div className="grid mt-6 animate-fade-in animation-delay-1500 max-md:mt-8">
            <a href="https://www.salesforce.com/jp/products/commerce-cloud/overview/" target="_blank"><div className="max-md:order-2 bg-[url('/works/sfcc.png')] max-md:h-[45vw] h-[20.5vw] bg-cover rounded-lg shadow-2xl transition-all duration-300 hover:scale-105 hover:opacity-90 bg-center"></div></a>
            <h2 className="max-md:order-1 mt-4 md:text-center text-xl max-md:mb-2">ECサイト構築・改修</h2>
            <div className="max-md:order-3 mt-2 max-md:text-xs">
              <dt>使用技術:</dt>
              <dd>Salesforce Commerce Cloud</dd>
              <dt className="mt-1 max-md:hidden">詳細:</dt>
              <dd className="mt-1 text-sm max-md:text-xs max-md:w-full max-md:mt-2 max-md:opacity-60">
                大規模なECサイトをSFCCにて構築、改修。<br />
                外部API連携や決済導入まで幅広く対応。<br />
                プロモーションの設定や注文の管理、商品の購入から配達に至るまでのフローを把握。
              </dd>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mx-auto">
        <p className="comming-soon mt-8 max-md:mb-10">
          Coming Soon
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </p>
      </div>
    </div>
  );
}
