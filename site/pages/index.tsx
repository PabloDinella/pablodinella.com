import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import clsx from "clsx";
import { useState } from "react";
import dayjs from "dayjs";

const Home: NextPage = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore((currentValue) => !currentValue);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Pablo Dinella</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-1 px-8 sm:px-20">
        <h1 className="text-5xl text-center my-12 sm:mt-24">Olá</h1>

        <p className="mt-3 text-2xl max-w-3xl w-full">
          Meu nome é <strong>Pablo</strong>.
        </p>

        <p className="mt-3 text-2xl max-w-3xl w-full">
          Lembra da era das páginas pessoais dos anos 2000? Hoje em dia alguns
          chamam de <span className="italic">digital garden</span>, mas prefiro
          chamar de página pessoal mesmo. E essa é a minha :)
        </p>

        <p className="my-3 text-2xl text-center" onClick={toggleShowMore}>
          <a
            className="papa-underline hover:cursor-pointer hover:text-hover"
            href="#"
          >
            mais sobre mim
          </a>
        </p>

        <div
          className={clsx(
            {
              hidden: !showMore,
            },
            "mb-14"
          )}
        >
          <h2 className="text-2xl mt-9 mb-3">Trabalho</h2>

          <p className={"mt-3 text-2xl max-w-3xl w-full"}>
            Hoje eu trabalho na Elven Works, com JS/TS, node, React, GraphQL,
            Kafka, e Go. Tinha um pouco de relutância em usar o termo engenheiro
            de software, até que inesperadamente{" "}
            <a
              className="papa-underline hover:cursor-pointer hover:text-hover"
              href="https://twitter.com/pablordinella/status/1491556434261196805"
              target="_blank"
              rel="noopener"
            >
              minha própria mãe usou esse termo
            </a>{" "}
            😆
          </p>

          <h2 className="text-2xl mt-9 mb-3">Entrementes...</h2>

          <p className={"mt-3 text-2xl max-w-3xl w-full"}>
            Às vezes produzo conteúdo no YouTube (quero voltar a fazer lives na
            Twitch também). Além disso estou gostando de ler alguns livros
            clássicos (no momento The Mythical Man-Month), e estudar outras
            linguagens (quero fazer um projeto em Clojure + Datahike (Prolog) ou
            alguma outra linguagem funcional + DataScript). Me encanta o fato da
            computação já ter sido em boa parte resolvida já nos anos 70-90, e
            hoje só readaptamos os mesmos conceitos.
          </p>

          <h2 className="text-2xl mt-9 mb-3">Jogos</h2>

          <p className={"mt-3 text-2xl max-w-3xl w-full"}>
            Também gosto de jogar CS:GO, TF2 e Sea of Thieves, e também faço
            lives e vídeos de vez em quando.
          </p>

          <h2 className="text-2xl mt-9 mb-3">Vida pessoal</h2>

          <p className={"mt-3 text-2xl max-w-3xl w-full"}>
            Tenho {dayjs().diff(dayjs("1994-07-14"), "years")} anos (faço
            aniversário no mesmo dia que minha mãe), sou casado com a
            @kaformentini, e temos um pinscher e um chihuahua misturado com
            pinscher.
          </p>

          <p className={"mt-3 text-2xl max-w-3xl w-full"}>Salvo por graça.</p>
        </div>

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

      <footer className="w-full ">
        <p className="marquee max-w-3xl">
          <span>Marquees são nostálgicos :)</span>
        </p>
      </footer>
    </div>
  );
};

export default Home;
