"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import MuseumPic from "../../../public/museum1x.jpg";
import MuseumPic2 from "../../../public/museum2x.jpg";
import styles from "./ImagesSlider.module.css";
import Button from "../Button";

export default function ImagesSliderMobile() {
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
        <span className={styles.letter}>Γ</span>
        <span className={styles.letter}>N</span>
        <span className={styles.letter}>Ω</span>
        <span className={styles.letter}>θ</span>
        <span className={styles.letter}>Ι</span>
        <span className={styles.letter}> </span>
        <span className={styles.letter}>Σ</span>
        <span className={styles.letter}>Ε</span>
        <span className={styles.letter}>Α</span>
        <span className={styles.letter}>Υ</span>
        <span className={styles.letter}>Τ</span>
        <span className={styles.letter}>Ο</span>
        <span className={styles.letter}>Ν</span>
      </div>
      <Button />
    </div>
  );
}
