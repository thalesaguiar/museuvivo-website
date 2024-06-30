"use client";
import Image from "next/image";
import IMG from "../../../public/museum1x.jpg";
import Img2 from "../../../public/IMG_20191116_155513-1024x592.jpg";
import Menu from "@/components/Menu/Menu";
import ImageCarrousel from "@/components/Carrousel/ImageCarrousel";
import Img1 from "../../../public/IMG_0900.png";
import Img2a from "../../../public/IMG_20201202_194644_391.jpg";
import Img3 from "../../../public/IMG_20201202_194846_355.jpg";
import Img5 from "../../../public/clock.png";
import Img6 from "../../../public/coins2.png";
import ImgAss1 from "../../../public/ass1.png";
import ImgAss2 from "../../../public/ass2.png";
import ImgAss3 from "../../../public/ass3.png";
import ImgAss4 from "../../../public/ass6.png";
import Img12 from "../../assets/IMG_3750.jpeg";
import Img13 from "../../assets/IMG_0440.jpeg";
import Doc1 from "../../assets/img1.jpeg";
import Doc2 from "../../assets/img2.jpg";
import Doc3 from "../../assets/img3.jpg";
import Doc4 from "../../assets/img4.jpg";
import Doc5 from "../../assets/img5.jpg";
import Doc6 from "../../assets/img6.jpg";
import Doc7 from "../../assets/img7.jpg";
import Doc8 from "../../assets/img8.jpg";
import Doc9 from "../../assets/img9.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { Divider } from "@/components/Divider/Divider";
import { DropDownMenu } from "@/components/Dropdown Menu/DropdownMenu";
import { FooterSection } from '@/components/Footer/Footer';

export default function About() {
  const scrollRefA = useRef<HTMLDivElement>(null);
  const scrollRefB = useRef<HTMLDivElement>(null);

  function handleCarrouselAScrollFoward() {
    scrollRefA.current?.scrollBy({
      left: 550,
      behavior: "smooth",
    });
  }

  function handleCarrouselAScrollBack() {
    scrollRefA.current?.scrollBy({
      left: -550,
      behavior: "smooth",
    });
  }

  function handleCarrouselBScrollFoward() {
    scrollRefB.current?.scrollBy({
      left: 550,
      behavior: "smooth",
    });
  }

  function handleCarrouselBScrollBack() {
    scrollRefB.current?.scrollBy({
      left: -550,
      behavior: "smooth",
    });
  }
  return (
    <div className="w-full">
      <DropDownMenu />
      <Menu />
      <section className="grid min-h-screen md:grid-cols-2">
        <div className="bg-#FFF7F0 flex flex-col justify-center items-center gap-2 max-md:hidden">
          <div className="mb-5">
            <h1 className="font-extrabold text-6xl tracking-tight text-center">
              Sobre o Museu Vivo
            </h1>
          </div>
          <div className="m-24">
            <p className="font-bold text-3xl tracking-wide text-center">
              O Museu Vivo preserva e resgata a história de Ipatinga e de todo
              Vale do Aço em Minas Gerais.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image src={IMG} alt="teste" className="w-full h-full object-cover" />
        </div>
        <div className="bg-#FFFFFF flex flex-col justify-center items-center gap-2 sm:hidden">
          <div className="mb-5">
            <h1 className="font-extrabold text-7xl tracking-tight text-center">
              o Museu Vivo
            </h1>
          </div>
          <div className="m-4">
            <p className="font-bold text-2xl tracking-wide text-center">
              O Museu Vivo preserva e resgata a história de Ipatinga e de todo
              Vale do Aço em Minas Gerais.
            </p>
          </div>
        </div>
      </section>
      <section className="flex w-full bg-white">
        <div className="p-10 sm:m-36">
          <h2 className="text-5xl font-bold">Sobre o Museu</h2>
          <p className="max-sm:text-2xl max-md:text-3xl max-lg:text-4xl lg:text-3xl  tracking-wide leading-relaxed text-start p-10">
            O Museu Vivo guarda e preserva riquezas que conta a história de
            personagens anônimos das cidades do Vale do Aço e do Brasil. O
            projeto começou na década de 1980, com o objetivo de um dia fundar
            um museu. Ao Chegar na região do Vale do Aço o colecionador se
            deparou com uma ideia de que a região não possuía história então ele
            decidiu buscar com os pioneiros e descobriu que a história da região
            era muito mais rica que se imaginava, desde então o Museu Vivo já
            reuniu mais de 10 mil peças referentes a história do Brasil e
            principalmente a história local. <br />
            <br />O Museu Vivo é um museu com espaço de exposições cíclico,
            temos o compromisso com o resgate cultural e histórico, acreditamos
            que preservar o passado e usa-lo no presente como ferramenta
            cultural e educacional é o principal passo na construção do futuro.
          </p>
        </div>
      </section>
      <Divider bgColor="black" />
      <div className="grid md:grid-cols-2 gap-11 max-md:36 p-10 mb-24">
        <div>
          <h2 className="text-5xl font-bold ml-10">O início</h2>
          <p className="max-sm:text-2xl max-md:text-3xl max-lg:text-4xl lg:text-3xl  tracking-wide leading-relaxed text-start p-10">
            O projeto começou na década de 1980, com o colecionador Jeová
            Aguiar, baiano que escolheu as terras mineiras para morar. Ao Chegar
            na região do Vale do Aço o colecionador se deparou com uma ideia de
            que a região não possuía história então ele decidiu buscar com os
            pioneiros e descobriu que a história da região era muito mais rica
            que se imaginava. <br /> <br /> Então a partir dai ele se dedicou ao
            sonho de um dia fundar um museu que não só exibisse as peças mas que
            fosse como um ponto de encontro das gerações atuais e futuras com a
            história e cultura do passado, através do acervo e das atividades
            desenvolvidas nesse local.
          </p>
        </div>
        <Image src={Img2} alt="fig" />
      </div>
      <Divider bgColor="black" />
      <div className="flex flex-col max-mdm:36 p-10">
        <h2 className="text-5xl font-bold ml-10">O Acervo</h2>
        <p className="max-sm:text-2xl max-md:text-3xl max-lg:text-4xl lg:text-3xl  tracking-wide leading-relaxed text-start p-10">
          Descubra a história viva do Vale do Aço no Museu Metropolitano. Nosso
          acervo abrange uma ampla gama de temas, desde a rica cultura dos
          indígenas Botocudos até os caminhos percorridos pelos tropeiros.
          Explore as antigas trilhas da ferrovia, mergulhe na magia do cinema e
          da fotografia, e descubra os segredos guardados pela numismática e
          pelos selos. Viaje no tempo através dos ofícios do passado e conheça o
          coração pulsante do Brasil rural. Experimente a evolução da telefonia
          e encante-se com as histórias dos nossos ancestrais. No Museu Vivo,
          cada exposição é uma porta aberta para o passado, uma janela para o
          presente e um convite para o futuro. Junte-se a nós nesta jornada pela
          rica herança cultural do Vale do Aço.
        </p>
      </div>
      <div
        className="flex w-full overflow-x-scroll no-scrollbar mb-20 group"
        ref={scrollRefA}
      >
        <button
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full absolute w-20 h-20 mt-80 ml-10 flex right-16 items-center justify-center opacity-0 group-hover:opacity-100 max-lg:hidden"
          onClick={() => handleCarrouselAScrollFoward()}
        >
          <FontAwesomeIcon
            icon={faArrowRight}
            style={{ width: 20, height: 20 }}
          />
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full absolute w-20 h-20 mt-80 ml-10 flex right-0 left-0 items-center justify-center opacity-0 group-hover:opacity-100 max-lg:hidden"
          onClick={() => handleCarrouselAScrollBack()}
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            style={{ width: 20, height: 20 }}
          />
        </button>
        <div className="flex">
          <ImageCarrousel
            ImageFile={Img1}
            Title="Sinaleiro"
            Description="Amplamente utilizado na Estrada de Ferro Vitória Minas, para sinalização férrea"
          />
          <ImageCarrousel
            Description="Utilizado no transporte de mercadorias, produção agrícola e pessoas,
            fundamental para atravessar nas picadas e trilhas no meio do mato."
            Title="Carro de Bois"
            ImageFile={Img2a}
          />
          <ImageCarrousel
            Description="Peça fundamental usada pelos tropeiros para o transporte de
            mercadorias e pedras preciosar nas trilhas do Brasil, sempre marcada
            com as inscrições do nome do dono da tropa."
            Title="Canastras"
            ImageFile={Img3}
          />
          <ImageCarrousel
            Description="Relógio 8 utilizado na estação pedra mole nos anos de 1922 até os anos
          30."
            Title="Relógio 8"
            ImageFile={Img5}
          />
          <ImageCarrousel
            Description="Moedas de diferentes períodos da história do Brasil"
            Title="Moedas"
            ImageFile={Img6}
          />
        </div>
      </div>
      <Divider bgColor="black" />

      <h2 className="text-5xl font-bold pl-10 mb-32">
        A Associação Cultural
        <br /> Museu Vivo
      </h2>
      <div
        className="flex w-full overflow-x-scroll no-scrollbar mb-5 group"
        ref={scrollRefB}
      >
        <div className="flex mb-32">
          <button
            className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full absolute w-20 h-20 mt-80 ml-10 flex right-16 items-center justify-center opacity-0 group-hover:opacity-100 max-lg:hidden"
            onClick={() => handleCarrouselBScrollFoward()}
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{ width: 20, height: 20 }}
            />
          </button>
          <button
            className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full absolute w-20 h-20 mt-80 ml-10 flex right-0 left-0 items-center justify-center opacity-0 group-hover:opacity-100 max-lg:hidden"
            onClick={() => handleCarrouselBScrollBack()}
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              style={{ width: 20, height: 20 }}
            />
          </button>
          <ImageCarrousel ImageFile={ImgAss1} />
          <ImageCarrousel ImageFile={ImgAss2} />
          <ImageCarrousel ImageFile={ImgAss3} />
          <ImageCarrousel ImageFile={ImgAss4} />
        </div>
      </div>
      <div className=" lg:grid-cols-2 grid min-h-screen mt-16 p-12">
        <p className="max-sm:text-2xl max-md:text-3xl max-lg:text-4xl lg:text-3xl  tracking-wide leading-relaxed text-start p-10">
          A Associação Cultural Museu Vivo é um ponto de cultura proeminente na
          cidade de Ipatinga e região. Realizamos uma variedade de eventos
          culturais, incluindo o popular Café com Rapadura, um encontro mensal
          gratuito geralmente realizado no último domingo do mês. Este evento é
          uma celebração vibrante da cultura local, apresentando uma série de
          atrações, como degustação de café adoçado com rapadura, entoação do
          hino de Ipatinga, homenagens aos pioneiros da região, além de
          performances musicais e danças tradicionais. Junte-se a nós para uma
          experiência enriquecedora que celebra a rica herança cultural de nossa
          comunidade.
        </p>
        <Image src={Img12} alt="te" className="rounded-lg" />
      </div>
      <div className=" lg:grid-cols-2 grid min-h-screen mt-16 p-12">
        <Image src={Img13} alt="te" className="rounded-lg" quality={40} />
        <p className="max-sm:text-2xl max-md:text-3xl max-lg:text-4xl lg:text-3xl  tracking-wide leading-relaxed text-start p-10">
          A Associação Cultural Museu Vivo é um ponto de cultura proeminente na
          cidade de Ipatinga e região. Realizamos uma variedade de eventos
          culturais, incluindo o popular Café com Rapadura, um encontro mensal
          gratuito geralmente realizado no último domingo do mês. Este evento é
          uma celebração vibrante da cultura local, apresentando uma série de
          atrações, como degustação de café adoçado com rapadura, entoação do
          hino de Ipatinga, homenagens aos pioneiros da região, além de
          performances musicais e danças tradicionais. Junte-se a nós para uma
          experiência enriquecedora que celebra a rica herança cultural de nossa
          comunidade.
        </p>
      </div>
      <Divider bgColor="black" />
      <div>
        <h2 className="text-5xl font-bold pl-10 mb-32 text-center">
          <br /> Museu Vivo nos jornais
        </h2>
        <div className=" w-full grid grid-cols-3 max-md:grid-cols-1 items-center justify-center p-10">
          <Image
            src={Doc1}
            alt="teste"
            className="rounded-md p-5"
            quality={40}
          />
          <Image
            src={Doc2}
            alt="teste"
            className="rounded-md p-5"
            quality={40}
          />
          <Image
            src={Doc3}
            alt="teste"
            className="rounded-md p-5"
            quality={40}
          />
          <Image
            src={Doc4}
            alt="teste"
            className="rounded-md p-5"
            quality={40}
          />
          <Image
            src={Doc5}
            alt="teste"
            className="rounded-md p-5"
            quality={40}
          />
          <Image
            src={Doc6}
            alt="teste"
            className="rounded-md p-5"
            quality={40}
          />
          <Image
            src={Doc7}
            alt="teste"
            className="rounded-md p-5"
            quality={40}
          />
          <Image
            src={Doc8}
            alt="teste"
            className="rounded-md p-5"
            quality={40}
          />
          <Image
            src={Doc9}
            alt="teste"
            className="rounded-md p-5"
            quality={40}
          />
        </div>
      </div>
      <FooterSection/>
    </div>
  );
}