import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  adaptiveHeight: true,
  autoplay: true,          
  autoplaySpeed: 2000,      
};


const milestones = [
  { label: "Years of Experience", value: "04+", color: "gray-900" },
  { label: "Total Courses", value: "43+", color: "gray-900" },
  { label: "Satisfied Customers", value: "17+", color: "gray-900" },
  { label: "Projects Done", value: "136+", color: "gray-900" },
];

const Milestone = () => {
  return (
    <div className="w-full px-4 py-24 bg-white flex flex-col items-center gap-12">
      {/* Heading Section */}
      <div className="space-y-2 mb-8 text-center">
        {/* Title */}
        <h2 className="text-3xl text-blue-900 font-semibold">Milestones</h2>
        <div className="text-xl text-gray-900 font-semibold">
          Tracking Progress and Milestones
        </div>
        {/* Subtitle */}
        <p className="w-full max-w-3xl text-center text-gray-500 text-lg font-normal leading-7 mb-10">
          Effective progress tracking and milestone setting are critical
          components of any successful project or personal goal. By
          systematically monitoring our achievements.
        </p>
      </div>

      {/* Carousel for Mobile View */}
      <div className="block md:hidden w-full">
        <Slider {...settings}>
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-lg text-center"
            >
              <div className={`text-4xl text-${milestone.color} font-medium`}>
                {milestone.value}
              </div>
              <div
                className={`text-lg text-gray-500 font-medium capitalize mt-2`}
              >
                {milestone.label}
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Milestone Statistics Section for larger screens */}
      <div className="hidden md:flex flex-wrap gap-8 justify-center items-center w-full">
        {/* Years of Experience */}
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex items-center gap-2">
            <div className="text-5xl text-gray-900 font-medium">04</div>
            <div className="text-5xl text-gray-900 font-medium">+</div>
          </div>
          <div className="text-xl text-gray-500 font-medium capitalize">
            Years of Experience
          </div>
        </div>

        {/* Separator */}
        <div className="w-16 h-px bg-blue-900 rotate-90 hidden md:block"></div>

        {/* Total Courses */}
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex items-center gap-2">
            <div className="text-5xl text-gray-900 font-medium">43</div>
            <div className="text-5xl text-gray-900 font-medium">+</div>
          </div>
          <div className="text-xl text-gray-500 font-medium capitalize">
            Total Courses
          </div>
        </div>

        {/* Separator */}
        <div className="w-16 h-px bg-blue-900 rotate-90 hidden md:block"></div>
        {/* Satisfied Customers */}
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex items-center gap-2">
            <div className="text-5xl text-gray-900 font-medium">17</div>
            <div className="text-5xl text-gray-900 font-medium">+</div>
          </div>
          <div className="text-xl text-gray-500 font-medium capitalize">
            Satisfied Customers
          </div>
        </div>

        {/* Separator */}
        <div className="w-16 h-px bg-blue-900 rotate-90 hidden md:block"></div>
        {/* Projects Done */}
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex items-center gap-2">
            <div className="text-5xl text-gray-900 font-medium">136</div>
            <div className="text-5xl text-gray-900 font-medium">+</div>
          </div>
          <div className="text-xl text-gray-500 font-medium capitalize">
            Projects Done
          </div>
        </div>
      </div>
    </div>
  );
};

export default Milestone;
