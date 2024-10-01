import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const clients = [
  { image: "image 7.png", name: "Borderless Clinic" },
  { image: "image 8.png", name: "Army IBA - Sylhet" },
  { image: "image 9.png", name: "Creative Media Ltd." },
  { image: "image 10.png", name: "Borderless Healthcare Group" },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const OurProjects = () => {
  return (
    <div className=" container mx-auto h-full flex flex-col justify-center items-center gap-4 p-4">
      {/* Heading Section */}
      <div className="space-y-2 mb-8 text-center">
        {/* Title */}
        <h2 className="text-3xl text-blue-900 font-semibold">
          Satisfied Clients
        </h2>

        <p className=" max-w-[740px] text-center text-gray-500 text-xl font-normal leading-7 mb-10">
          Explore the groundbreaking projects powered by Through ED Limited,
          showcasing its remarkable capabilities and transformative impact
          across diverse industries.
        </p>
      </div>

      {/* Projects Display */}
      <div className="w-full ">
        {/* Slider for mobile view */}
        <Slider {...sliderSettings}>
          {clients.map((client, i) => (
            <div key={i} className="p-5 text-blue-900">
              <img
                src={client.image}
                alt={client.name}
                className="w-32 h-32 mx-auto mb-2"
              />
              <div className="text-lg text-center font-semibold capitalize mb-2">
                {client.name}
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* <div className="hidden md:flex">
 Grid for larger screens 
        {clients.map((client, i) => (
          <div key={i} className="p-5 text-blue-900">
            <img
              src={client.image}
              alt={client.name}
              className="w-32 h-32 mx-auto mb-2"
            />
            <div className="text-lg text-center font-semibold capitalize mb-2">
              {client.name}
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default OurProjects;
