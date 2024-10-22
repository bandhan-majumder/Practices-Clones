import { BsTelephoneOutboundFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="flex justify-center">
        <div className="bg-[#0F1825] flex justify-between items-center  w-full max-w-[87vw] py-8">
          <div className="flex flex-row gap-10 items-center">
            <div className="w-40 h-30 ml-2">
              <img
                className="min-w-15 max-w-25 w-full h-10my-6"
                src="https://allen.in/logo_dark.svg"
                alt=""
              />
            </div>
            <div className="text-white text-lg flex flex-row gap-6">
              <Link to="/">
              <div className="hover:cursor-pointer">Exams</div>
              </Link>
              <Link to="/">
              <div className="hover:cursor-pointer">Programs</div>
              </Link>
              <Link to="/">
              <div className="hover:cursor-pointer">Scholarships</div>
              </Link>
              <Link to="/">
              <div className="relative inline-flex items-center hover:cursor-pointer">
                <div className="mr-2 hover:cursor-pointer">Test Series</div>
                <div className="absolute -top-5 -right-4 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full hover:cursor-pointer">
                  NEW
                </div>
              </div>
              </Link>
              <Link to="/">
              <div className="hover:cursor-pointer">Study Materials</div>
              </Link>
             
            </div>
          </div>
          <div>
            <div className="flex flex-row gap-3 mr-3">
              <Link to="#">
              <div className="bg-white rounded-3xl w-30 flex flex-row pt-3 pb-3">
                <div>
                  <BsTelephoneOutboundFill className="text-2xl mr-4 ml-2" />
                </div>
                <div className="mr-3">
                  <p>Talk to us</p>
                </div>
              </div>
              </Link>
              <Link to="#">
              <div
                className="text-white w-24 bg-[#0F1825] hover:bg-[#4F6189]
            text-center pt-3 pb-3 rounded-3xl border-solid border-2 border-[#698FE2]"
              >
                Login
              </div>
              </Link>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
