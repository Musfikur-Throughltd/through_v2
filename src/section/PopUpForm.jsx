import React from "react";

const PopUpForm = () => {
  return (
    <div className="w-[682px] py-[25px] px-[40px] mx-auto">
      <p className="text-[36px] font-bold">Let’s Talk</p>
      <p className="text-[12px]">
        Have some big idea or brand to develop and need help? Then reach out
        we'd love to hear about your project and provide help
      </p>

      <form action="#">
        <div className="flex flex-col my-5 gap-2">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Your Full Name"
            className="rounded-md px-3 py-2 border"
          />
        </div>

        <div className="flex flex-col my-5 gap-2">
          <label htmlFor="gender">Gender</label>
          <div className="flex gap-2">
            <input type="radio" name="male" id="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="female" id="female" />
            <label htmlFor="female">Female</label>
          </div>
        </div>

        <div className="flex flex-row my-5 gap-2">
          <div className="flex flex-col my-5 gap-2 w-1/2">
            <label htmlFor="jobTitle">Job Title</label>
            <input
              type="text"
              name="jobTitle"
              id="jobTitle"
              placeholder="Job Title"
              className="rounded-md px-3 py-2 border"
            />
          </div>

          <div className="flex flex-col my-5 gap-2 w-1/2">
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              placeholder="Company Name"
              className="rounded-md px-3 py-2 border"
            />
          </div>
        </div>

        <div className="flex flex-col my-5 gap-2">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            className="rounded-md px-3 py-2 border"
          />
        </div>

        <div className="flex flex-col my-5 gap-2">
          <label htmlFor="mobileNumber">Mobile number</label>
          <input
            type="tel"
            name="mobileNumber"
            id="mobileNumber"
            placeholder="Mobile Number"
            className="rounded-md px-3 py-2 border"
          />
        </div>

        <div className="flex flex-col my-5 gap-2">
          <label htmlFor="homeAddress">Your Home Address</label>
          <textarea
            name="homeAddress"
            id="homeAddress"
            className="rounded-md px-3 py-2 border"
          ></textarea>
        </div>

        <div className="flex flex-col my-5 gap-2">
          <label htmlFor="challenge">
            What's your main marketing or technology challenge?
          </label>
          <textarea
            name="challenge"
            id="challenge"
            className="rounded-md px-3 py-2 border"
          ></textarea>
        </div>

        <div className="flex flex-col my-5 gap-2">
          <label htmlFor="currentlyHave">
            Do you currently have a website or mobile app for your business?
          </label>

          <div className="flex gap-2">
            <input type="radio" name="yes" id="yes" />
            <label htmlFor="yes">Yes</label>

            <input type="radio" name="no" id="no" />
            <label htmlFor="no">No</label>
          </div>
        </div>

        <div className="flex flex-col my-5 gap-2">
          <label htmlFor="channels">
            Which Digital marketing channels are you currently using?
          </label>
          <div className="flex flex-row gap-5">
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <input type="checkbox" name="facebook" id="facebook" />
                <label htmlFor="facebook">Facebook</label>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" name="linkedin" id="linkedin" />
                <label htmlFor="linkedin">Linkedin</label>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" name="instagram" id="instagram" />
                <label htmlFor="instagram">Instagram</label>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <input type="checkbox" name="youtube" id="youtube" />
                <label htmlFor="youtube">Youtube</label>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" name="tiktok" id="tiktok" />
                <label htmlFor="tiktok">Tiktok</label>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" name="x" id="x" />
                <label htmlFor="x">X (Twitter)</label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col  my-5 gap-2">
          <label htmlFor="meeting">
            Are you looking for an online or offline meeting? offline meeting is
            only applicable for Dhaka, Bangladesh.
          </label>
          <div className="flex gap-2">
            <input type="radio" name="yes" id="yes" />
            <label htmlFor="yes">Yes</label>
            <input type="radio" name="no" id="no" />
            <label htmlFor="no">No</label>
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#28519A] w-full rounded-md py-3 text-white"
        >
          SUBMIT{" "}
        </button>
      </form>
    </div>
  );
};

export default PopUpForm;
