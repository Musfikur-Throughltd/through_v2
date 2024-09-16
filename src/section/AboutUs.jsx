import React, { useState } from "react";
import Button from "../components/Button";
import aboutImage from '../../public/about-us.png';
import icon from '../../public/Frame.png';

const AboutUs = () => {
    // Track the current content index for small devices
    const [currentIndex, setCurrentIndex] = useState(0);

    // Content array
    const content = [
        "Through Limited is dedicated to providing analytics-driven digital marketing, comprehensive three-sixty communication, software engineering, and crisis management solutions.",
        "The company has been designed to deliver all kinds of solutions to any complex crisis for any business or individual in helping to achieve its consumers' goals of staying ahead of the curve in the rapidly evolving market through the pioneering specialized team and expert personnel.",
        "With a steadfast commitment to delivering excellence, Through Limited has quickly become the ultimate provider of the tools and resources that consumers need to succeed since its inception in 2019."
    ];

    // Handle next content
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
    };

    return (
        <div id='aboutUs' className="max-w-screen-xl mx-auto lg:mb-32 md:mb-32">
            <div className="flex justify-between flex-col lg:flex-row md:flex-col">
                <div className='lg:w-[500px] lg:ml-12 lg:mt-20'>
                    <h4 className='text-[#28519A] md:text-[40px] text-[40px] lg:text-[30px] font-semibold mb-3 md:text-center lg:text-start text-center'>
                        About Us
                    </h4>
                    <h2 className='lg:text-4xl md:text-3xl text-xl font-semibold mb-8 md:text-center lg:text-start text-center'>
                        First Ever Performance
                        <br className='hidden sm:block' />
                        Driven Company
                    </h2>

                    <div className='space-y-5 lg:px-0 md:px-12 px-4 relative'>
                        {/* SVG button for small devices */}
                        <div
                            className="absolute right-4 -top-8 border-2 border-[#777] hover:bg-black hover:text-white animate-pulse flex flex-col justify-center items-center w-7 h-7 rounded-full lg:hidden md:hidden cursor-pointer"
                            onClick={handleNext}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </div>

                        {/* Small devices content */}
                        <div className='lg:hidden md:hidden'>
                            <div className='flex justify-center items-start gap-2 shadow-xl px-5 py-5 border-2 border-t rounded-xl'>
                                <img className='mt-2' src={icon} alt="Icon" />
                                <p className='text-[#777] text-base leading-[26px]'>
                                    {content[currentIndex]}
                                </p>
                            </div>
                        </div>

                        {/* Medium and large devices content */}
                        <div className='hidden lg:block md:block'>
                            {content.map((text, index) => (
                                <div key={index} className='flex justify-center items-start gap-4 md:mb-5 md:shadow-none shadow-xl lg:px-0 md:px-5 lg:py-0 md:py-5 px-5 py-5 lg:border-none border-2 border-t rounded-xl'>
                                    <img className='mt-2' src={icon} alt="Icon" />
                                    <p className='text-[#777] text-base leading-[26px]'>
                                        {text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className='mt-12'>
                        <Button />
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center mt-16 lg:px-0 md:px-0 px-5'>
                    <img className='hidden sm:block' src={aboutImage} alt="About Us" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
