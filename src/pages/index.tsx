import Directions from "@/components/Directions";
import Hero from "@/components/Hero";
import Navabar from "@/components/Navabar";
import Upcoming from "@/components/Upcoming";
import Weekly from "@/components/Weekly";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen selection:bg-_blue selection:text-white">
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
      <section className="">
        <div className="w-full min-h-[50vh] flex justify-center items-center mb-5  dark:bg-_deep_gray dark:bg-opacity-50 p-4 md:p-8">
        <Weekly />
      </div>
        <div className="md:w-full min-h-[40vh] md:max-h-[90vh] bg-white dark:bg-transparent flex justify-center mt-4 p-4 md:p-8 pb-6 md:pb-20 ">
          <Upcoming />
        </div>
        <div className="w-full self-center p-4 md:p-8 dark:bg-_deep_gray dark:bg-opacity-50">
          <Directions />
        </div>
      </section>
    </main>
  );
}
