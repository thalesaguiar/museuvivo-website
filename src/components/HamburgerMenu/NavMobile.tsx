"use client";
import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { IconBase } from "react-icons";
import styles from "./NavMobile.module.css";

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
    title: "Sobre",
    href: "#",
    Icon: "IconBase",
  },
];

export default function NavMobile() {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className={styles.customlist}>
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} color="#fff" />
      {isOpen && (
        <div>
          <ul>
            {route.map((route) => {
              const { Icon } = route;

              return (
                <li key={route.title}>
                  <a onClick={() => setOpen((prev) => !prev)} href={route.href}>
                    <span>{route.title}</span>
                    <Icon />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
