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
import style from "./ImageCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ImageCard() {
  return (
    <>
      <div
        className={
          "w-full relative flex overflow-hidden flex-nowrap gap-3 p-8 ml-10"
        }
      >
        <div>
          <Image
            alt="CardImage"
            src={CardImg1}
            quality={70}
            width={280}
            height={140}
          />
          <h3 className={style.expositionName}>Indíos Botocudos</h3>
        </div>
        <div>
          <Image
            alt="CardImage"
            src={CardImg6}
            quality={70}
            width={280}
            height={140}
          />
          <h3 className={style.expositionName}>Tropeiros</h3>
        </div>
        <div>
          <Image
            alt="CardImage"
            src={CardImg2}
            quality={70}
            width={280}
            height={140}
          />
          <h3 className={style.expositionName}>Carvoeiros</h3>
        </div>
        <div>
          <Image
            alt="CardImage"
            src={CardImg3}
            quality={70}
            width={280}
            height={140}
          />
          <h3 className={style.expositionName}>
            Estrada de Ferro Vitória Minas
          </h3>
        </div>
        <div>
          <Image
            alt="CardImage"
            src={CardImg4}
            quality={70}
            width={280}
            height={140}
          />
          <h3 className={style.expositionName}>
            Pioneiros e Primeiras Fazendas
          </h3>
        </div>
        <div>
          <Image
            alt="CardImage"
            src={CardImg5}
            quality={70}
            width={280}
            height={140}
          />
          <h3 className={style.expositionName}>Forja</h3>
        </div>
      </div>
      {/* Desktop */}

      {/* <div className={style.sliderTablet}>
        <div>
          <div className={style.Button}>
            <FontAwesomeIcon
              icon={faArrowRight}
              width={"15px"}
              className={style.icon}
            />
          </div>
          <Image
            alt="CardImage"
            src={CardImg1T}
            quality={70}
            width={600}
            height={337}
            style={{ cursor: "pointer" }}
          />
          <h3 className={style.expositionName}>Indíos Botocudos</h3>
        </div>
        <div>
          <Image
            alt="CardImage"
            src={CardImg6T}
            quality={70}
            width={600}
            height={337}
            style={{ cursor: "pointer" }}
          />
          <h3 className={style.expositionName}>Tropeiros</h3>
        </div>
        <div>
          <Image
            alt="CardImage"
            src={CardImg2T}
            quality={70}
            width={600}
            height={337}
            style={{ cursor: "pointer" }}
          />
          <h3 className={style.expositionName}>Carvoeiros</h3>
        </div>
        <div>
          <Image
            alt="CardImage"
            src={CardImg3T}
            quality={70}
            width={600}
            height={337}
            style={{ cursor: "pointer" }}
          />
          <h3 className={style.expositionName}>
            Estrada de Ferro Vitória Minas
          </h3>
        </div>
        <div>
          <Image
            alt="CardImage"
            src={CardImg4T}
            quality={70}
            width={600}
            height={337}
            style={{ cursor: "pointer" }}
          />
          <h3 className={style.expositionName}>
            Pioneiros e Primeiras Fazendas
          </h3>
        </div>
        <div>
          <Image
            alt="CardImage"
            src={CardImg5T}
            quality={70}
            width={600}
            height={337}
            style={{ cursor: "pointer" }}
          />
          <h3 className={style.expositionName}>Forja</h3>
        </div>
      </div> */}
    </>
  );
}
