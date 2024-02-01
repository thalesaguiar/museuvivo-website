import React, { useState } from "react";
import styles from "./NavBar.module.css";
import Image from "next/image";
import Logo from "../../../public/LOGOM.svg";
import MenuSvg from "../../../public/menu.svg";
import Link from "next/link";
import NavMobile from "../HamburgerMenu/Hamburguer";

export default function Header() {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.svgContainer}>
          <Image src={Logo} alt="Logo do Museu" className={styles.logo} />
        </div>
        <div>
          <NavMobile />
        </div>
      </div>
    </header>
  );
}
