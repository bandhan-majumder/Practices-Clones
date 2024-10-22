import PropTypes from "prop-types";

function AdvantageSlider({imageLink, highlightedText, upperText, lowerText}) {
  return (
    <div className="overflow-hidden">
      <div className="relative flex flex-col w-full justify-center items-center bg-[#1A2439] rounded-3xl">
        <img
          src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1724133521/misc/phone_cp5tp7.svg"
          alt=""
          className="w-[16vw]"
        />
        <div className="absolute top-10 left-7 rounded-xl items-center text-center mt-2">
          <img
            src={imageLink}
            alt=""
            className="w-[13vw] h-[42vh]"
          />
            <p className="text-[#0EB891] text-2xl font-semibold mt-3">
              {highlightedText}
            </p>
          <div className="text-sm mt-4">
            <p>{upperText}</p>
            <p>{lowerText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default AdvantageSlider;

AdvantageSlider.propTypes = {
    imageLink: PropTypes.string.isRequired,
    highlightedText: PropTypes.string.isRequired,
    upperText: PropTypes.string.isRequired,
    lowerText: PropTypes.string.isRequired
}
