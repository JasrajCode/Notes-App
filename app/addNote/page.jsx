"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddNote() {
  const [ title, setTitle ] = useState("");
  const [ description, setDescription ] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(!title || !description) {
      alert("Title and description are required.");
      return;
    }

    try {
      const res = await fetch("https://notes-app-rho-rose.vercel.app/api/notes", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a note")
      }
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="p-4 border border-slate-400 bg-[#222] rounded-md"
        type="text"
        placeholder="Title Test"
      />

      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="p-4 border border-slate-400 bg-[#222] rounded-md"
        type="text"
        placeholder="Description"
      />
      {/* "bg-green-600 font-bold text-white py-3 px-6 w-fit" */}
      <button type="submit" className="bg-slate-200 text-[#CE7979] py-2 px-4 rounded-md w-fit mt-6">
        Add Note
      </button>
    </form>
  )
}