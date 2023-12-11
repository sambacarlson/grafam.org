import Image from "next/image"
const Directions = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-[40vh] max-h-[70vh]">
      <div className="text-_deep_blue dark:text-white h-10 w-full px-3">
        <h3 className="text-xl md:text-2xl font-bold self-center px-4 border-b border-b-_blue dark:border-b-white mb-3">Visit the Headquarters!</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:w-5/6 w-full overflow-hidden">
        <div className="order-2 md:order-1 col-span-1 flex items-center justify-center">
          <p>Opposite the new Government Reference Hospital Bwiteva-Muea road Buea-Cameroon</p>
        </div>
        <div className="order-1 md:col-span-2 flex items-center justify-center bg-blue-400 w-full max-h-full overflow-hidden">
          <Image src="/Buea-map.png" alt="directions" width={500} height={500} className="w-full h-full object-cover object-center" />
        </div>
      </div>
    </div>
  )
}

export default Directions