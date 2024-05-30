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
    <div className=" flex fixed right-0 left-100 bottom-0 z-50 bg-neutral-900 w-1/3 h-full">
      <div className="flex w-full h-full justify-center flex-col p-20">
        <p className="text-2xl font-semibold opacity-70 text-white ml-5">
          Menu
        </p>
        <Divider bgColor="white" />
        <a
          className="text-8xl p-5 text-white font-sans hover:motion-safe:animate-pulse"
          href="/"
        >
          Início
        </a>
        <a className="text-8xl p-5 text-white font-sans">Ingresso</a>
        <a
          className="text-8xl p-5 text-white font-sans hover:motion-safe:animate-pulse"
          href="/Sobre"
        >
          Acervo
        </a>
        <p className="text-8xl p-5 text-white font-sans">Sobre</p>
        <div className="flex ml-16 mt-20">
          <p className="text-2xl font-semibold opacity-70 text-white">
            Redes Sociais
          </p>
        </div>
        <div className="flex items-center justify-evenly mt-5">
          <a className="text-xl font-semibold text-white">Instagram</a>
          <a className="text-xl font-semibold text-white">Facebook</a>
          <a className="text-xl font-semibold text-white">Linkedin</a>
          <a className="text-xl font-semibold text-white">Youtube</a>
        </div>
      </div>
    </div>
  ) : (
    <div className=" hidden" />
  );
}
