import Email from "../components/Email";

const Footer = () => {
  return (
    <div className="bg-[#28519A] text-white">
      {/* Container for footer content */}
      <div className="container py-10 mx-auto px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10">
          {/* Logo and description */}
          <div className="flex-1 lg:w-1/4 px-4 lg:px-10">
            <img src="/Logo.png" alt="logo" className="mb-4" />
            <p className="mt-4">
              Through Limited is your ultimate <br /> partner for success.
            </p>
          </div>

          {/* Product Links */}
          <div className="px-4 lg:px-10">
            {" "}
            {/* Changed width to 1/3 */}
            <p className="font-semibold text-xl mb-3">Product</p>
            <div className="flex flex-col gap-2 font-light">
              <p>Home</p>
              <p>About Us</p>
              <p>Services</p>
              <p>Contact</p>
              <p>Updates</p>
            </div>
          </div>

          {/* Remaining Links */}
          <div className="px-4 lg:px-10">
            {" "}
            {/* Changed width to 1/3 */}
            <p className="font-semibold text-xl mb-3">Remaining</p>
            <div className="flex flex-col gap-2 font-light">
              <p>Blog</p>
              <p>Newsletter</p>
              <p>Help Center</p>
              <p>Careers</p>
              <p>Support</p>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="flex-1 lg:w-1/4 px-4 lg:px-10">
            <p className="font-semibold text-xl mb-3">Newsletter</p>
            <div className="bg-white rounded-md px-4 w-fit">
              <Email />
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-[90%] h-[1px] mx-auto bg-white my-8" />

      {/* Copyright Notice */}
      <div className="text-center py-10">
        Copyright © 2024 Through ED Limited. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
