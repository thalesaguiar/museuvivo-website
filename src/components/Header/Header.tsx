import React from "react";
import styles from "../Header/Header.module.css";
import Image from "next/image";
import Logo from "../../../public/logo.svg";
import MenuSvg from "../../../public/menu.svg";

export default function Header() {
  return (
    <div className={styles.container}>
      <Image src={Logo} alt="Logo do Museu" width={50} height={50} />
      <Image src={MenuSvg} alt="Menu icon" width={30} height={30} />
    </div>
  );
}
