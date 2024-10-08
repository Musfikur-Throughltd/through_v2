import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Icon from "/Frame.png";

const AnimationAccroding = ({ setShowFinalTextProp }) => {
  const dataArr = [
    {
      title: "Through Limited Overview",
      description:
        "Through Limited is dedicated to providing analytics-driven digital marketing, comprehensive three-sixty communication, software engineering, and crisis management solutions.",
    },
    {
      title: "Crisis Management Solutions",
      description:
        "The company has been designed to deliver all kinds of solutions to any complex crisis for any business or individual in helping to achieve its consumers' goals of staying ahead of the curve in the rapidly evolving market through the pioneering specialized team and expert personnel.",
    },
    {
      title: "Commitment to Excellence",
      description:
        "With a steadfast commitment to delivering excellence, Through Limited has quickly become the ultimate provider of the tools and resources that consumers need to succeed since its inception in 2019.",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const [activeIndex, setActiveIndex] = useState(-1);
  const [showFinalText, setShowFinalText] = useState(false);
  const [hideAllAccordions, setHideAllAccordions] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAccordionAnimation();
        } else {
          resetAccordion();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const startAccordionAnimation = () => {
    let index = -1;
    const intervalId = setInterval(() => {
      index += 1;
      if (index < dataArr.length) {
        setActiveIndex(index);
      } else {
        clearInterval(intervalId);
        setTimeout(() => {
          setHideAllAccordions(true);
          setShowFinalText(true);
          setShowFinalTextProp(true); // Pass true to parent
        }, 2000);
      }
    }, 2000);
  };

  const resetAccordion = () => {
    setActiveIndex(-1);
    setShowFinalText(false);
    setHideAllAccordions(false);
    setShowFinalTextProp(false); // Pass false to parent
  };

  return (
    <div ref={sectionRef} className="flex w-full justify-center">
      <div className="max-w-[550px] cursor-pointer space-y-6">
        {dataArr.map((data, idx) => (
          <div
            key={idx}
            className={`flex items-center transition-all duration-500 ease-in-out ${activeIndex >= idx && !hideAllAccordions ? "opacity-100" : "opacity-0 h-0"
              }`}
          >
            <div className="flex size-16 select-none items-center justify-center rounded-md  text-2xl font-semibold text-white">
              <img className="w-8" src={Icon} alt="" />
            </div>
            <div className="relative h-[1px] w-10 bg-[#28519A]">
              <span className="absolute -left-2 -top-[3px] z-40 h-2 w-2 rounded-full border-2 border-zinc-700 bg-white"></span>
              <span className="h-1 w-10 bg-[#28519A]"></span>
              <span className="absolute -right-2 -top-[3px] z-40 h-2 w-2 rounded-full border-2 border-zinc-700 bg-white"></span>
            </div>
            <div className="text-center">
              <div className="relative max-w-[450px]  p-3 border-b ">
                <h1 className="select-none text-xl text-[#28519A]">{data.title}</h1>
              </div>
              <div
                className={`grid overflow-hidden text-slate-600 transition-all shadow-xl duration-500 ease-in-out ${activeIndex >= idx && !hideAllAccordions
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                  }`}
              >
                <div className="overflow-hidden">
                  <div className="max-w-[450px] bg-white rounded-md  p-6 text-sm text-black">
                    {data.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {showFinalText && (
          <Slider {...sliderSettings}>
            {dataArr.map((data, idx) => (
              <div key={idx} className="flex justify-center items-center mb-3">
                <div className=" bg-white pb-3  border-b">
                  <h1 className="select-none text-xl text-[#28519A]">{data.title}</h1>
                </div>
                <div className={`grid overflow-hidden text-slate-600 transition-all shdow-md duration-500 ease-in-out grid-rows-[1fr] bg-white w-full max-w-[450px]`}>
                  <div className="overflow-hidden">
                    <div className="bg-white rounded-md p-6 text-sm text-black -ml-5">
                      {data.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default AnimationAccroding;
