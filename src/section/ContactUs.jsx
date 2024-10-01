import faceebook from "/logo_facebook_24.png";
import google from "/logo_google_24.png";
import insta from "/logo_instagram_24.png";
import skype from "/logo_skype_24.png";
import twiter from "/logo_twitter_24.png";
import Location from "/Location.png";
import gmail from "/gmail (1).png";
import call from "/call.png";

const ContactUs = () => {
  return (
    <div id="contact" className="container mx-auto mt-10 mb-20 px-4">
      <div className="flex flex-col gap-16 lg:flex-row items-center lg:justify-between">
        <div className="flex-1 lg:w-[500px] lg:ml-16 lg:mt-20">
          <h4 className="text-[#28519A] text-3xl md:text-4xl lg:text-4xl font-semibold mb-3 text-center lg:text-start">
            Contact Us
          </h4>
          <h2 className="text-xl md:text-3xl lg:text-2xl font-semibold mb-8 text-center lg:text-start">
            We Would Love To Hear From You
          </h2>
          <div className="space-y-6">
            <ContactInfo
              icon={Location}
              label="Address"
              detail={
                <a
                  href="https://maps.app.goo.gl/Pwqenm2wKNyKp2rV6"
                  target="blank"
                >
                  Gulshan 01, Dhaka - 1212
                </a>
              }
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
                <a
                  href="mailto:mail@throughltd.com"
                  className="underline"
                  target="blank"
                >
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
        <div className=" px-2 map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0431906669082!2d90.41431217549555!3d23.78147627864923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a6d0157951%3A0x9c8da615f3948bee!2s01%20Gulshan%20Ave%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1726590132732!5m2!1sen!2sbd"
            className=" w-[300px] lg:w-[450px]"
            height="320"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
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
