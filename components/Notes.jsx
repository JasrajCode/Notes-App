import Link from "next/link"
import RemoveBtn from "./RemoveBtn"
import { HiPencilAlt } from "react-icons/hi"

const getNotes = async() => {
  try {
    const res = await fetch('https://notes-git-main-jasrajs-projects.vercel.app/api/notes', {
    cache: "no-store",
    });

    if(!res.ok) {
      throw new Error('Failed to fetch notes');
    }

    return res.json();
  } catch (error) {
    console.log("Error loading notes: ", error)
  }
}

export default async function Notes() {
  const { notes } = await getNotes();

  return (
    <>
    {notes.map(t => (
      <div key={t._id} className="hover:bg-slate-300 hover:bg-opacity-15 transition-all duration-300 p-4 border border-slate-400 my-3 flex justify-between gap-5 items-start rounded-md">
        <div>
          <h2 className="font-bold text-2xl">{t.title}</h2>
          <div>{t.description}</div>
        </div>

        <div className="flex gap-2">
          <RemoveBtn id={t._id} />
          <Link href={`/editNote/${t._id}`}>
            <HiPencilAlt size={24}/>
          </Link>
        </div>
      </div>
    ))}
    </>
  )
}