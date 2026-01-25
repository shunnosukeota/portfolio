import Link from 'next/link';

export default async function Works() {
    return (
        <>
            <p className={`max-w-[30ch] text-lg lg:text-3xl mt-4 lg:mt-12 leading-normal`}>
                Web/App、EC、インフラ、データ<br />
                新規開発から軽微な修正対応まで
            </p>
            <div className={'mt-8 lg:grid lg:grid-cols-2 lg:gap-4'}>

                <div className={`opacity-60 font-mono mt-10 mb-8`}>
                    <h3 className={`font-mono text-xl lg:text-3xl leading-normal`}>
                        Webサイト(CMS)<br />
                        Webアプリ開発
                    </h3>
                    <p className={`mt-4 max-lg:text-sm`}>
                        コーポレートサイトやサービスサイト、<br />
                        Webアプリケーションの設計・開発を行います。<br />
                        要件定義から実装、運用まで一貫して対応し、<br />
                        使いやすく拡張性のあるシステムを構築します。<br />
                        <br />
                    </p>
                </div>

                <div className={`opacity-60 font-mono mt-10 mb-8`}>
                    <h3 className={`font-mono text-xl lg:text-3xl leading-normal`}>
                        SFCCを用いたECサイト構築<br />
                        運用支援
                    </h3>
                    <p className={`mt-4 max-lg:text-sm`}>
                        Salesforce Commerce Cloudを用いた<br />
                        オンラインショップの構築・カスタマイズを行います。<br />
                        業務フローに合わせた機能開発や運用を見据えた設計で、
                        安定したECサイトを実現します。<br />
                        <br />
                    </p>
                </div>

                <div className={`opacity-60 font-mono mb-8`}>
                    <h3 className={`font-mono text-xl lg:text-3xl leading-normal`}>
                        インフラ<br />
                        クラウドサーバーの構築<br />
                    </h3>
                    <p className={`mt-4 max-lg:text-sm`}>
                        AWWSなどのクラウドサービスを利用した<br />
                        サーバー環境の設計・構築を行います。<br />
                        セキュリティや可用性、コストを考慮した<br />
                        インフラ設計により、安心して運用できる環境を提供します。<br />
                        <br />
                    </p>
                </div>

                <div className={`opacity-60 font-mono mb-4`}>
                    <h3 className={`font-mono text-xl lg:text-3xl leading-normal`}>
                        データエンジニアリング<br />
                        Snowflake/Databricks<br />
                    </h3>
                    <p className={`mt-4 max-lg:text-sm`}>
                        データの収集・加工・蓄積・分析基盤の構築を行います。<br />
                        業務データを活用しやすい形に整備し、<br />
                        意思決定やサービス改善につながるデータ活用を支援します。<br />
                        <br />
                    </p>
                </div>

            </div>
        </>
    );
}
