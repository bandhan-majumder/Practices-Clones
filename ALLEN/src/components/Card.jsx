import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa6";
export default function Card({ imageLink, text }) {
  return (
    <>
      <div className="bg-[#1A2439] w-[22vw] h-[30vh] relative rounded-2xl overflow-hidden">
        <img
          src={imageLink}
          alt=""
        />
        <div className="ml-3 absolute bottom-6">
          <div className="flex flex-col justify-between h-[25vh]">
            <div>
              <p className="text-white text-3xl">{text}</p>
            </div>
            <div className="flex flex-row gap-3">
              <p className="text-blue-500 text-2xl">View</p>
              <FaArrowRight className="text-blue-500 text-2xl mt-1" />
            </div>
          </div>
        </div>
        </div>
    </>
  );
}
Card.propTypes = {
  imageLink: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
