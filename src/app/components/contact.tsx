import { CONTACT_INFO } from '../constants/contact';

export default async function Contact() {
    return (
        <>
            <p className={`max-w-[30ch] text-lg lg:text-3xl mt-4 lg:mt-12 mb-10 leading-normal`}>
                ご依頼・お問い合わせは<br />
                メール または LINE にて
            </p>
            
                <a href={`mailto:${CONTACT_INFO.email}`} className="w-fit opacity-70 lg:text-2xl border-b-2 border-black hover:opacity-30 hover:border-transparent transition-all duration-500">
                    {CONTACT_INFO.email}
                </a>
                <br /><br />
                <a href={CONTACT_INFO.line} target="_blank" rel="noopener noreferrer" className="w-fit opacity-70 lg:text-2xl border-b-2 border-black hover:opacity-30 hover:border-transparent transition-all duration-500">
                    LINEでお問い合わせ
                </a>
        </>
    );
}
