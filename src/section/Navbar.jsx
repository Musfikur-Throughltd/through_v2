import { useState, useRef, useEffect } from 'react';
import Logo from '../../public/Logo (2).png';
import '../App.css';

const Navbar = () => {
    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();

    useEffect(() => {
        const closeDropDown = (e) => {
            if (!dropDownMenuRef?.current?.contains(e?.target)) {
                setDropDownState(false);
            }
        };

        document.addEventListener('mousedown', closeDropDown);

        return () => {
            document.removeEventListener('mousedown', closeDropDown);
        };
    }, []);

    return (
        <nav className="flex items-center justify-between px-4 py-2 max-w-screen-xl mx-auto">
            <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
                <img className='w-[130px]' src={Logo} alt="Logo" />
            </div>

            {/* Full menu for larger devices */}
            <ul className="hidden items-center justify-between gap-10 md:flex">
                <li className="group flex cursor-pointer flex-col font-semibold hover:text-[#28519A]">
                    Home<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-[#28519A] transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="group flex cursor-pointer flex-col font-semibold hover:text-[#28519A]">
                    <a href="#aboutUs">About Us</a>
                    <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-[#28519A] transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="group flex cursor-pointer flex-col font-semibold hover:text-[#28519A]">
                    <a href="#services">Services</a>
                    <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-[#28519A] transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="group flex cursor-pointer flex-col font-semibold hover:text-[#28519A]">
                    <a href="#contact">Contact</a>
                    <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-[#28519A] transition-all duration-300 group-hover:w-full"></span>
                </li>
            </ul>

            {/* Drawer Menu for small devices */}
            <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer">
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
                {/* Sidebar Drawer */}
                <div
                    className={`fixed top-0 right-0 h-full backdrop-blur-3xl z-50 w-full transform transition-transform duration-500 ease-in-out ${dropDownState ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    {/* Close Button */}
                    <div className="flex justify-between p-4">

                    <img className='w-20' src={Logo} alt="" />

                        <button onClick={() => setDropDownState(false)} className="text-[#28519A] text-2xl">
                            &times;
                        </button>
                    </div>

                    <ul className="flex flex-col justify-center items-center text-xl gap-6 mt-2 text-black">
                        <hr className="border-t border-gray-700 w-full " />
                        <li className="cursor-pointer py-2  hover:text-[#28519A] font-semibold">Home</li>
                        <li className="cursor-pointer py-2  hover:text-[#28519A] font-semibold"><a href="#aboutUs">About Us</a></li>
                        <li className="cursor-pointer py-2  hover:text-[#28519A] font-semibold"><a href="#services">Services</a></li>
                        <li className="cursor-pointer py-2  hover:text-[#28519A] font-semibold"><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
