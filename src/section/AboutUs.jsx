import React, { useState } from "react";
import Button from "../components/Button";
import aboutImage from "../../public/about-us.png";
import icon from "../../public/Frame.png";

const AboutUs = () => {
  // Track the current content index for small devices
  const [currentIndex, setCurrentIndex] = useState(0);

  // Content array
  const content = [
    "Through Limited is dedicated to providing analytics-driven digital marketing, comprehensive three-sixty communication, software engineering, and crisis management solutions.",
    "The company has been designed to deliver all kinds of solutions to any complex crisis for any business or individual in helping to achieve its consumers' goals of staying ahead of the curve in the rapidly evolving market through the pioneering specialized team and expert personnel.",
    "With a steadfast commitment to delivering excellence, Through Limited has quickly become the ultimate provider of the tools and resources that consumers need to succeed since its inception in 2019.",
  ];

  // Handle next and previous content
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? content.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      id="aboutUs"
      className="max-w-screen-xl mx-auto lg:mb-32 md:mb-32 px-4 sm:px-6 lg:px-0"
    >
      <div className="flex flex-col lg:flex-row md:flex-col justify-between">
        {/* Text Section */}
        <div className="lg:w-[500px] lg:ml-12 lg:mt-20">
          <h4 className="text-[#28519A] text-3xl md:text-4xl lg:text-3xl font-semibold mb-3 text-center lg:text-left">
            About Us
          </h4>
          <h2 className="lg:text-4xl md:text-3xl text-xl font-semibold mb-8 text-center lg:text-left">
            First Ever Performance
            <br className="hidden sm:block" />
            Driven Company
          </h2>

          {/* Content Section */}
          <div className="space-y-5 lg:px-0 md:px-12 px-4 relative">
            {/* SVG buttons for small devices */}
            <div className="lg:hidden md:hidden flex justify-between items-center w-full gap-2">
              {/* Left Button */}
              <button
                className="border-2 border-[#777] hover:bg-black hover:text-white flex justify-center items-center w-7 h-7 rounded-full cursor-pointer"
                onClick={handlePrev}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <div className="lg:hidden md:hidden">
                <div className="flex justify-center items-start gap-2 shadow-xl px-5 py-5 border-2 border-t rounded-xl">
                  {/* <img className="mt-2" src={icon} alt="Icon" /> */}
                  <p className="text-[#777] text-base leading-[26px]">
                    {content[currentIndex]}
                  </p>
                </div>
              </div>
              {/* Right Button */}
              <button
                className="border-2 border-[#777] hover:bg-black hover:text-white flex justify-center items-center w-7 h-7 rounded-full cursor-pointer"
                onClick={handleNext}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>

            {/* Medium and Large Devices Content (Static) */}
            <div className="hidden lg:block md:block">
              {content.map((text, index) => (
                <div
                  key={index}
                  className="flex justify-center  items-start gap-4 mb-5 shadow-xl lg:shadow-none px-5 py-2 border-2 lg:border-none rounded-xl"
                >
                  <img className="mt-2" src={icon} alt="Icon" />
                  <p className="text-[#777] text-base leading-[26px]">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="mt-12 text-center lg:text-left">
            <Button />
          </div>
        </div>

        {/* Image Section */}
        <div className="flex flex-col justify-center items-center mt-16 lg:px-0 md:px-0 px-5 lg:mr-12">
          <img
            className="hidden sm:block w-full h-auto"
            src={aboutImage}
            alt="About Us"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
