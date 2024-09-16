import { useState } from "react";

const Email = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    alert(`Email submitted: ${email}`);
  };

  return (
    <div className="bg-white rounded-md shadow-md max-w-md mx-auto flex items-center space-x-4">
      <form onSubmit={handleSubmit} className="flex-1 flex items-center">
        <div className="flex items-center flex-1">
          <p className="px-3 text-xl">📧</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 p-4 rounded-md"
          />
        </div>
      </form>
      <button
        onClick={handleSubmit}
        className="bg-[#28519A] text-white rounded-r-md hover:bg-blue-800 transition-colors duration-300 py-4 px-4"
      >
        SUBMIT
      </button>
    </div>
  );
};

export default Email;
