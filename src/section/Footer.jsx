import Email from "../components/Email";

const Footer = () => {
  return (
    <div className="bg-[#28519A] text-white">
      <div className="flex justify-evenly container py-10">
        <div className="w1/4 px-10">
          <img src="/Logo.png" alt="logo" />
          <p className="mt-4">
            Through Limited is your ultimate <br /> partner for success.
          </p>
        </div>
        <div className="w1/4">
          <p className="font-semibold text-xl mb-3">Product</p>
          <div className="flex flex-col gap-2 font-light">
            <p>Home</p>
            <p>About Us</p>
            <p>Services</p>
            <p>Contact</p>
            <p>Updates</p>
          </div>
        </div>
        <div className="w1/4">
          <p className="font-semibold text-xl mb-3">Remainig</p>
          <div className="flex flex-col gap-2 font-light">
            <p>Blog</p>
            <p>Newsletter</p>
            <p>Help Center</p>
            <p>Careers</p>
            <p>Support</p>
          </div>
        </div>
        <div className="w1/4">
          <p className="font-semibold text-xl mb-3">Newsletter</p>
          <div className="w-full bg-white rounded-md">
            <Email />
          </div>
        </div>
      </div>

      <div className="w-[90%] h-[1px] mx-auto bg-white" />

      <div className="text-center py-10">
        Copyright © 2024 Through ED Limited. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
