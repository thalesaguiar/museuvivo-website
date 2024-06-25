"use client";
import React, { useState } from "react";

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

export default function Menu() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className=" absolute top-0 right-0 mt-10 mr-10">
      <button
        onClick={() => console.log("Menu: Botão menu")}
        className="flex flex-row lg:hidden"
      >
        <div className="bg-white w-2 h-2 rounded-full mt-3 mr-5" />
        <p className="text-3xl text-white"> Menu</p>
      </button>
      <div className="flex-row hidden lg:flex">
        <a href="/Sobre" className="text-3xl text-white mr-16 cursor-pointer">
          Sobre
        </a>
        <a className="text-3xl text-white mr-16 cursor-pointer"> Ingresso</a>
        <a className="text-3xl text-white mr-10 cursor-pointer"> Contato</a>
      </div>
    </div>
  );
}
