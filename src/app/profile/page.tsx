"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const router = useRouter()
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successfull");
      router.push('/login')
    } catch (e: any) {
      console.log(e.message);
      toast.error(e.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p>Profile Page</p>
      <hr />
      <button onClick={logout} className="bg-blue-900 p-3 rounded-xl mt-4">
        Log out
      </button>
    </div>
  );
}
