"use client";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { status, session } = useSession();
  const router = useRouter();

  //NEW WAY TO FETCH DATA
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  if (status === "authenticated") {
    return <div className={style.container}>Dashboard</div>;
  }
}
