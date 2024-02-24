import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-[#CE7979]  px-8 py-3 rounded-md">
      <Link className="text-slate-200 font-bold text-xl" href={"/"}>Notes</Link>
      <Link className="bg-slate-200 text-[#CE7979] p-2 rounded-md" href={"/addNote"}>Add Note</Link>
    </nav>
  );
}