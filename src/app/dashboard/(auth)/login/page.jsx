"use client";
import { useState } from "react";
import style from "./page.module.css";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      signIn("credentials", {
        email,
        password,
      });
    } catch (error) {
      throw error;
    }
  }

  return (
    <div className={style.container}>
      <h1 className={style.mainTitle}>Login to your Account</h1>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          className={style.input}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          className={style.input}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className={style.button}>Login</button>
      </form>
      <Link href="/dashboard/register">Register now</Link>
    </div>
  );
}
