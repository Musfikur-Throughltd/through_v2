import aboutImage from '../../public/about-us.png'
import icon from '../../public/Frame.png'
import Button from '../components/Button';
const AboutUs = () => {
    return (
        <div id='aboutUs' className="max-w-screen-xl mx-auto mb-20">

            <div className="flex  justify-between flex-col lg:flex-row md:flex-col">
                <div className='lg:w-[500px] lg:ml-12 lg:mt-20'>
                    <h4 className='text-[#28519A] md:text-[40px] text-[40px] lg:text-[30px] font-semibold mb-3 md:text-center lg:text-start text-center'>About Us</h4>
                    <h2 className='lg:text-4xl md:text-4xl text-2xl font-semibold mb-8 md:text-center lg:text-start text-center'>First Ever Performance<br/>
                        Driven Company</h2>
                    <div className='space-y-5 md:px-12 lg:px-0 px-4'>
                            <div className='flex justify-center items-start gap-2 '>
                                <img className='mt-2' src={icon} alt="" />
                            <p className='text-[#777]  text-base leading-[26px] '>Through Limited is dedicated to providing analytics-driven digital marketing, comprehensive three-sixty communication, software engineering, and crisis management solutions.</p>
                            
                            </div>
                            <div className='flex justify-center items-start gap-2'>
                                <img className='mt-2' src={icon} alt="" />
                            <p className='text-[#777] text-base leading-[26px]'>The company has been designed to deliver all kinds of solutions to any complex crisis for any business or individual in helping to achieve its consumers' goals of staying ahead of the curve in the rapidly evolving market through the pioneering specialized team and expert personnel.</p>
                            
                            </div>
                            <div className='flex justify-center items-start gap-2'>
                            <img className='mt-2' src={icon} alt="" />
                            <p className='text-[#777] text-base leading-[26px]'>With a steadfast commitment to delivering excellence, Through Limited has quickly become the ultimate provider of the tools and resources that consumers need to succeed since its inception in 2019.</p>
                            
                            </div>
                        </div>
                       <div className='mt-12'>
                        <Button />
                       </div>
                </div>
                <div className='flex flex-col justify-center items-center mt-16 lg:px-0 md:px-0 px-5'>
                    <img src={aboutImage} alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default AboutUs;