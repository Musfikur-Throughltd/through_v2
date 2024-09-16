import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const content = [
  { icon: "image 2.png", headline: "Crisis Management" },
  { icon: "Group 27.png", headline: "Data Analysis" },
  { icon: "image 3.png", headline: "Public Relation" },
  { icon: "image 4.png", headline: "ERP Solution" },
  { icon: "image 6.png", headline: "Conversation Optimization" },
  { icon: "image 5.png", headline: "Digital Brand Building" },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true, // Enables autoplay
  autoplaySpeed: 3000, // Time in milliseconds before switching slides
  arrows: false, // Disables arrows for a cleaner mobile view
};

const Service = () => {
  return (
    <div id="services" className="max-w-screen-xl mx-auto mb-20 px-4">
      {/* Title */}
      <div className="text-3xl text-center text-blue-900 font-semibold">
        OUR SERVICES
      </div>
      {/* Subtitle */}
      <div className="w-full max-w-3xl mx-auto mt-3 mb-10 text-center text-gray-500 text-lg font-normal leading-7">
        We Focus On Making The Best In All Sectors
      </div>

      {/* Services Grid or Carousel */}
      <div className="relative overflow-hidden">
        {/* On mobile show a carousel, on larger screens show grid */}
        <div className="block sm:hidden">
          <Slider {...sliderSettings}>
            {content.map((cont, i) => (
              <div
                key={i}
                className="border p-5 rounded-md text-blue-900 hover:bg-blue-900 hover:text-white transition-all ease-in-out duration-300 text-center"
              >
                {/* Icon */}
                <img
                  src={cont.icon}
                  alt={cont.headline}
                  className="w-16 h-16 mb-4 mx-auto"
                />
                {/* Headline */}
                <div className="text-lg font-semibold capitalize mb-2">
                  {cont.headline}
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Grid layout for larger screens */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.map((cont, i) => (
            <div
              key={i}
              className="border p-5 rounded-md text-blue-900 hover:bg-blue-900 hover:text-white transition-all ease-in-out duration-300"
            >
              {/* Icon */}
              <img
                src={cont.icon}
                alt={cont.headline}
                className="w-16 h-16 mb-4 mx-auto"
              />
              {/* Headline */}
              <div className="text-lg font-semibold capitalize mb-2 text-center">
                {cont.headline}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
