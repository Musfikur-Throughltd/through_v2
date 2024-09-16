import Frame2 from "../../public/Frame 2.png";
import Frame3 from "../../public/1678637136_en-idei-club-p-travel-agency-office-design-krasivo-5 1.png";
import Icon1 from "../../public/why-icon1 (1).png";
import Icon2 from "../../public/why-icon1 (2).png";
import Icon3 from "../../public/why-icon1 (3).png";
import watch from "../../public/watch.png";

const WhyThrough = () => {
  return (
    <div className="max-w-screen-xl mx-auto mb-32 px-4">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex flex-col gap-6">
          <img className="w-full lg:w-[485px]" src={Frame2} alt="" />
          <div className="relative w-full lg:w-[485px] h-[204px]">
            <div className="absolute inset-0 bg-black bg-opacity-60 rounded-[30px]"></div>
            <img
              className="w-full h-[204px] rounded-[30px]"
              src={Frame3}
              alt=""
            />
            <img
              className="absolute bottom-20 left-1/2 w-[220px] h-[38px] transform -translate-x-1/2"
              src={watch}
              alt=""
            />
          </div>
        </div>

        <div>
          <div className="space-y-2 mb-8">
            <h2
              style={{ fontFamily: "Raleway" }}
              className="text-[#28519A] text-[24px] lg:text-[30px] font-semibold"
            >
              Why Through Limited?
            </h2>
            <h2 className="text-[28px] lg:text-[36px] font-semibold leading-[34px] lg:leading-[42px]">
              Explore our range of services and <br /> let us be the catalyst
              for your <br /> growth.
            </h2>
          </div>
          <div className="space-y-7">
            <div className="flex gap-5">
              <div>
                <img className="w-[54px] h-[54px] mt-1" src={Icon1} alt="" />
              </div>
              <div className="space-y-1">
                <h3 className="text-[18px] lg:text-[22px] font-semibold">
                  Expert Personnel
                </h3>
                <p className="text-[14px] lg:text-[16px] text-[#777] pb-5">
                  Our pioneering specialized team and expert personnel are
                  committed <br />
                  to delivering tailored solutions to help you achieve your
                  goals.
                </p>
                <hr className="w-full lg:w-[618px] h-[1px] border-[#DEDEDE] -ml-[70px]" />
              </div>
            </div>
            <div className="flex gap-5">
              <div>
                <img className="w-[54px] h-[54px] mt-1" src={Icon2} alt="" />
              </div>
              <div className="space-y-1">
                <h3 className="text-[18px] lg:text-[22px] font-semibold">
                  Proven Excellence
                </h3>
                <p className="text-[14px] lg:text-[16px] text-[#777] pb-5">
                  Since our inception in 2019, Through Limited has quickly
                  emerged as <br />
                  the go-to provider for tools and resources essential for
                  success.
                </p>
                <hr className="w-full lg:w-[618px] h-[1px] border-[#DEDEDE] -ml-[70px]" />
              </div>
            </div>
            <div className="flex gap-5">
              <div>
                <img className="w-[54px] h-[54px] mt-1" src={Icon3} alt="" />
              </div>
              <div className="space-y-1">
                <h3 className="text-[18px] lg:text-[22px] font-semibold">
                  Staying Ahead of the Curve
                </h3>
                <p className="text-[14px] lg:text-[16px] text-[#777] pb-5">
                  In a rapidly evolving market, we empower you to stay ahead of
                  the <br />
                  curve through strategic insights and forward-thinking
                  solutions.
                </p>
                <hr className="w-full lg:w-[618px] h-[1px] border-[#DEDEDE] -ml-[70px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyThrough;
