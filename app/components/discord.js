import Image from "next/image";

export default function Discord() {
  return (
    <section className="h-20 m-20 mt-32">
      <div>
        <div className="flex items-center justify-center m-5">
          <a
            className="text-slate-950 rounded-full bg-gradient-to-r from-indigo-600 to-pink-500 p-4 px-7 text-4xl font-bold"
            href="https://discord.gg/SnDZb5jTZ6"
          >
            Join GCC Discord
          </a>
        </div>
        <div className="flex items-center justify-center h-full">
          {" "}
          becoming the best of the craft or create a new craft
        </div>
      </div>
    </section>
  );
}
