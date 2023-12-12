import Image from "next/image"
import { FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";
import { PiTelevisionFill } from "react-icons/pi";
import { FaHandshake } from "react-icons/fa6";
const Hero = () => {
  return (
    <div className="relative flex flex-col max-w-[100vw] min-h-[500px] max-h-[600px] bg-blue-400 text-white">
      <div className="absolute overflow-hidden w-full h-full -z-10-" >
        <Image src="/lifted-hands.jpg" alt="auditorium" height={600} width={600} className="object-cover object-left-bottom w-full h-full" />
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/3 z-10 left-10 md:left-20 justify-self-center flex flex-col ">
        <h1 className="text-[2rem] md:text-[4rem] font-bold w-5/6 md:w-2/3 leading-snug">Welcome to Grace Faith Missions Int&apos;l</h1>
        <div className="flex flex-row items-center mt-5 md:mt-7 space-x-4 md:space-x-10">
          <div className="border border-_blue flex flex-row items-center justify-center space-x-2 py-2 md:py-3 px-4 md:px-6 rounded flex-1 bg-_deep_blue bg-opacity-20 hover:bg-opacity-70 hover:cursor-pointer active:border-white"><RiContactsFill size={24} className="text-_blue" /><h4 className="text-lg md:text-2xl">Join</h4></div>
          <div className="border border-_blue flex flex-row items-center justify-center space-x-2 py-2 md:py-3 px-4 md:px-6 rounded flex-1 bg-_deep_blue bg-opacity-20 hover:bg-opacity-70 hover:cursor-pointer active:border-white"><FaYoutube size={24} className="text-_blue" /><h4 className="text-lg md:text-2xl">Watch</h4></div>
          <div className="border border-_blue flex flex-row items-center justify-center space-x-2 py-2 md:py-3 px-4 md:px-6 rounded flex-1 bg-_deep_blue bg-opacity-20 hover:bg-opacity-70 hover:cursor-pointer active:border-white"><FaFacebook size={24} className="text-_blue" /><h4 className="text-lg md:text-2xl">Follow</h4></div>
          <div className="border border-_blue flex flex-row items-center justify-center space-x-2 py-2 md:py-3 px-4 md:px-6 rounded flex-1 bg-_deep_blue bg-opacity-20 hover:bg-opacity-70 hover:cursor-pointer active:border-white"><FaHandshake size={24} className="text-_blue" /><h4 className="text-lg md:text-2xl">Partner</h4></div>
          <div className="border border-_blue flex flex-row items-center justify-center space-x-2 py-2 md:py-3 px-4 md:px-6 rounded flex-1 bg-_deep_blue bg-opacity-20 hover:bg-opacity-70 hover:cursor-pointer active:border-white"><PiTelevisionFill size={24} className="text-_blue" /><h4 className="text-lg md:text-2xl whitespace-nowrap">Eagle tv</h4></div>
        </div>
      </div>
    </div>
  )
}

export default Hero