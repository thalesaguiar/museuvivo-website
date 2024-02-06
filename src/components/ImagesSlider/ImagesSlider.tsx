"use client";

import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import MuseumPic from "../../../public/museum1x.jpg";
import MuseumPic2 from "../../../public/museum2x.jpg";
import styles from "./ImagesSlider.module.css";
import Button from "../Button";

export default function ImagesSlider() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className={styles.container}>
      <picture>
        <source media="/museum1x.jpg" srcSet="/museum2x.jpg 800w" />

        <Image
          src={isMobile ? MuseumPic2 : MuseumPic}
          alt="Fachada do Museu Vivo"
          fill
          quality={75}
          style={{ objectFit: "cover", overflow: "hidden" }}
        />
      </picture>
      <div className={styles.sectionWrapper}>
        <p>ΓNΩθΙ ΣΕΑΥΤΟΝ</p>
      </div>
      <Button />
    </div>
  );
}
