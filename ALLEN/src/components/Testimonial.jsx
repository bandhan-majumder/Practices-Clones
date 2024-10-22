import PropTypes from "prop-types";
function Testimonial({ img, text, name, info }) {
  return (
    <div className="relative w-[23vw] h-[60vh] flex flex-col  gap-10 bg-[#1A2439] rounded-3xl">
      <div className="relative bottom-10">
        <img src="https://allen.in/quotes.svg" alt="" />
      </div>
      <div className="h-[40vh] rounded-xl mx-3">
        <p className="text-slate-400">{text}</p>
      </div>
      <div className="flex flex-row justify-start gap-4 mb-10 ml-4">
        <div className="rounded-3xl">
          <img src={img} alt="" />
        </div>
        <div>
          <p className="text-white text-2xl">{name}</p>
          <p className="text-slate-500">{info}</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;

Testimonial.propTypes = {
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};
