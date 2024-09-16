import Rectangle1 from '../../public/Rectangle 24.png'
import Rectangle2 from '../../public/Rectangle 25.png'
import Rectangle3 from '../../public/Rectangle 26.png'
import Rectangle4 from '../../public/Rectangle 27.png'
import Button from '../components/Button'
const Hero = () => {
  return (
    <div className="max-w-screen-xl mx-auto mb-20">
      <div className=" items-center grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1  gap-56 justify-between ">
        <div className="lg:w-[680px] md:w-[680px]  w-[400px] lg:h-[620px] md:h-[420px] space-y-8 lg:pt-32 pt-12 md:pt-20 md:text-center text-center lg:text-start ml-8">
          <h1 className="lg:text-4xl md:text-5xl text-2xl font-semibold -mt-7 lg:leading-[45px]">
            Advancing <span className="text-[#28519A]">Businesses and 
              <span className="hidden lg:inline"> <br /> </span>
                {""} Individuals
            </span> with
            <span className="hidden md:inline"> <br /> </span>
            Performance-focused
            <span className="hidden md:inline"> <br /> </span>
            solutions.
          </h1>
          <p className="text-[#777] lg:text-[18px] md:text-[16px] text-[12px]">With a focus on excellence and a commitment to customer satisfaction, Through Limited is your ultimate partner for success. We offer a comprehensive range of services, from digital marketing to software engineering, for businesses and individuals looking to succeed in today's fast-paced market.</p>
          <Button />

        </div>
        <div className="-mt-32 lg:-mt-0 md:-mt-0">

          <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-10 md:ml-28 lg:ml-0 ml-24'>
            <img className='' src={Rectangle2} alt="" />
            <img className='lg:-mt-7 md:-mt-7  lg:-ml-0 md:-ml-16' src={Rectangle4} alt="" />
            <img className='' src={Rectangle1} alt="" />
            <img className='lg:-mt-[143px] md:-mt-[143px] lg:-ml-0 md:-ml-16' src={Rectangle3} alt="" />

          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;