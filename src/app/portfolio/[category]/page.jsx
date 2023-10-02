import React from "react";
import style from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { items } from "./data";
import { notFound } from "next/navigation";

export default function Category({ params }) {
  const getData = (cat) => {
    const data = items[cat];
    if (data) {
      return data;
    }
    return notFound();
  };

  const data = getData(params.category);
  return (
    <div>
      <h1 className={style.catTitle}>{params.category}</h1>
      {data.map((item) => (
        <div className={style.item} key={item.id}>
          <div className={style.content}>
            <h1 className={style.title}>{item.title}</h1>
            <p className={style.desc}>{item.desc}</p>
            <Link href={""} className={style.button}>
              See more
            </Link>
          </div>
          <div className={style.imgContainer}>
            <Image fill={true} src={item.image} className={style.img}></Image>
          </div>
        </div>
      ))}
    </div>
  );
}
