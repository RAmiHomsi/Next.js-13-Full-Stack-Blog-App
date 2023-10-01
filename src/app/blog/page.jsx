import React from "react";
import style from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
    <div>
      <Link href={"/blog/id"} className={style.container}>
        <div className={style.imgContainer}>
          <Image
            src={""}
            width={400}
            height={250}
            className={style.image}
          ></Image>
        </div>
        <div className={style.content}>
          <h1 className={style.title}>test</h1>
          <p className={style.desc}>desc</p>
        </div>
      </Link>
      <Link href={"/blog/id"} className={style.container}>
        <div className={style.imgContainer}>
          <Image
            src={""}
            width={400}
            height={250}
            className={style.image}
          ></Image>
        </div>
        <div className={style.content}>
          <h1 className={style.title}>test</h1>
          <p className={style.desc}>desc</p>
        </div>
      </Link>
    </div>
  );
}
