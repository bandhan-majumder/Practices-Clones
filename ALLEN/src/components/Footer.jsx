import Copyright from "./Copyright";
export default function Footer() {
  return (
    <>
      <div className="flex justify-center">
        <div className="bg-[#0F1825] flex justify-between w-full max-w-[85vw] h-[45vh] py-8 overflow-hidden">
          <div className="flex flex-row text-white gap-2">
            <div className="w-[14vw] flex flex-col gap-7 items-center">
              <div className=" flex flex-col gap-3 text-xm">
                <h3 className="font-semibold items-start">About</h3>
                <h4></h4>
                <h4>About Us</h4>
                <h4>Blogs</h4>
                <h4>News</h4>
                <h4>MyExam EduBlogs</h4>
                <h4>Privacy Policy</h4>
                <h4>Public notice</h4>
                <h4>Careers</h4>
              </div>
            </div>
            <div className="flex flex-col w-[14vw] gap-7 items-center">
              <div className=" flex flex-col gap-3">
                <h3 className="font-semibold">Help & Support</h3>
                <h4></h4>
                <h4>Refund Policy</h4>
                <h4>Transfer Policy</h4>
                <h4>Terms & Conditions</h4>
                <h4>Contact Us</h4>
              </div>
            </div>
            <div className=" flex flex-col w-[14vw] gap-7 items-center">
              <div className="flex flex-col gap-3">
                <h3 className="font-semibold">Popular goals</h3>
                <h4></h4>
                <h4>NEET UG</h4>
                <h4>JEE Advanced</h4>
                <h4>6th to 10th</h4>
              </div>
            </div>
            <div className="flex flex-col w-[14vw] gap-7 items-center">
              <div className=" flex flex-col gap-3">
                <h3 className="font-semibold">Courses</h3>
                <h4></h4>
                <h4>Ultimate Program</h4>
                <h4>Distance Learning</h4>
                <h4>Online Test Series</h4>
              </div>
            </div>
            <div className="flex flex-col w-[14vw] gap-7 items-center">
              <div className=" flex flex-col gap-3">
                <h3 className="font-semibold">Centers</h3>
                <h4></h4>
                <h4>Kota</h4>
                <h4>Bangalore</h4>
                <h4>Indore</h4>
                <h4>Delhi</h4>
                <h4>More centers</h4>
              </div>
            </div>
            <div className="flex flex-col w-[14vw] gap-7 items-center">
              <div className=" flex flex-col gap-3">
                <h3 className="font-semibold">Exam information</h3>
                <h4></h4>
                <h4>JEE Main</h4>
                <h4>JEE Advanced</h4>
                <h4>NEET UG</h4>
                <h4>Class 11</h4>
                <h4>Class 12</h4>
                <h4>Olympiad Exam</h4>
                <h4>
                  NEET Online Test <br />
                  Series
                </h4>
                <h4>
                  JEE Main Online Test <br />
                  Series
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </>
  );
}

