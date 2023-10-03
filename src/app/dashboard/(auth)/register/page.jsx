"use client";
import { useState } from "react";
import style from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      response.status === 201 && router.push("/dashboard/login");
    } catch (error) {
      throw error;
    }
  }

  return (
    <div className={style.container}>
      <h1 className={style.mainTitle}>Create an Account</h1>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your username"
          className={style.input}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        <button className={style.button}>Register</button>
      </form>
      <Link href="/dashboard/login">Login with an existing account</Link>
    </div>
  );
}
