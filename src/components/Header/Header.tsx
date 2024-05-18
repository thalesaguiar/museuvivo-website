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
    <div className="flex justify-center items-center relative overflow-hidden w-ful h-screen bg-black">
      <div className="absolute top-0 bottom-0 right-0 left-0 flex opacity-45 z-10 select:none h-screen w-full justify-center">
        <iframe
          src="https://player.vimeo.com/video/918506913?speed=0&pip=0&loop=1&background=1&app_id=122963"
          allowFullScreen
          className="w-full h-full"
        />
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
      <div className="absolute mb-20 cursor-pointer animate-pulse z-50 select-none">
        <p className="text-6xl text-amber-500 z-20 hover:text-amber-600">
          ΓNΩθΙ ΣΕΑΥΤΟΝ
        </p>
      </div>
      <Button />
    </div>
  );
}
