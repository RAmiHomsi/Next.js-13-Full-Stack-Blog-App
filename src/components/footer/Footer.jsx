import React from "react";
import style from "./page.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={style.container}>
      <div>©2023 RAmi. All rights reserved.</div>
      <div className={style.social}>
        <Image src="/1.png" width={15} height={15} />
        <Image src="/2.png" width={15} height={15} />
        <Image src="/3.png" width={15} height={15} />
        <Image src="/4.png" width={15} height={15} />
      </div>
    </div>
  );
}
