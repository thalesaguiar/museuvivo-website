"use client";
import React, { useState } from "react";
import styles from "./NavBar.module.css";
import Image from "next/image";
import Logo from "../../../public/LOGOM.svg";
import MenuSvg from "../../../public/menu.svg";
import Link from "next/link";
import { useClickAway } from "react-use";
import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";

const route = [
  {
    title: "Inicio",
    href: "#",
    Icon: "IconBase",
  },
  {
    title: "Ingresso",
    href: "#",
    Icon: "IconBase",
  },
  {
    title: "Acervo",
    href: "#",
    Icon: "IconBase",
  },
  {
    title: "Sobre",
    href: "#",
    Icon: "IconBase",
  },
];

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <header>
      <div className={styles.container}>
        <div className={styles.svgContainer}>
          <Image src={Logo} alt="Logo do Museu" className={styles.logo} />
        </div>
        <div className={styles.desktopNav}>
          {route.map((route) => {
            const { Icon } = route;

            return (
              <p className={styles.navText} key={route.title}>
                <a href={route.href}>
                  <span>{route.title}</span>
                </a>
              </p>
            );
          })}
        </div>
        <div ref={ref} className={styles.customlist}>
          <Hamburger
            toggled={isOpen}
            size={20}
            onToggle={setOpen}
            color="#fff"
          />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className={styles.hambuerguerMenuWrapper}
          >
            <div
              style={{
                display: "flex",
                marginTop: "100px",
                width: "100%",
                backgroundColor: "red",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div>
                {route.map((route) => {
                  const { Icon } = route;

                  return (
                    <p
                      key={route.title}
                      style={{
                        color: "#fff",
                        fontSize: "2rem",
                      }}
                    >
                      <a
                        onClick={() => setOpen((prev) => !prev)}
                        href={route.href}
                      >
                        <span>{route.title}</span>
                        <Icon />
                      </a>
                    </p>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
