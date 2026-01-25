import Link from 'next/link';

export default async function Hoby() {
    return (
        <Link
            href='/hoby'
            className="animate-fade-in animation-delay-3500 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
            >
            <h2 className={`mb-3 text-8xl`}>
                Hoby{" "}
            </h2>
            <p className={`m-auto max-w-[30ch] text-sm opacity-50`}>
                What I love so much. These include marathons, UVERworld, traveling, baseball, cooking, muscle training, etc.
            </p>
        </Link>
    );
}
