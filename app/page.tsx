import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20" style={{fontFamily:"monospace"}}>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* <Image src='vercel.svg' width={10} height={10} alt="Vercel Logo" /> */}
        <h1 className="text-4xl">Cooking Something</h1>
        <p className="justify-items-center"><a style={{opacity:0.5}} href="https://github.com/baltej223">@baltej223</a></p>
        </main>
        {/* <Image src="/logo.svg" alt="Logo" width={100} height={100} /> */}
        {/* <div className="flex gap-4 items-center flex-col sm:flex-row"> */}
          {/* </div> */}
    </div>
  );
}
