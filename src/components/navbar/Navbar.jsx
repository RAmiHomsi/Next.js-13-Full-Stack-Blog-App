"use client";
import Link from "next/link";
import React from "react";
import style from "./page.module.css";
import DarkMode from "../darkmode/DarkMode";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { status } = useSession();

  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blogs",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];
  return (
    <div className={style.container}>
      <Link href={"/"} className={style.logo}>
        BlogalicA
      </Link>
      <div className={style.links}>
        <DarkMode />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={style.link}>
            {link.title}
          </Link>
        ))}
        {status === "authenticated" && (
          <button className={style.logout} onClick={signOut}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
}
