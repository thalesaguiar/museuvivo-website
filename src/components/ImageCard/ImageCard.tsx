"use client";
import Image from "next/image";
import CardImg1 from "../../../public/1.png";
import CardImg2 from "../../../public/2.png";
import CardImg3 from "../../../public/3.png";
import CardImg4 from "../../../public/4.png";
import CardImg5 from "../../../public/5.png";
import CardImg6 from "../../../public/6.png";
import CardImg1T from "../../../public/1 Tablet.png";
import CardImg2T from "../../../public/2 Tablet.png";
import CardImg3T from "../../../public/3 Tablet.png";
import CardImg4T from "../../../public/4 Tablet.png";
import CardImg5T from "../../../public/5 Tablet.png";
import CardImg6T from "../../../public/6 Tablet.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function ImageCard() {
  const scrollRef = useRef<HTMLDivElement>(null);

  function handleCarrouselScrollFoward() {
    scrollRef.current?.scrollBy({
      left: 550,
      behavior: "smooth",
    });
  }

  function handleCarrouselScrollBack() {
    scrollRef.current?.scrollBy({
      left: -550,
      behavior: "smooth",
    });
  }

  return (
    <div
      ref={scrollRef}
      className="flex w-full flex-row overflow-x-scroll no-scrollbar mb-20 mt-36 group max-md:pl-5"
    >
      <button
        className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full absolute w-20 h-20 mt-48 ml-10 flex right-16 items-center justify-center opacity-0 group-hover:opacity-100 max-lg:hidden"
        onClick={() => handleCarrouselScrollFoward()}
      >
        <FontAwesomeIcon
          icon={faArrowRight}
          style={{ width: 20, height: 20 }}
        />
      </button>
      <button
        className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full absolute w-20 h-20 mt-48 ml-10 flex right-0 left-0 items-center justify-center opacity-0 group-hover:opacity-100 max-lg:hidden"
        onClick={() => handleCarrouselScrollBack()}
      >
        <FontAwesomeIcon icon={faArrowLeft} style={{ width: 20, height: 20 }} />
      </button>
      <div className="flex-shrink-0 max-w-4xl mr-10 max-sm:w-96">
        <Link href={"/IndiosBotocudos"}>
          <Image
            alt="CardImage"
            src={CardImg1T}
            quality={70}
            style={{ objectFit: "cover" }}
          />
        </Link>
        <Link href={"/IndiosBotocudos"}>
          <h3 className="font-bold text-4xl mt-6 mb-2">Povos Originários</h3>
        </Link>
        <p className="text-2xl md:text-3xl">
          Os índigenas pejorativamente conhecidos como botocudos, viveram nas
          terras do vale do rio doçe e travaram uma guerra sangrenta, para
          defender a sua terra e cultura.
        </p>
      </div>
      <div className="flex-shrink-0 max-w-4xl mr-10 max-sm:w-96">
        <Image
          alt="CardImage"
          src={CardImg6T}
          quality={70}
          style={{ objectFit: "cover" }}
        />
        <h3 className="font-bold text-4xl mt-6 mb-2">Tropeiros</h3>
        <p className="text-2xl md:text-3xl">
          Os resposáveis pelo transporte de mercadorias e informações, fundaram
          muitas vilas que vieram a se tornas cidades na região do vale do Rio
          Doce e do Brasil.
        </p>
      </div>
      <div className="flex-shrink-0 max-w-4xl mr-10 max-sm:w-96">
        <Image
          alt="CardImage"
          src={CardImg2T}
          quality={70}
          style={{ objectFit: "cover" }}
        />
        <h3 className="font-bold text-4xl mt-6 mb-2">Carvoeiros</h3>
        <p className="text-2xl md:text-3xl">
          Com a chegada das grandes siderúrgicas em Minas Gerais, esses
          personagens esquecidos e anônimos sofreram para alimentar a demada de
          carvão vegetal.
        </p>
      </div>
      <div className="flex-shrink-0 max-w-4xl mr-10 max-sm:w-96">
        <Image
          alt="CardImage"
          src={CardImg3T}
          quality={70}
          style={{ objectFit: "cover" }}
        />
        <h3 className="font-bold text-4xl mt-6 mb-2">
          Estrada de Ferro
          <br /> Vitória Minas
        </h3>
        <p className="text-2xl md:text-3xl">
          Essa estrada trouxe muito progresso e desenvolvimento por onde passou,
          tudo graças aos trabalhadores que a construiram, mas que perderam suas
          vidas nesse processo para a malária e para as péssimas condições de
          trabalho.
        </p>
      </div>
      <div className="flex-shrink-0 max-w-4xl mr-10 max-sm:w-96">
        <Image
          alt="CardImage"
          src={CardImg4T}
          quality={70}
          style={{ objectFit: "cover" }}
        />
        <h3 className="font-bold text-4xl mt-6 mb-2">Vida Rural</h3>
        <p className="text-2xl md:text-3xl">
          Os pioneiros e construtores da cidade de ipatinga e região, muitos
          vieram com o sonho de crescer junto com o lugar, em busca de uma vida
          melhor, vieramd e várias partes de Minas Gerais e aqui construiram
          suas vidas!
        </p>
      </div>
      <div className="flex-shrink-0 max-w-4xl mr-20 max-sm:w-96">
        <Image
          alt="CardImage"
          src={CardImg5T}
          quality={70}
          style={{ objectFit: "cover" }}
        />
        <h3 className="font-bold text-4xl mt-6 mb-2">Forja</h3>
        <p className="text-2xl md:text-3xl md:pr-20">
          O ofício do fogo, um dos mais antigos ofícios da humanidade, se
          confunde com uma arte, onde o ferreiro molda o metal de acordo com a
          sua vontade, o fogo e a força é o meio pelo qual ele exerce a mesma.
        </p>
      </div>
    </div>
  );
}
