import { useState } from "react";

const Email = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    alert(`Email submitted: ${email}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-md text-gray-400 py-3 px-4 w-full flex items-center"
    >
      <div className="flex flex-1 items-center">
        <p className="pr-3 text-xl">📧</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 p-2 rounded-md text-gray-700"
        />
      </div>
      <button
        type="submit"
        className="bg-[#28519A] p-2 ml-4 rounded-md text-white hover:bg-blue-800 transition-colors duration-300"
      >
        SUBMIT
      </button>
    </form>
  );
};

export default Email;
