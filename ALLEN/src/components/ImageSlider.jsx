import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function ImageSlider({ imageLinks, width, height }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(e => (e + 1) % imageLinks.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [imageLinks.length]);

  function changeImage(index) {
    setCurrentIndex(index % imageLinks.length);
  }

  return (
    <div className="flex flex-col gap-3">
      <div style={{ maxWidth: width, height: height, verticalAlign: "middle", fontStyle: "italic", backgroundRepeat: "no-repeat", backgroundSize: "cover", "shapeMargin": "0.75rem" }} className="relative overflow-hidden">
        <img 
          src={imageLinks[currentIndex]} 
          alt={`Slide ${currentIndex + 1}`} 
          className="w-full h-full"
        />
      </div>
      <div className="flex justify-center space-x-2 mt-2 items-center">
        {imageLinks.map((_, index) => (
          <button
            key={index}
            onClick={() => changeImage(index)}
            className={`rounded-full w-3 h-3 cursor-pointer transition-colors duration-300 ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

ImageSlider.propTypes = {
  imageLinks: PropTypes.arrayOf(PropTypes.string).isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired
};