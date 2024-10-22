import AdvantageSlider from "./AdvantageSlider";
import Card from "./Card";
import ImageSlider from "./ImageSlider";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import Testimonial from "./Testimonial";

function Landing() {
  const imageLinks = [
    "https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1729249760%2Fu_c_1_t79muq.webp&w=640&q=75",
    "https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1729249954%2Fu_c_2_tjpr1s.webp&w=640&q=75",
    "https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1729249955%2Fu_c_3_jqpb6o.webp&w=640&q=75",
    "https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1729249957%2Fu_c_4_sgm4g6.webp&w=640&q=75",
  ];
  const midImageLinks = [
    "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1024,f_auto,q_auto/v1728295471/gbvvlbtgpsecq57ivwff.png?_upload_ref=ic_img_tool",
    "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1280,f_auto,q_auto/v1727944261/w6oi3seuvlmsggphhpxi.webp?_upload_ref=ic_img_tool",
    "https://res.cloudinary.com/dpzpn3dkw/image/upload/v1728302450/Homepage_Banner_1_sn5css.webp",
    "https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1280,f_auto,q_auto/v1727944598/wr9qyk4gyqgnntgonfvy.webp?_upload_ref=ic_img_tool",
  ];
  const discoverProgramImages = [
    "https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729079766/jee_vd0eql.webp",
    "https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729079856/U_neet_ngbo57.webp",
    "https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729079855/grade_6_10_ilhkeb.webp",
  ];
  const discoverTexts = ["JEE", "NEET", "Grade 6-10"];

  return (
    <div className="flex justify-center">
      <div className="bg-[#0F1825] w-full max-w-[75vw] py-8">
        <div className="flex justify-center">
          <img
            src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1280,f_auto,q_auto/v1729019503/sg9nmeh16atrkgv9tb7k.png?_upload_ref=ic_img_tool"
            className=" w-full"
            alt=""
          />
        </div>
        <div className="flex justify-between mt-12 w-full h-auto">
          <div className="flex flex-col text-white w-[60vh] h-[45vh] items-center justify-center gap-20">
            <div className="text-5xl items-center">
              Your Dream. <br />
              Our Expertise.
            </div>
            <div>
              <div className="text-2xl">What brings you to us today?</div>
              <div className="flex flex-row gap-4 mt-3 w-[37vh]">
                <div className="bg-[#0F1825] rounded-full w-[5vw] h-[3vw] flex justify-center items-center border-solid border-2 border-[#698FE2] ">
                  NEET
                </div>
                <div className="bg-[#0F1825] rounded-full w-[5vw] flex justify-center items-center border-solid border-2 border-[#698FE2]">
                  JEE
                </div>
                <div className="bg-[#0F1825] rounded-full w-[7vw] flex justify-center items-center border-solid border-2 border-[#698FE2]">
                  Grade 6-10
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-white w-[80vh] h-[45vh] items-center justify-center mb-10">
            <ImageSlider imageLinks={imageLinks} width={"60"} height={"45"} />
          </div>
        </div>
        <div className="mt-12 flex items-center justify-center">
          <ImageSlider
            imageLinks={midImageLinks}
            width={"50"}
            height={"40"}
            className="flex bg-red-400"
          ></ImageSlider>
        </div>
        <div className="text-center mt-20">
          <p className="text-white text-6xl font-semibold">
            Our Remarkable Results in 2024
          </p>
        </div>
        <div>
          <div className="flex flex-row justify-center cursor-pointer mt-10">
            <div className="text-slate-400 w-[20wh] flex justify-center items-center text-5xl mr-10">
              <IoIosArrowDropleft />
            </div>
            <div className="">
              <img
                src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_600,f_auto,q_auto/v1727953163/oebyukgkusnrgafhi6kh.png?_upload_ref=ic_img_tool"
                alt=""
                className="rounded-3xl"
              />
            </div>
            <div className="flex items-center justify-start w-[60vh]">
              <div className="ml-10 flex flex-col gap-4">
                <p className="text-white text-xl font-semibold">
                  ALLEN Online Programs JEE(Adv.) 2024 Results
                </p>
                <p className="text-slate-600 text-xl">
                  14 students have made it to top 500 AIR
                </p>
                <p className="text-blue-600 text-md font-bold">
                  View Detailed Results {">"}
                </p>
              </div>
            </div>

            <div className="text-slate-400  w-[20wh] flex justify-center items-center text-5xl ml-4">
              <IoIosArrowDropright />
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-3 justify-center text-center m-5">
          <div>
            <button className="rounded-full w-3 h-3 cursor-pointer bg-white" />
          </div>
          <div>
            <button className="rounded-full w-4 h-4 cursor-pointer bg-white" />
          </div>
        </div>
        <div className="text-center text-white text-4xl my-20 font-serif">
          <p>ALLEN App Advantage</p>
        </div>
        <div className="flex flex-row justify-between gap-12">
          <div className="flex flex-col gap-8 w-[30vw] pl-20 pt-20 mt-20">
            <div className="flex flex-col gap-12">
              <div className="text-white text-3xl font-serif">
                <p>Achieve your dream with the</p>
                <p>ALLEN App!</p>
              </div>
              <div className="text-slate-300 text-xl">
                <p>Top Kota faculty, customised study </p>
                <p>tools, and AI-powered learning—all</p>
                <p> in one app.</p>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <div>
                <div className="text-slate-400">
                  <p>*All impact methodology &</p>
                  <p>measurement validated by</p>
                </div>
              </div>
              <div className="w-10 h-10">
                <img
                  src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_300,f_auto,q_auto/v1728285431/pct4no5maf7lrhnseni5.svg?_upload_ref=ic_img_tool"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className=" flex flex-row w-[50vw]">
            <div className="flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729241868/allenworks-03_ayceco.svg"
                alt=""
              />
            </div>
            {/* example of only one image */}
            <div className="text-white text-5xl">
              {
                <AdvantageSlider
                  imageLink={
                    "https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729241866/allenworks-02_bidcce.svg"
                  }
                  highlightedText={"30+ marks"}
                  upperText={"Improvement in NEET scores"}
                  lowerText={"with ALLEN mobile app"}
                />
              }
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729241866/allenworks-02_bidcce.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="mt-20">
          <p className="text-white text-3xl">Discover perfect online program</p>
        </div>
        <div className="flex flex-row justify-between my-10">
          {discoverProgramImages.map((_, index) => (
            <Card
              key={index}
              imageLink={discoverProgramImages[index]}
              text={discoverTexts[index]}
            />
          ))}
        </div>
        <div className=" text-white mt-12 text-3xl">
          <p>Looking for a classroom based program?</p>
        </div>
        <div className="flex flex-row justify-between bg-[#1A2439] rounded-3xl mt-10">
          <div className="flex flex-col justify-center items-center w-[30vw]">
            <div className="text-white text-2xl flex flex-col justify-around gap-10">
              <div>
                <p>Present in 53 cities with</p>
                <p>250+ classrooms</p>
              </div>
              <div className="text-black rounded-full w-[9vw] bg-white text-center hover:bg-[#4F6189] cursor-pointer">
                <p className="mt-3 font-serif mb-3">Find a center</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1707820846/Updated_size_classroom_ck4yjp.webp"
              alt=""
            />
          </div>
        </div>
        <div className="mt-20 flex flex-row justify-between">
          <div className=" w-[30vw] flex flex-col justify-center items-center">
            <p className="text-[#0EB891] text-4xl text-start">Testimonials</p>
            <p className="text-2xl text-white">
              Here is what students are saying
            </p>
            <div className="flex flex-row gap-3 justify-center text-center m-5">
              <div>
                <button className="rounded-full w-3 h-3 cursor-pointer bg-white" />
              </div>
              <div>
                <button className="rounded-full w-3 h-3 cursor-pointer bg-white" />
              </div>
              <div>
                <button className="rounded-full w-3 h-3 cursor-pointer bg-white" />
              </div>
              <div>
                <button className="rounded-full w-4 h-4 cursor-pointer bg-white" />
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-3 max-w-[60vw]">
            <div>
              <Testimonial img={"https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1725858116%2FSarth-128x128_wrp1pw.webp&w=64&q=100"} text={"I chose ALLEN Online Programs because I wanted to balance my NEET prep with my school schedule. The program's structure, from daily homework to post-class handouts, was well-organized & my teachers were always available in case I had any doubts."} name={"SARTH PATIL"} info={"NEET-UG 2024, Score 710/720"}/>
            </div>
            <div>
              <Testimonial img={"https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1725858116%2FGalib-128x128_1_ktw4sw.webp&w=64&q=100"} text={"I took NEET in 2023 but didn’t achieve my desired score, so I reattempted in 2024 with ALLEN Online Programs. The top-quality faculty, study material, & personalised experience on the ALLEN app helped me improve my score by 100 marks from my previous attempt."} name={"SEKH GALIB RAZA"} info={"NEET-UG 2024, Score 695/720"}/>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729086658/download_app_dark_hae6bf.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
