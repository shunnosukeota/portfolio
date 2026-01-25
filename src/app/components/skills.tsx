import Link from 'next/link';

export default async function Skills() {
    return (
        <>
            <p className={`max-w-[30ch] text-lg lg:text-3xl mt-4 lg:mt-12 leading-normal`}>
                ミニマムな開発から<br />
                大規模開発まで
            </p>
            <p className={`opacity-60 font-mono mt-4 lg:mt-10 mb-4 max-lg:text-sm`}>
                ・フロント/サーバーサイドエンジニア、データエンジニア、フルスタックエンジニア<br />
                ・ECサイトの構築<br />
                ・Salesforce SFA支援<br />
                ・データ基盤構築、ETL開発（Snowflake、Databricks）<br />
                ・クラウドサーバー構築、運用（AWS）<br />
                ・Webサイト、WEBアプリ作成<br />
                ・UI/UXデザイン<br />
                etc...<br />
                <br />
            </p>
        </>
    );
}
