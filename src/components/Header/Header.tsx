"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import MuseumPic from "../../../public/museum1x.jpg";
import MuseumPic2 from "../../../public/museum2x.jpg";
import styles from "./Header.module.css";
import Button from "../Button";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.desktopContainer}>
        <Image
          src={MuseumPic}
          alt="Fachada do museu"
          fill
          style={{ objectFit: "cover" }}
          quality={80}
          priority
        />
      </div>
      <div className={styles.mobileContainer}>
        <Image
          src={MuseumPic2}
          alt="Fachada do museu"
          fill
          style={{ objectFit: "cover" }}
          quality={80}
          priority
        />
      </div>
      <div className={styles.textWrapper}>
        <p className={styles.letter}>ΓNΩθΙ ΣΕΑΥΤΟΝ</p>
      </div>
      <Button />
    </div>
  );
}
