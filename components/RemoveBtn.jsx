"use client"

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function RemoveBtn({ id }) {
  const router = useRouter();
  const removeNote = async() => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`https://notes-app-rho-rose.vercel.app/api/notes?id=${id}`, {
        method: "DELETE",
      });
      
      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button onClick={removeNote} className="text-slate-300">
      <HiOutlineTrash size={24} />
    </button>
  )
}