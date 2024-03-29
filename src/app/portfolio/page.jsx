import React from "react";
import style from "./page.module.css";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div>
      <h1 className={style.selectTitle}>Choose a gallery</h1>
      <div className={style.items}>
        <Link href="/portfolio/illustrations" className={style.item}>
          <span className={style.title}>Illustrations</span>
        </Link>
        <Link href="/portfolio/websites" className={style.item}>
          <span className={style.title}>Websites</span>
        </Link>
      </div>
    </div>
  );
}
