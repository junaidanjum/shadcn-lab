import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left tracking-tighter">
          <h1 className="text-3xl font-semibold leading-10 text-black dark:text-zinc-50 ">
            shacn-lab preview playground
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-500 dark:text-zinc-400">
            A playground to preview and test shadcn UI components in isolation.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <Link
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-39.5"
            href="/playground"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Playground
          </Link>
        </div>
      </main>
    </div>
  );
}
