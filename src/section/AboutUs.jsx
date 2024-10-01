import React, { useState } from "react";
import Button from "../components/Button"; // Your custom Button component
import aboutImage from "/about-us.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnimationAccroding from "./AnimationAccroding";

const AboutUs = () => {
  const [showFinalText, setShowFinalText] = useState(false);

  // Slider settings for mobile view
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    waitForAnimate: true,
  };

  // Content array
  const content = [
    "Through Limited is dedicated to providing analytics-driven digital marketing, comprehensive three-sixty communication, software engineering, and crisis management solutions.",
    "The company has been designed to deliver all kinds of solutions to any complex crisis for any business or individual in helping to achieve its consumers' goals of staying ahead of the curve in the rapidly evolving market through the pioneering specialized team and expert personnel.",
    "With a steadfast commitment to delivering excellence, Through Limited has quickly become the ultimate provider of the tools and resources that consumers need to succeed since its inception in 2019.",
  ];

  return (
    <div id="aboutUs" className="max-w-screen-xl mx-auto lg:mb-32 md:mb-32 px-4 sm:px-6 lg:px-0">
      <div className="flex flex-col lg:flex-row md:flex-col justify-between lg:gap-12">
        {/* Text Section (AnimationAccroding) */}
        <div className="lg:w-1/2 md:w-1/2 lg:pl-[55px] lg:mt-20">
          <h4 className="text-[#28519A] text-3xl md:text-4xl lg:text-4xl font-semibold mb-3 text-center lg:text-left">
            About Us
          </h4>
          <h2 className="lg:text-xl md:text-3xl text-xl mb-8 text-center lg:text-left">
            <span className="font-semibold">Through LTD </span>- First Ever Performance Driven Company
          </h2>
          <div className="-mt-4">
            <AnimationAccroding setShowFinalTextProp={setShowFinalText} />
          </div>

          {/* Button added here */}
          <div className="mt-12 flex justify-center lg:justify-start">
            <Button text="Learn More" />
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 md:w-1/2 flex justify-center items-center ">
          <img
            src={aboutImage}
            className={`transition-transform duration-1000 ease-in-out ${showFinalText ? "scale-75" : "scale-100 mt-[70px]"}`}
            alt="about us"
          />
        </div>



      </div>
    </div>
  );
};

export default AboutUs;
