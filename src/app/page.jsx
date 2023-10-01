import Image from "next/image";
import style from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={style.container}>
      <div className={style.item}>
        <h1 className={style.title}>Better design for your digital products</h1>
        <p className={style.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry
        </p>
        <Link href={"#"} className={style.button}>
          See more
        </Link>
      </div>
      <Image
        src={"/hero.png"}
        width={500}
        height={500}
        className={style.img}
      ></Image>
    </div>
  );
}
