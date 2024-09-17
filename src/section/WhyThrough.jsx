import React from "react";
import Frame2 from "../../public/Frame 2.png";
import Frame3 from "../../public/1678637136_en-idei-club-p-travel-agency-office-design-krasivo-5 1.png";
import Icon1 from "../../public/why-icon1 (1).png";
import Icon2 from "../../public/why-icon1 (2).png";
import Icon3 from "../../public/why-icon1 (3).png";
import watch from "../../public/watch.png";

const WhyThrough = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex flex-col gap-6">
          <img
            className="w-full hidden lg:block lg:w-[485px]  "
            src={Frame2}
            alt="Decorative frame"
          />
          <div className="relative w-full hidden lg:block lg:w-[485px] h-[204px]">
            <div className="absolute inset-0 bg-black bg-opacity-60 rounded-[30px]"></div>
            <img
              className="w-full h-[204px] rounded-[30px] "
              src={Frame3}
              alt="Office design with a decorative overlay"
            />
            <img
              className="absolute bottom-[70px] animate-pulse left-1/2 w-[220px] h-[38px] transform -translate-x-1/2"
              src={watch}
              alt="Watch"
            />
          </div>
        </div>

        <div className="flex-1">
          <div className="space-y-2 mb-8 lg:text-start text-center md:text-center">
            {/* Title */}
            <h2 className="text-3xl text-blue-900 font-semibold">
              Why Through Limited?
            </h2>
            {/* Subtitle */}
            <p className="text-lg text-gray-500 pt-3 mb-10">
              Explore our range of services and let us be the catalyst for your
              growth.
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                icon: Icon1,
                title: "Expert Personnel",
                description:
                  "Our pioneering specialized team and expert personnel are committed to delivering tailored solutions to help you achieve your goals.",
              },
              {
                icon: Icon2,
                title: "Proven Excellence",
                description:
                  "Since our inception in 2019, Through Limited has quickly emerged as the go-to provider for tools and resources essential for success.",
              },
              {
                icon: Icon3,
                title: "Staying Ahead of the Curve",
                description:
                  "In a rapidly evolving market, we empower you to stay ahead of the curve through strategic insights and forward-thinking solutions.",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-5 items-start">
                <img
                  className="w-[54px] h-[54px] mt-1"
                  src={item.icon}
                  alt={`Icon for ${item.title}`}
                />
                <div className="space-y-1">
                  <h3 className="text-lg lg:text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600 pb-5">
                    {item.description}
                  </p>
                  <hr className="w-full py-1 h-[1px] border-gray-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyThrough;
