import Image from "next/image";
import MuseumPic from "../../../public/museumE.png";
import styles from "./ImagesSlider.module.css";
import { Inter } from "next/font/google";
import FrontPic from "../../../public/museumE.jpg";
export default function ImagesSlider() {
  return (
    <div className={styles.container}>
      <div
        style={{
          display: "flex",
          backgroundColor: "#202020",
          width: "100%",
          height: "100%",
        }}
      />
      <Image
        src={FrontPic}
        alt="Fachada do Museu Vivo"
        fill
        style={{ objectFit: "cover" }}
        quality={75}
      />

      <h2
        style={{
          color: "#fff",
          fontSize: "4rem",
          position: "absolute",
          zIndex: 2,
          textAlign: "center",
          fontFamily: "Inter",
        }}
      >
        Bem Vindo ao Museu Vivo
      </h2>
    </div>
  );
}
