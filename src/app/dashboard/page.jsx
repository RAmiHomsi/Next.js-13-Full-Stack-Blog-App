"use client";
import { useState } from "react";
import style from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Dashboard() {
  const [title, setTitle] = useState("");
  const [desc, setdesc] = useState("");
  const [img, setImg] = useState("");
  const [content, setContent] = useState("");

  const session = useSession();
  const router = useRouter();

  //NEW WAY TO FETCH DATA
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  if (session.status === "authenticated") {
    return (
      <div className={style.container}>
        <div className={style.posts}>
          {isLoading
            ? "loading"
            : data?.map((post) => (
                <div className={style.post} key={post._id}>
                  <div className={style.imgContainer}>
                    <Image src={post.img} alt="" width={200} height={100} />
                  </div>
                  <h2 className={style.postTitle}>{post.title}</h2>
                  <span
                    className={style.delete}
                    onClick={() => handleDelete(post._id)}
                  >
                    X
                  </span>
                </div>
              ))}
        </div>
        <form className={style.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input
            type="text"
            placeholder="Title"
            className={style.input}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Desc"
            className={style.input}
            onChange={(e) => setdesc(e.target.value)}
          />
          <input
            type="text"
            placeholder="Image"
            className={style.input}
            onChange={(e) => setImg(e.target.value)}
          />
          <textarea
            placeholder="Content"
            className={style.textArea}
            onChange={(e) => setContent(e.target.value)}
            cols="30"
            rows="10"
          ></textarea>
          <button className={style.button}>Send</button>
        </form>
      </div>
    );
  }
}
