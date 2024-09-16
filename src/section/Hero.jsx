import { useState } from "react";
import Rectangle1 from "../../public/Rectangle 24.png";
import Rectangle2 from "../../public/Rectangle 25.png";
import Rectangle3 from "../../public/Rectangle 26.png";
import Rectangle4 from "../../public/Rectangle 27.png";
import Button from "../components/Button";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    { src: Rectangle2, alt: "Rectangle 2" },
    { src: Rectangle4, alt: "Rectangle 4" },
    { src: Rectangle1, alt: "Rectangle 1" },
    { src: Rectangle3, alt: "Rectangle 3" },
  ];

  const handleNext = () => {
    if (currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    }
  };

  const handlePrev = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto mb-20 px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div className="space-y-4 lg:pt-32 md:pt-20 pt-12 text-center lg:text-left">
          <h1 className="text-xl lg:text-3xl font-semibold leading-tight">
            Advancing{" "}
            <span className="text-[#28519A]">
              Businesses and
              <span className="lg:inline hidden">
                {" "}
                <br />{" "}
              </span>
              Individuals
            </span>{" "}
            with
            <span className="md:inline hidden">
              {" "}
              <br />{" "}
            </span>
            Performance-focused
            <span className="md:inline hidden">
              {" "}
              <br />{" "}
            </span>
            solutions.
          </h1>
          <p className="text-[#777] text-sm sm:text-base md:text-lg lg:text-xl">
            With a focus on excellence and a commitment to customer
            satisfaction, Through Limited is your ultimate partner for success.
            We offer a comprehensive range of services, from digital marketing
            to software engineering, for businesses and individuals looking to
            succeed in today's fast-paced market.
          </p>
          <Button />
        </div>

        {/* Image Section with Carousel for Mobile */}
        <div className="lg:hidden relative">
          <div className="w-full overflow-hidden">
            <img
              className="w-full"
              src={images[currentImage].src}
              alt={images[currentImage].alt}
            />
          </div>
          {/* Left Button */}
          {currentImage > 0 && (
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
            >
              &lt;
            </button>
          )}
          {/* Right Button */}
          {currentImage < images.length - 1 && (
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
            >
              &gt;
            </button>
          )}
        </div>

        {/* Grid for Desktop View */}
        <div className="hidden  relative lg:grid grid-cols-2 gap-4 md:gap-6">
          <img className="w-full" src={Rectangle2} alt="Rectangle 2" />
          <img
            className="w-full lg:mt-[-28px]"
            src={Rectangle4}
            alt="Rectangle 4"
          />
          <img className="w-full" src={Rectangle1} alt="Rectangle 1" />
          <img
            className="w-full lg:mt-[-143px]"
            src={Rectangle3}
            alt="Rectangle 3"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
