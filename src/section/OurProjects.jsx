const clients = [
  {
    image: "image 7.png",
    name: "Borderless Clinic",
  },
  {
    image: "image 8.png",
    name: "IBA Sylhet",
  },
  {
    image: "image 9.png",
    name: "Creative Media Ltd.",
  },
  {
    image: "image 10.png",
    name: "Borderless Healthcare Group",
  },
];

const OurProjects = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4 p-4">
      <div className="text-3xl text-blue-900 font-semibold"> Our Projects</div>
      <div className="text-center text-[#1C1C1C] text-3xl md:text-4xl font-montserrat font-semibold break-words">
        A Couple of Satisfied Clients
      </div>
      <p className="w-full max-w-3xl text-center text-gray-500 text-lg font-normal leading-7 mb-10">
        Explore the groundbreaking projects powered by Through ED Limited,
        showcasing its remarkable capabilities and transformative impact across
        diverse industries.
      </p>

      <div className="md:flex">
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
      </div>
    </div>
  );
};

export default OurProjects;
