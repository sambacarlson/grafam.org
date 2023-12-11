import Hero from "@/components/Hero";
import Navabar from "@/components/Navabar";
import Weekly from "@/components/Weekly";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen">
      <title>GRAFAM</title>
      <Navabar />
      {/* <div className="absolute bottom-0 left-0 -z-50">
        <Image
          alt="Homepage"
          src="/lifted-hands.jpg"
          width={500}
          height={500}
          className="w-[100vw] min-h-[100vh] object-cover"
        />
      </div> */}
      <Hero />
      <div className="w-full flex justify-center">
        <Weekly />
      </div>
    </main>
  );
}
