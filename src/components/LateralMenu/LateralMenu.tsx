"use client";
import React from "react";
import { Divider } from "../Divider/Divider";
const route = [
  {
    title: "Inicio",
    href: "/",
    Icon: "IconBase",
  },
  {
    title: "Ingresso",
    href: "#",
    Icon: "IconBase",
  },
  {
    title: "Acervo",
    href: "#",
    Icon: "IconBase",
  },
  {
    title: "Sobre",
    href: "Sobre",
    Icon: "IconBase",
  },
];

const show = true;

export function LateralMenu() {
  return show ? (
    <div className="flex justify-between fixed right-0 left-100 bottom-0 z-50 bg-neutral-900 w-2/5 max-sm:w-full h-full md:px-32 md:py-20">
      <div className="flex w-full h-full justify-center flex-col max-sm:p-10">
        <p
          className={`text-2xl font-semibold opacity-70 text-white ml-5 mt-20 `}
        >
          MENU
        </p>
        <Divider bgColor="white" />
        <a
          className={`text-8xl p-5 max-sm:text-6xl text-white font-sans font-medium hover:motion-safe:animate-pulse`}
          href="/"
        >
          Inicio
        </a>
        <a
          className={` text-8xl p-5 max-sm:text-6xl text-white font-sans font-medium hover:motion-safe:animate-pulse`}
          href="/"
        >
          Ingresso
        </a>
        <a
          className={` text-8xl p-5 max-sm:text-6xl text-white font-sans font-medium hover:motion-safe:animate-pulse`}
          href="/"
        >
          Acervo
        </a>
        <a
          className={`text-8xl p-5 max-sm:text-6xl text-white font-sans font-medium hover:motion-safe:animate-pulse`}
          href="/Sobre"
        >
          Sobre
        </a>
        <div className="flex w-full items-center justify-center mt-20 mb-10 sm:hidden">
          <div className={`w-11/12 h-0.5 rounded-xl opacity-20 bg-white`}></div>
        </div>
        <div className="flex maxsm:ml-10 max-md:ml-5">
          <p className="text-xl font-semibold opacity-70 text-white mt-20 mb-5">
            REDES SOCIAIS
          </p>
        </div>
        <div className="flex mt-2 max-sm:ml-5">
          <a
            className="text-2xl font-semibold text-white mr-8 hover:text-red-400 max-sm:text-xl"
            href="https://www.instagram.com/museuvivomg/"
            target="_blank"
          >
            Instagram
          </a>
          <a
            className="text-2xl font-semibold text-white mr-8 hover:text-indigo-600 max-sm:text-xl"
            href="https://pt-br.facebook.com/MuseuVivoMG/"
            target="_blank"
          >
            Facebook
          </a>
          <a
            className="text-2xl font-semibold text-white mr-8 hover:text-amber-500 max-sm:text-xl"
            href="https://www.linkedin.com/company/associa%C3%A7%C3%A3o-cultural-museu-vivo/about/"
            target="_blank"
          >
            Linkedin
          </a>
          <a
            className="text-2xl font-semibold text-white mr-8 hover:text-rose-600 max-sm:text-xl"
            href="https://www.youtube.com/@museuvivo5120"
            target="_blank"
          >
            Youtube
          </a>
        </div>
      </div>
    </div>
  ) : (
    <div className=" hidden" />
  );
}
