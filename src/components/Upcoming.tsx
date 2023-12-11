import Image from "next/image"
import { RiContactsFill } from "react-icons/ri";
import { BiSolidMap } from "react-icons/bi";
import { FaPhone } from "react-icons/fa";
const Upcoming = () => {
  return (
    <div className="w-full max-h-full flex flex-col items-center">
      <div className="text-_deep_blue dark:text-white h-10 w-full px-3">
        <h3 className="text-xl md:text-2xl font-bold self-center px-4 border-b border-b-_blue dark:border-b-white">Up next!</h3>
      </div>
      <div className="w-full max-h-full p-4 text-white grid grid-cols-1 md:grid-cols-5 ">
        <div className="md:col-span-3 bg-_deep_gray bg-opacity-30 w-full max-h-full overflow-hidden">
          <Image src="/SampleProg2.jpeg" alt="upcomming program" width={500} height={500} className="w-full h-full object-contain" />
        </div>
        <div className="md:col-span-2 text-_deep_gray dark:text-white flex flex-col items-center justify-center p-4 space-y-3 ">
          <div className="p-4 flex flex-col space-y-3 max-w-full">
            <p className="w-full">Don&apos;t worry. We&apos;d be glad to remind you when the progam is about to start</p>
            <div className="border border-_deep_blue dark:border-white flex flex-col items-center justify-center space-y-3 max-w-full rounded p-4">
              <form className="max-w-full flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <RiContactsFill size={20} className="text-_blue" />
                  <input type="text" id="Name" name="name" placeholder="Name" maxLength={60} className="max-w-full focus:outline-none px-4 py-2 text-_deep_gray leading-6 tracking-wide rounded" />
                </div>
                <div className="flex items-center space-x-2">
                  <FaPhone size={20} className="text-_blue" />
                  <input type="text" id="Telephone" name="telephone" placeholder="Phone number" maxLength={20} className="max-w-full focus:outline-none px-4 py-2 text-_deep_gray leading-6 tracking-wide rounded" />
                </div>
                <div className="flex items-center space-x-2">
                  <BiSolidMap size={20} className="text-_blue" />
                  <input type="text" id="Address" name="address" placeholder="Address" maxLength={100} className="max-w-full focus:outline-none px-4 py-2 text-_deep_gray leading-6 tracking-wide rounded" />
                </div>
              </form>
              <div className="hover:cursor-pointer bg-_deep_blue hover:bg-_blue flex items-center justify-center rounded active:font-semibold px-4 py-2">
                <p className="whitespace-nowrap text-white">Remind me!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Upcoming