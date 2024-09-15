import Email from "../components/Email";

const Newsletter = () => {
  return (
    <div className="bg-[#E9E9E9] py-20 flex flex-col items-center justify-center">
      <p className="text-[#28519A] text-3xl font-medium">
        Let’s Create Your Next Big Project Together
      </p>
      <p className="text-center text-xs mt-3 mb-10">
        Apparently we had reached a great height in the atmosphere, for the sky
        was a dead <br /> black, and the stars had.
      </p>
      <div className="w-[30%] mx-auto">
        <Email />
      </div>
    </div>
  );
};

export default Newsletter;
