"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { LateralMenu } from "../LateralMenu/LateralMenu";
export function DropDownMenu() {
  const [showComponent, setShowComponent] = useState(false);
  const [showLateralMenu, setShowLateralMenu] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const threshold = 150;
    setShowComponent(scrollPosition > threshold);
  };
  const handleShowMenu = () => {
    setShowLateralMenu(!showLateralMenu);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`${showComponent ? "" : "hidden"}`}>
      <div className={`${showLateralMenu ? "" : "hidden"}`}>
        <LateralMenu />
      </div>
      <div className="flex fixed w-36 h-36 max-sm:w-28 max-sm:h-28 bg-slate-800 top-10 left-100 right-10 bottom-0 rounded-full justify-center items-center z-50 mt-2">
        <button
          onClick={() => {
            handleShowMenu();
          }}
        >
          <FontAwesomeIcon
            icon={showLateralMenu ? faTimes : faBars}
            color="#fff"
            style={{ width: 20, height: 20 }}
          />
        </button>
      </div>
    </div>
  );
}
