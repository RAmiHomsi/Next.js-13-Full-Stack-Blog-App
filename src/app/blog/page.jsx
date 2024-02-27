import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

//Prerender Error Fix
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

//http://localhost:3000
const getData = async () => {
  const res = await fetch(
    "https://next-js-13-full-stack-blog-app.vercel.app/api/posts"
  );
  const posts = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return posts;
};

const Blog = async () => {
  const data = await getData();
  if (!data) return notFound();
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link
          href={`/blog/${item._id}`}
          className={styles.container}
          key={item.id}
        >
          <div className={styles.imageContainer}>
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
