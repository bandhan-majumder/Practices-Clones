import { LuYoutube } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
export default function Copyright() {
  return (
    <>
      <div className="flex justify-center">
        <div className="bg-[#0F1825] w-full max-w-[85vw] h-[15vh] py-8 overflow-hidden">
        <div className='divide-x-0 text-white'>
            <hr style={{ width: "90vw"}}/>
        </div>
        <div className='flex justify-between mt-6'>
            <div className='text-white'>
                <p className='text-white text-xm ml-1'>ALLEN Career Institute Pvt. Ltd. © All Rights Reserved.</p>
            </div>
            <div className='text-white flex flex-row text-3xl gap-3 mr-3'>
                <div><LuYoutube /></div>
                <div><FaInstagram /></div>
                <div><FaSquareFacebook /></div>
                <div><BsTwitterX /></div>
                <div><FaLinkedin /></div>
            </div>
        </div>
        </div>
      </div>
    </>
  )
}
