import Image from "next/image";
import MuseumPic from "../../../public/museumE.png";
import styles from "./ImagesSlider.module.css";
import FrontPic from "../../../public/museumE.jpg";
import Button from "../Button";

export default function ImagesSlider() {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image src={FrontPic} alt="Fachada do Museu Vivo" fill quality={75} />
      </div>
      <div className={styles.sectionWrapper}>
        <p
          style={{
            color: "#fff",
            fontSize: "3rem",
            textAlign: "center",
          }}
        >
          ΓNΩθΙ ΣΕΑΥΤΟΝ
        </p>
        <Button />
      </div>
    </div>
  );
}
