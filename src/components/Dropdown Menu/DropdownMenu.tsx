"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
export function DropDownMenu() {
  const [showComponent, setShowComponent] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const threshold = 150;
    setShowComponent(scrollPosition > threshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`flex fixed w-36 h-36 bg-indigo-900 top-10 left-100 right-10 bottom-0 rounded-full justify-center items-center ${
        showComponent ? "" : "hidden"
      }`}
    >
      <FontAwesomeIcon
        icon={faBars}
        color="#fff"
        style={{ width: 20, height: 20 }}
      />
    </div>
  );
}
