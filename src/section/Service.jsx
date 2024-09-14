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
    <div className="container mx-auto">
      <p className="text-center text-[#28519A] text-3xl">OUR SERVICES </p>
      <p className="text-center text-3xl mt-3 mb-10 font-thin">
        We Focus On Making The Best In All Sectors
      </p>

      <div className="grid grid-cols-3 gap-4">
        {content.map((cont, i) => (
          <div
            key={i}
            className="border p-5 rounded-md text-[#28519A] hover:bg-[#28519A] hover:text-white transition-all ease-in-out duration-600"
          >
            <img src={cont.icon} alt={cont.icon} />
            <p className="text-2xl font-semibold my-3">{cont.headline}</p>
            <p className="font-light"> {cont.text} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
