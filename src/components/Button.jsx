import { useEffect, useState } from "react";
import PopUpForm from "../section/PopUpForm";

const Button = () => {

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [openModal]);

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      setOpenModal(false);
    }
  };


  return (
    <div>
      <button onClick={() => setOpenModal(true)} className="flex items-center justify-center gap-2 bg-[#28519A] lg:px-7 lg:py-2 md:px-6 md:py-2 px-3 py-1 text-white rounded-full lg:text-[18px] md:text-[18px] text-[12px] md:ml-[260px] lg:ml-0 ml-36"><span className="font-medium">Get a Quote</span>
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 pt-1">
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
      </svg></button>

      {openModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center"
          onClick={handleOutsideClick}
        >
          <div
            className={`absolute overflow-x-hidden overflow-y-scroll w-full h-full flex justify-center bg-white opacity-95 drop-shadow-2xl rounded-lg ${openModal ? 'translate-y-0 opacity-1 duration-300' : 'translate-y-32 opacity-0 duration-100'}`}
          >
            <main className="px-4 sm:px-6 lg:px-8 py-8">

              <div className=" border-t border-2 shadow-xl">
                <button
                  onClick={() => setOpenModal(false)}
                  className="mr-0 mx-auto flex  text-4xl px-5 pt-5  text-[#28519A] hover:text-red-500"
                >
                  &times;
                </button>
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