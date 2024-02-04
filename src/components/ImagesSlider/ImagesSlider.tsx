import Image from "next/image";
import MuseumPic from "../../../public/museumE.png";
import styles from "./ImagesSlider.module.css";
import FrontPic from "../../../public/museumE.jpg";
import Button from "../Button";

export default function ImagesSlider() {
  return (
    <div className={styles.container}>
      <div
        style={{
          display: "flex",
          position: "absolute",
          flexDirection: "column",
          backgroundColor: "#202020",
          width: "100%",
          height: "100%",
        }}
      />
      <div
        style={{
          display: "flex",
          backgroundColor: "#0505059b",
          position: "absolute",
          opacity: 0.1,
        }}
      ></div>
      <Image
        src={FrontPic}
        alt="Fachada do Museu Vivo"
        fill
        style={{ objectFit: "cover", opacity: 0.6 }}
        quality={75}
      />
      <p
        style={{
          color: "#fff",
          fontSize: "3rem",
          position: "absolute",
          zIndex: 2,
          textAlign: "center",
          marginBottom: "5rem",
        }}
      >
        ΓNΩθΙ ΣΕΑΥΤΟΝ
      </p>
      <Button />
    </div>
  );
}
