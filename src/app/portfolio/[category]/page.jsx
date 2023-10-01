import React from "react";
import style from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Category({ params }) {
  return (
    <div>
      <h1 className={style.catTitle}>{params.category}</h1>
      <div className={style.item}>
        <div className={style.content}>
          <h1 className={style.title}>test</h1>
          <p className={style.desc}>desc</p>
          <Link href={""} className={style.button}>
            See more
          </Link>
        </div>
        <div className={style.imgContainer}>
          <Image fill={true} src={""} className={style.img}></Image>
        </div>
      </div>
      <div className={style.item}>
        <div className={style.content}>
          <h1 className={style.title}>test</h1>
          <p className={style.desc}>desc</p>
          <Link href={""} className={style.button}>
            See more
          </Link>
        </div>
        <div className={style.imgContainer}>
          <Image fill={true} src={""} className={style.img}></Image>
        </div>
      </div>
    </div>
  );
}
