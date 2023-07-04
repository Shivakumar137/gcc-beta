import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-row-reverse mx-8">
      <button className="rounded-2xl flex justify-center m-2 p-2 px-4 text-slate-950 font-semibold bg-slate-50 hover:bg-slate-100">
        <Link href="/signup">Sign Up</Link>
      </button>
      <button className="flex justify-center m-2  p-2 text-gray-300 hover:bg-fuchsia-800">
        Login
      </button>
      {/* <Image src="/images/next.svg" width={10} height={10} alt="just a logo" /> */}
    </header>
  );
}
