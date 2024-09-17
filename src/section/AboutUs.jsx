import Button from "../components/Button";
import aboutImage from "/about-us.png";
import icon from "/Frame.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutUs = () => {
  // Slider settings for mobile view
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    // fade: true,
    waitForAnimate: true,
  };

  // Content array
  const content = [
    "Through Limited is dedicated to providing analytics-driven digital marketing, comprehensive three-sixty communication, software engineering, and crisis management solutions.",
    "The company has been designed to deliver all kinds of solutions to any complex crisis for any business or individual in helping to achieve its consumers' goals of staying ahead of the curve in the rapidly evolving market through the pioneering specialized team and expert personnel.",
    "With a steadfast commitment to delivering excellence, Through Limited has quickly become the ultimate provider of the tools and resources that consumers need to succeed since its inception in 2019.",
  ];

  return (
    <div
      id="aboutUs"
      className="max-w-screen-xl mx-auto lg:mb-32 md:mb-32 px-4 sm:px-6 lg:px-0"
    >
      <div className="flex flex-col lg:flex-row md:flex-col justify-between">
        {/* Text Section */}
        <div className="lg:w-[500px] lg:ml-12 lg:mt-20">
          <h4 className="text-[#28519A] text-3xl md:text-4xl lg:text-3xl font-semibold mb-3 text-center lg:text-left">
            About Us
          </h4>
          <h2 className="lg:text-4xl md:text-3xl text-xl font-semibold mb-8 text-center lg:text-left">
            First Ever Performance
            <br className="hidden sm:block" />
            Driven Company
          </h2>

          {/* Content Section */}
          <div className="space-y-5 lg:px-0 md:px-12 px-4 relative">
            {/* Mobile View Carousel */}
            <div className="lg:hidden md:hidden">
              <Slider {...sliderSettings}>
                {content.map((text, index) => (
                  <div
                    key={index}
                    className="h-[250px]" // Adjust height here
                  >
                    <img className="my-2" src={icon} alt="Icon" />
                    <p className="text-[#777] text-base leading-[26px]">
                      {text}
                    </p>
                  </div>
                ))}
              </Slider>
            </div>

            {/* Medium and Large Devices Content (Static) */}
            <div className="hidden lg:block md:block">
              {content.map((text, index) => (
                <div
                  key={index}
                  className="flex justify-center items-start gap-4 mb-5 shadow-xl lg:shadow-none px-5 py-2 border-2 lg:border-none rounded-xl"
                >
                  <img className="mt-2" src={icon} alt="Icon" />
                  <p className="text-[#777] text-base leading-[26px]">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="mt-12 text-center lg:text-left">
            <Button />
          </div>
        </div>

        {/* Image Section */}
        <div className="flex flex-col justify-center items-center mt-16 lg:px-0 md:px-0 px-5 lg:mr-12">
          <img
            className="hidden sm:block w-full h-auto"
            src={aboutImage}
            alt="About Us"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
