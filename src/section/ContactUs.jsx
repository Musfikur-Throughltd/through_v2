import faceebook from "../../public/logo_facebook_24.png";
import google from "../../public/logo_google_24.png";
import insta from "../../public/logo_instagram_24.png";
import skype from "../../public/logo_skype_24.png";
import twiter from "../../public/logo_twitter_24.png";
import map from "../../public/🌎 Map Maker_ Gulshan, Dhaka, ঢাকা, Dhaka, Bangladesh (Standard).png";
import Location from "../../public/Location.png";
import gmail from "../../public/gmail (1).png";
import call from "../../public/call.png";

const ContactUs = () => {
  return (
    <div id="contact" className="max-w-screen-xl mx-auto mt-10 mb-20 px-4">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
        <div className="lg:w-[500px] lg:ml-16 lg:mt-20">
          <h4 className="text-[#28519A] text-3xl md:text-4xl lg:text-3xl font-semibold mb-3 text-center lg:text-start">
            Contact Us
          </h4>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-center lg:text-start">
            We Would Love To Hear From You
          </h2>
          <div className="space-y-6">
            <ContactInfo
              icon={Location}
              label="Address"
              detail="Gulshan 01, Dhaka - 1212"
            />
            <ContactInfo
              icon={call}
              label="Call Us"
              detail="+88 017-979-25-566"
            />
            <ContactInfo
              icon={gmail}
              label="Email Us"
              detail={
                <a href="mailto:mail@throughltd.com" className="underline">
                  mail@throughltd.com
                </a>
              }
            />
          </div>

          <hr className="border-b border-[#777] my-12" />

          <div className="flex gap-4 justify-center lg:justify-start">
            {[
              { src: faceebook, alt: "Facebook" },
              { src: google, alt: "Google" },
              { src: insta, alt: "Instagram" },
              { src: skype, alt: "Skype" },
              { src: twiter, alt: "Twitter" },
            ].map(({ src, alt }, index) => (
              <SocialIcon key={index} src={src} alt={alt} />
            ))}
          </div>
        </div>
        <div className="mt-16 lg:mt-0">
          <img src={map} alt="Map" className="w-full max-w-md" />
        </div>
      </div>
    </div>
  );
};

const ContactInfo = ({ icon, label, detail }) => (
  <div className="flex items-center gap-4">
    <img className="w-8 h-8" src={icon} alt={`${label} Icon`} />
    <div className="text-lg">
      <div className="font-medium">{label}</div>
      <p className="text-gray-600 text-sm">{detail}</p>
    </div>
  </div>
);

const SocialIcon = ({ src, alt }) => (
  <div className="bg-[#dfe5f0] flex justify-center items-center w-14 h-14 rounded-full">
    <img className="w-6 h-6" src={src} alt={alt} />
  </div>
);

export default ContactUs;
