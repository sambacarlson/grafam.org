import { FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <div className="min-h-[300px] bg-white dark:bg-_deep_gray p-4 md:p-8 flex flex-col items-center justify-center">
      <div className="w-full h-full flex-1 border border-gray-300 dark:border-_gray flex flex-col">
        <div className="p-4 md:p-8 flex items-center justify-center space-x-4 flex-1">
          <FaYoutube size={26} className="color-blue hover:drop-shadow-light dark:hover:drop-shadow-dark" />
          <FaFacebook size={26} className="color-blue hover:drop-shadow-light dark:hover:drop-shadow-dark" />
          <IoLogoWhatsapp size={26} className="color-blue hover:drop-shadow-light dark:hover:drop-shadow-dark" />
        </div>
        <div className="justify-self-end p-4 flex justify-center w-full">
          <small className="text-center self-center">copyright &copy; {new Date().getFullYear()} Grace Faith Missions International</small>
        </div>
      </div>
    </div>
  )
}

export default Footer