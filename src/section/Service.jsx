import React from "react";

const content = [
  {
    icon: "image 2.png",
    headline: "Crisis Management",
    text: "Our ability to always exceed the expectations of our clients and produce the most creative output is what makes us unique...",
  },
  {
    icon: "Group 27.png",
    headline: "Data Analysis",
    text: "Our creative teams are comprised of a diverse range of highly specialized talent from designers, copywriters, technologists...",
  },
  {
    icon: "image 3.png",
    headline: "Public Relation",
    text: "We have a professional team of photographers who believes in capturing the imagination of audiences...",
  },
  {
    icon: "image 4.png",
    headline: "ERP Solution",
    text: "More than just anything, We First Listen To You. We specifically put this fundamental in place and involve ourselves...",
  },
  {
    icon: "image 6.png",
    headline: "Conversation Optimization",
    text: "Our digital marketing service is led by corporate communication specialists and google certified practitioners ...",
  },
  {
    icon: "image 5.png",
    headline: "Digital Brand Building",
    text: "SOZO PR, makes it count by creating an emotional bond experience between the brand and the consumer...",
  },
];

const Service = () => {
  return (
    <div id="services" className="max-w-screen-xl mx-auto mb-20 px-4">
      <div className="text-3xl text-center text-blue-900 font-semibold">
        OUR SERVICES
      </div>
      <div className="w-full max-w-3xl mx-auto mt-3 mb-10 text-center text-gray-500 text-lg font-normal leading-7">
        We Focus On Making The Best In All Sectors
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.map((cont, i) => (
          <div
            key={i}
            className="border p-5 rounded-md text-blue-900 hover:bg-blue-900 hover:text-white transition-all ease-in-out duration-300"
          >
            <img
              src={cont.icon}
              alt={cont.headline}
              className="w-16 h-16 mx-auto mb-4"
            />
            <div className="text-lg font-semibold capitalize mb-2">
              {cont.headline}
            </div>
            <div className="text-base ">{cont.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
