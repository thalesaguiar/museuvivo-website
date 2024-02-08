import Image from "next/image";
import CardImg1 from "../../../public/1.png";
import CardImg2 from "../../../public/2.png";
import CardImg3 from "../../../public/3.png";
import CardImg4 from "../../../public/4.png";

import style from "./ImageCard.module.css";
export default function ImageCard() {
  return (
    <div className={style.slider}>
      <Image
        alt="CardImage"
        src={CardImg1}
        quality={80}
        width={280}
        height={140}
      />
      <Image
        alt="CardImage"
        src={CardImg2}
        quality={80}
        width={280}
        height={140}
      />
      <Image
        alt="CardImage"
        src={CardImg3}
        quality={80}
        width={280}
        height={140}
      />
      <Image
        alt="CardImage"
        src={CardImg4}
        quality={80}
        width={280}
        height={140}
      />
    </div>
  );
}
