"use client";
import React, { useContext } from "react";
import style from "./darkMode.module.css";
import { ThemeContext } from "@/context/ThemeContext";

export default function DarkMode() {
  let { toggle, mode } = useContext(ThemeContext);
  return (
    <div className={style.container} onClick={toggle}>
      <div className={style.icon}>🌙</div>
      <div className={style.icon}>🔆</div>
      <div
        className={style.ball}
        style={mode === "dark" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
}
