import { useState } from "react";

const Email = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    alert(`Email submitted: ${email}`);
  };

  return (
    <div className="bg-white rounded-md shadow-md max-w-md mx-auto flex items-center space-x-2">
      <form onSubmit={handleSubmit} className="flex items-center w-full">
        <p className="px-2 text-xl">📧</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 p-4 rounded-l-md  focus:outline-none  focus:ring-white text-black"
        />
        <button
          type="submit"
          className="bg-[#28519A] text-white rounded-r-md hover:bg-blue-800 transition-colors duration-300  p-4"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Email;
