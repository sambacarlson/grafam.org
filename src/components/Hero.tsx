import Image from "next/image"
const Hero = () => {
  return (
    <div className="relative flex flex-col w-[100vw] min-h-[40vh] max-h-[400px] bg-blue-400">
      <div className="absolute overflow-hidden w-full max-h-full" >
        <Image src="/lifted-hands.jpg" alt="auditorium" height={500} width={500} className="object-cover object-center w-full" />
      </div>
    </div>
  )
}

export default Hero