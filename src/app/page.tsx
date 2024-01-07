import Image from "next/image";
import Welcome from "./components/Welcome";
import Logo from "./components/Logo";
import Link from 'next/link';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Client from "./client";

const sleep = (msec: number) => new Promise((resolve) => setTimeout(resolve, msec));

export default async function Home() {
  await sleep(2700);
  return (
    <>
      <main className="animate-fade-in flex min-h-screen flex-col items-center justify-between">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex pt-24">
          <Header />
        </div>
        <Logo />
        <div className="mb-8 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <Link href='/About' >a</Link>
          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2
              className={`animate-tracking-in-expand mb-3 text-2xl font-semibold`}
            >
              <span className="inline-block mr-1 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                &gt;
              </span>
              Works{" "}
            </h2>
            <p className={`m-auto max-w-[30ch] text-sm opacity-50`}>
              Introduce the work and works that SHUNNOSUKE OTA has done so far.
            </p>
          </a>
          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              <span className="inline-block mr-1 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                &gt;
              </span>
              Skils{" "}
            </h2>
            <p className={`m-auto max-w-[30ch] text-sm opacity-50`}>
              List all the skills that SHUNNOSUKE OTA has. It is divided into
              levels.
            </p>
          </a>
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              <span className="inline-block mr-1 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                &gt;
              </span>
              Hoby{" "}
            </h2>
            <p className={`m-auto max-w-[30ch] text-sm opacity-50`}>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
          <Footer />
        </div>
      </main>
    </>
  );
}
