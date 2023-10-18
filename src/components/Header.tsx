import React from "react";
import styles from "../styles/components/Header.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="/logo2.png" className={styles.logo} />
      </div>
      <span className={styles.navMenu}>
        <a>Visite</a>
        <a>Apoie</a>
        <a>Sobre</a>
      </span>
    </div>
  );
}
