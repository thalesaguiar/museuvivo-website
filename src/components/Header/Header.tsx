"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import MuseumPic from "../../../public/museum1x.jpg";
import MuseumPic2 from "../../../public/museum2x.jpg";
import styles from "./Header.module.css";
import Button from "../Button";
import Script from "next/script";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.desktopContainer}>
        <section className={styles.videoWrapper}>
          <iframe
            src="https://player.vimeo.com/video/915171477?speed=0&pip=0&loop=1&background=1&app_id=122963"
            className={styles.iframe}
          ></iframe>
        </section>
        <Script src="https://player.vimeo.com/api/player.js" async></Script>
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
