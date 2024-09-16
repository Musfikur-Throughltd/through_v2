import Email from "../components/Email";

const Newsletter = () => {
  return (
    <div className="bg-gray-200 py-20 flex flex-col items-center justify-center">
      <p className="text-blue-900 text-3xl font-medium text-center">
        Let’s Create Your Next Big Project Together
      </p>
      <p className="text-center text-xs text-gray-600 mt-3 mb-10">
        Apparently we had reached a great height in the atmosphere, for the sky
        was a dead black, and the stars had.
      </p>
      <Email />
    </div>
  );
};

export default Newsletter;
