import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import clsx from "clsx";
import { useState } from "react";
import dayjs from "dayjs";
import Link from "next/link";

const Home: NextPage = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore((currentValue) => !currentValue);
  
  // TODO: just a note to remember: I want to do something related to the day cycle, i.e.: when its morning, light theme, then going darker depending on day time.

  return (
    <div className="min-h-screen py-2 flex flex-col">
      <Head>
        <title>Pablo Dinella</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <header>
        <Link href="/">Início</Link>
        <Link href="/"></Link>
      </header> */}

      <main className="flex flex-col items-center">
        <article className="flex flex-col items-center justify-center  px-8 sm:px-20">
          <h1 className="text-5xl text-center my-12 sm:mt-24">Olá</h1>

          <p className="mt-3 text-2xl max-w-3xl w-full">
            Meu nome é <strong>Pablo</strong>.
          </p>

          <p className="mt-3 text-2xl max-w-3xl w-full">
            Lembra da era das páginas pessoais dos anos 2000? Hoje em dia alguns
            chamam de <span className="italic">digital garden</span>, mas
            prefiro chamar de página pessoal mesmo. E essa é a minha :)
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
              Kafka, e Go. Tinha um pouco de relutância em usar o termo
              engenheiro de software, até que inesperadamente{" "}
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
              Às vezes produzo conteúdo no YouTube (quero voltar a fazer lives
              na Twitch também). Além disso estou gostando de ler alguns livros
              clássicos (no momento The Mythical Man-Month), e estudar outras
              linguagens (quero fazer um projeto em Clojure + Datahike (Prolog)
              ou alguma outra linguagem funcional + DataScript). Me encanta o
              fato da computação já ter sido em boa parte resolvida já nos anos
              70-90, e hoje só readaptamos os mesmos conceitos.
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
        </article>

        <h2 className="mt-12 text-2xl font-bold max-w-screen-2xl w-full px-6">
          Produzo conteúdo de programação
        </h2>
        <div className="mt-6 px-6 sm:w-full max-w-screen-2xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <a
            href="https://www.youtube.com/PabloRDVideos"
            target="_blank"
            rel="noopener"
            className="rounded-xl border border-current p-6 text-left hover:text-black focus:text-black"
          >
            <h3 className="text-2xl font-bold">YouTube &rarr;</h3>
            <p className="mt-4 text-xl">
              Tento fazer vídeos compartilhando o que sei e aprendo com certa
              frequência
            </p>
          </a>

          <a
            href="https://www.twitch.tv/papadelta__"
            target="_blank"
            rel="noopener"
            className="rounded-xl border border-current p-6 text-left hover:text-black focus:text-black"
          >
            <h3 className="text-2xl font-bold">Twitch &rarr;</h3>
            <p className="mt-4 text-xl">
              De vez em nunca faço lives de programação
            </p>
          </a>

          <Link href="/artigos" passHref>
            <a className="rounded-xl border border-current border-dashed p-6 text-left text-neutral-400 hover:text-black focus:text-black">
              <h3 className="text-2xl font-bold  ">Artigos &rarr;</h3>
              <p className="mt-4 text-xl">
                Pretendo começar a escrever alguns artigos em breve
              </p>
            </a>
          </Link>
        </div>

        <h2 className="mt-12 text-2xl font-bold max-w-screen-2xl w-full px-6">
          Gosto de jogos
        </h2>
        <div className="mt-6 px-6 sm:w-full max-w-screen-2xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <a
            href="https://www.youtube.com/PabloRDVideos"
            target="_blank"
            rel="noopener"
            className="rounded-xl border border-current p-6 text-left hover:text-black focus:text-black"
          >
            <h3 className="text-2xl font-bold">YouTube &rarr;</h3>
            <p className="mt-4 text-xl">
              Tento fazer vídeos compartilhando o que sei e aprendo com certa
              frequência
            </p>
          </a>

          <a
            href="https://www.twitch.tv/papadelta__"
            target="_blank"
            rel="noopener"
            className="rounded-xl border border-current p-6 text-left hover:text-black focus:text-black"
          >
            <h3 className="text-2xl font-bold">Twitch &rarr;</h3>
            <p className="mt-4 text-xl">
              De vez em nunca faço lives de programação
            </p>
          </a>

          <Link href="/artigos" passHref>
            <a className="rounded-xl border border-current border-dashed p-6 text-left text-neutral-400 hover:text-black focus:text-black">
              <h3 className="text-2xl font-bold  ">Artigos &rarr;</h3>
              <p className="mt-4 text-xl">
                Pretendo começar a escrever alguns artigos em breve
              </p>
            </a>
          </Link>
        </div>
      </main>

      <footer className="w-full mt-auto ">
        <p className="marquee max-w-3xl">
          <span>Marquees são nostálgicos :)</span>
        </p>
      </footer>
    </div>
  );
};

export default Home;
