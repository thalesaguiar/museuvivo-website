import Image from "next/image";
import IMG from "../../../public/carvoeirocarrousel.png";
import Img2 from "../../../public/IMG_20191116_155513-1024x592.jpg";
export default function About() {
  return (
    <div>
      <section className="grid min-h-screen md:grid-cols-2">
        <div className="bg-amber-50 flex flex-col justify-center items-center gap-2">
          <div className="mb-5">
            <h1 className="font-extrabold text-6xl tracking-tight">
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
      </section>
      <section className="flex w-full bg-white">
        <div className="pt-8 m-36">
          <p className="text-4xl tracking-wide leading-relaxed">
            O Museu Vivo guarda e preserva riquezas que conta a história de
            personagens anônimos das cidades do Vale do Aço e do Brasil. O
            projeto começou na década de 1980, com o objetivo de um dia fundar
            um museu. Ao Chegar na região do Vale do Aço o colecionador se
            deparou com uma ideia de que a região não possuía história então ele
            decidiu buscar com os pioneiros e descobriu que a história da região
            era muito mais rica que se imaginava, desde então o Museu Vivo já
            reuniu mais de 10 mil peças referentes a história do Brasil e
            principalmente a história local. O Museu Vivo é um museu com espaço
            de exposições cíclico, temos o compromisso com o resgate cultural e
            histórico, acreditamos que preservar o passado e usa-lo no presente
            como ferramenta cultural e educacional é o principal passo na
            construção do futuro.
          </p>
        </div>
      </section>

      <div className="grid min-h-screen md:grid-cols-2 gap-11 m-36">
        <div>
          <h2 className="text-5xl font-extrabold">O início</h2>
          <p className="text-4xl tracking-wide leading-relaxed mt-8">
            O projeto começou na década de 1980, com o colecionador Jeová
            Aguiar, baiano que escolheu as terras mineiras para morar. Ao Chegar
            na região do Vale do Aço o colecionador se deparou com uma ideia de
            que a região não possuía história então ele decidiu buscar com os
            pioneiros e descobriu que a história da região era muito mais rica
            que se imaginava. então a partir dai ele se dedicou ao sonho de um
            dia fundar um museu que não só exibisse as peças mas que fosse como
            um ponto de encontro das gerações atuais e futuras com a história e
            cultura do passado, através do acervo e das atividades desenvolvidas
            nesse local.
          </p>
        </div>
        <Image src={Img2} alt="fig" />
      </div>
      <div className="flex flex-col min-h-screen m-36">
        <h2 className="text-5xl font-extrabold">O Acervo</h2>
        <p className="text-4xl tracking-wide mt-8 leading-relaxed">
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
    </div>
  );
}
