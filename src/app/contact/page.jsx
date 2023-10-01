import React from "react";
import style from "./page.module.css";
import Image from "next/image";

export default function Contact() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Lets keep in touch</h1>
      <div className={style.content}>
        <div className={style.imgContainer}>
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={style.image}
          />
        </div>
        <form className={style.form}>
          <input type="text" placeholder="name" className={style.input} />
          <input type="email" placeholder="email" className={style.input} />
          <textarea
            placeholder="message"
            className={style.textArea}
            cols="30"
            rows="10"
          ></textarea>
          <button className={style.button}>Send</button>
        </form>
      </div>
    </div>
  );
}
