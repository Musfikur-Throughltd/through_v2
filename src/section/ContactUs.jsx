import faceebook from '../../public/logo_facebook_24.png'
import google from '../../public/logo_google_24.png'
import insta from '../../public/logo_instagram_24.png'
import skype from '../../public/logo_skype_24.png'
import twiter  from '../../public/logo_twitter_24.png'
import map from '../../public/🌎 Map Maker_ Gulshan, Dhaka, ঢাকা, Dhaka, Bangladesh (Standard).png'
import Location from '../../public/Location.png'
import gmail from '../../public/gmail (1).png'
import call  from '../../public/call.png'
const ContactUs = () => {
    return (
        <div id='contact' className="max-w-screen-xl mx-auto mb-20">
            <div className="flex  justify-between  flex-col lg:flex-row md:flex-col">
                <div className='lg:w-[500px] lg:ml-16 lg:mt-20'>
                    <h4 className='text-[#28519A] md:text-[40px] text-[40px] lg:text-[30px] font-semibold mb-3 md:text-center lg:text-start text-center'>Contact Us</h4>
                    <h2 className='lg:text-4xl md:text-4xl text-2xl font-semibold mb-8 md:text-center lg:text-start text-center'>We Would Love To<br />
                        Hear From You</h2>
                    <div className='space-y-10 md:px-0 lg:px-0 px-4 '>
                        <div className='flex justify-center items-center md:justify-center lg:justify-start gap-4 ml-10 md:ml-8 lg:ml-0'>
                            <img className='mt-2 w-[34px] h-[34px]' src={Location} alt="Location Icon" />
                            <span className="text-xl font-medium">
                                Address
                                <p className="text-[16px] underline font-normal text-[#777]">Gulshan 01, Dhaka - 1212</p>
                            </span>
                        </div>

                        <div className='flex justify-center items-center md:justify-center lg:justify-start gap-4'>
                            <img className='mt-2 w-[34px] h-[34px]' src={call} alt="Call Icon" />
                            <span className="text-xl font-medium">
                                Call Us
                                <p className="text-[16px] font-normal text-[#777]">+88 017-979-25-566</p>
                            </span>
                        </div>

                        <div className='flex justify-center items-center md:justify-center lg:justify-start gap-4 ml-3 md:ml-0'>
                            <img className='mt-2 w-[34px] h-[34px]' src={gmail} alt="Email Icon" />
                            <span className="text-xl font-medium">
                                Email Us
                                <a href="#" className='text-[16px] font-normal text-[#777] underline'>mail@throughltd.com</a>
                            </span>
                        </div>
                    </div>


                    <hr className='border-b lg:w-[480px] border border-[#777] mt-6 mb-12 ' />

                    <div className="flex gap-6 items-center lg:justify-start md:justify-center justify-center -mt-5 ">
                        <div className='bg-[#dfe5f0] flex justify-center items-center lg:w-[56px] lg:h-[56px] md:w-[56px] md:h-[56px] w-[32px] h-[32px]  rounded-full '>
                            <img className='lg:w-[26px] md:w-[26px]  w-[16px]' src={faceebook} alt="" />
                        </div>
                        <div className='bg-[#dfe5f0] flex justify-center items-center lg:w-[56px] lg:h-[56px] md:w-[56px] md:h-[56px] w-[32px] h-[32px]  rounded-full '>
                            <img className='lg:w-[26px] md:w-[26px]  w-[16px]' src={google} alt="" />
                        </div>
                        <div className='bg-[#dfe5f0] flex justify-center items-center lg:w-[56px] lg:h-[56px] md:w-[56px] md:h-[56px] w-[32px] h-[32px]  rounded-full '>
                            <img className='lg:w-[26px] md:w-[26px]  w-[16px]' src={insta} alt="" />
                        </div>
                        <div className='bg-[#dfe5f0] flex justify-center items-center lg:w-[56px] lg:h-[56px] md:w-[56px] md:h-[56px] w-[32px] h-[32px]  rounded-full '>
                            <img className='lg:w-[26px] md:w-[26px]  w-[16px]' src={skype} alt="" />
                        </div>
                        <div className='bg-[#dfe5f0] flex justify-center items-center lg:w-[56px] lg:h-[56px] md:w-[56px] md:h-[56px] w-[32px] h-[32px]  rounded-full '>
                            <img className='lg:w-[26px] md:w-[26px]  w-[16px]' src={twiter} alt="" />
                        </div>
                    </div>
                    
                </div>
                <div className='flex flex-col justify-center items-center mt-16 lg:px-0 md:px-0 px-5'>
                    <img src={map} alt="" />
                </div>
            </div>

        
            
        </div>
    );
};

export default ContactUs;