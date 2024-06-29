"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../../public/lgmv.png";
import { DropDownMenu } from "../Dropdown Menu/DropdownMenu";

const route = [
  {
    title: "Inicio",
    href: "/",
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
    <div className="absolute top-0 right-0 mt-10 flex w-full justify-between p-4">
      <DropDownMenu />
      <div className="flex md:hidden">
        <div className="bg-white w-2 h-2 rounded-full mt-3 mr-5" />
        <p className="text-3xl text-white">Menu</p>
      </div>
      <div className="flex max-md:hidden">
        <Image alt="Logo" src={Logo} width={180} className="ml-12" />
      </div>
      <div className="flex-row hidden md:flex">
        <a
          href="/"
          className="text-3xl max-lg:text-2xl text-white md:mr-12 cursor-pointer"
        >
          Inicio
        </a>
        <a
          href="/Sobre"
          className="text-3xl max-lg:text-2xl text-white md:mr-12 cursor-pointer"
        >
          Sobre
        </a>
        <a
          href="/"
          className="text-3xl max-lg:text-2xl text-white md:mr-12 cursor-pointer"
        >
          Contato
        </a>
      </div>
    </div>
  );
}
