import { useEffect, useState } from "react";
import PopUpForm from "../section/PopUpForm";

const Button = () => {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden"; // Disable body scroll when modal is open
    } else {
      document.body.style.overflowY = "auto"; // Re-enable body scroll when modal closes
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModal]);

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      setOpenModal(false); // Close modal when clicking outside of the modal content (on backdrop)
    }
  };

  return (
    <div>
      <button
        onClick={() => setOpenModal(true)}
        className="flex items-center justify-center gap-2 bg-[#28519A] lg:px-7 lg:py-2 md:px-6 md:py-2 px-3 py-1 text-white rounded-full lg:text-[18px] md:text-[18px] text-[12px] md:ml-[260px] lg:ml-0 ml-36 group" // Added 'group' for hover effect targeting
      >
        <span className="font-medium">Get a Quote</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 pt-1 transition-transform duration-300 ease-in-out transform group-hover:translate-x-2" // Added transition and transform properties
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>

      {openModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleOutsideClick}
        >
          <div
            className={`relative overflow-y-auto max-h-screen w-full max-w-4xl bg-white rounded-lg shadow-2xl transform transition-all duration-300 ease-in-out ${
              openModal
                ? "translate-y-0 opacity-100"
                : "translate-y-32 opacity-0"
            }`}
          >
            <main className="relative w-full p-4 sm:p-6 lg:p-8 py-8 text-left">
              {" "}
              <button
                onClick={() => setOpenModal(false)}
                className="absolute top-4 right-4 text-4xl text-[#28519A] hover:text-red-500"
              >
                &times;
              </button>
              <div className="mt-12 text-left">
                <PopUpForm />
              </div>
            </main>
          </div>
        </div>
      )}
    </div>
  );
};

export default Button;
