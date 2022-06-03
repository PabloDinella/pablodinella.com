import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import clsx from "clsx";
import { useState } from "react";

const Home: NextPage = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore((currentValue) => !currentValue);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Pablo Dinella</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center px-20 ">
        <h1 className="text-5xl text-center mb-12 mt-24">Olá</h1>

        <p className="mt-3 text-2xl">
          Meu nome é <strong>Pablo</strong>, e esse não é um digital garden, só
          uma boa e velha página pessoal mesmo.
        </p>

        <p className={clsx("mt-3 text-2xl", { hidden: !showMore })}>
          lorem ipsum
        </p>

        <p
          className="mt-3 text-2xl papa-underline hover:cursor-pointer hover:text-hover"
          onClick={toggleShowMore}
        >
          <a href="#">mais sobre mim</a>
        </p>

        {/* <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
            <p className="mt-4 text-xl">
              Find in-depth information about Next.js features and its API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Learn &rarr;</h3>
            <p className="mt-4 text-xl">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Examples &rarr;</h3>
            <p className="mt-4 text-xl">
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
            <p className="mt-4 text-xl">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      <footer className="flex w-full items-center justify-center">
        <p className="marquee">
          O que seria de uma página pessoal sem um marquee xD
        </p>
      </footer>
    </div>
  );
};

export default Home;
