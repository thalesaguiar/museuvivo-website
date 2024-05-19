"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import MuseumPic from "../../../public/museum1x.jpg";
import MuseumPic2 from "../../../public/museum2x.jpg";
import styles from "./Header.module.css";
import Script from "next/script";

export default function Header() {
  return (
    <div className={styles.container}>
      <div
        style={{
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          display: "flex",
          position: "relative",
          opacity: 0.4,
          height: "100vw",
        }}
      >
        <div className={styles.desktopContainer}>
          <section className={styles.videoWrapper}>
            <iframe
              src="https://player.vimeo.com/video/918506913?speed=0&pip=0&loop=1&background=1&app_id=122963"
              className={styles.iframe}
              frameBorder={0}
            ></iframe>
          </section>
          <Script src="https://player.vimeo.com/api/player.js" async></Script>
        </div>
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
      <div className="absolute z-50">
        <p className="relative z-10 text-6xl text-amber-400 opacity-90">
          ΓNΩθΙ ΣΕΑΥΤΟΝ
        </p>
      </div>
    </div>
  );
}
