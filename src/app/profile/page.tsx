"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import React from "react";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = React.useState("");
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successfull");
      router.push("/login");
    } catch (e: any) {
      console.log(e.message);
      toast.error(e.message);
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res.data);
    setData(res.data.data._id);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p>Profile Page</p>
      <h2>{data === "" ? "Nothing" : <Link href={`/profile/${data}`}>{data}</Link>}</h2>
      <hr />
      <button onClick={getUserDetails} className="bg-green-900 p-3 rounded-xl mt-4">
        Get Details
      </button>
      <button onClick={logout} className="bg-blue-900 p-3 rounded-xl mt-4">
        Log out
      </button>
    </div>
  );
}
