"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditNoteForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`https://notes-git-main-jasrajs-projects.vercel.app/api/notes/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update note");
      }

      router.push("/");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className="p-4 border border-slate-400 bg-[#222] rounded-md"
        type="text"
        placeholder="Title"
      />

      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className="p-4 border border-slate-400 bg-[#222] rounded-md"
        type="text"
        placeholder="Description"
      />

      <button className="bg-slate-200 text-[#CE7979] py-2 px-4 rounded-md w-fit mt-6">
        Update Note
      </button>
    </form>
  );
}