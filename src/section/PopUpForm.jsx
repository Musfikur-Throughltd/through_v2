import React, { useState } from "react";

const PopUpForm = () => {
  // State to store form input values
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    jobTitle: "",
    companyName: "",
    email: "",
    mobileNumber: "",
    homeAddress: "",
    challenge: "",
    hasWebsiteOrApp: "",
    digitalMarketingChannels: [],
    meetingType: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      // For checkboxes, handle array update
      setFormData((prevData) => {
        if (checked) {
          return {
            ...prevData,
            digitalMarketingChannels: [
              ...prevData.digitalMarketingChannels,
              name,
            ],
          };
        } else {
          return {
            ...prevData,
            digitalMarketingChannels: prevData.digitalMarketingChannels.filter(
              (channel) => channel !== name
            ),
          };
        }
      });
    } else {
      // Handle other input types
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Basic form validation (you can expand this)
    if (!formData.name || !formData.email) {
      alert("Please fill in your name and email");
      return;
    }

    // Perform any desired action with form data (e.g., send to API)
    console.log("Form Data Submitted:", formData);

    // Clear form fields after submission (optional)
    setFormData({
      name: "",
      gender: "",
      jobTitle: "",
      companyName: "",
      email: "",
      mobileNumber: "",
      homeAddress: "",
      challenge: "",
      hasWebsiteOrApp: "",
      digitalMarketingChannels: [],
      meetingType: "",
    });

    alert("Form submitted successfully!");
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8 bg-white shadow-lg rounded-lg z-50">
      <h1 className="text-2xl font-bold mb-4">Let’s Talk</h1>
      <p className="text-sm mb-6">
        Have a big idea or brand to develop and need help? Reach out—we'd love
        to hear about your project and provide assistance.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-medium">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Your Full Name"
            value={formData.name}
            onChange={handleChange}
            className="rounded-md px-4 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Gender Selection */}
        <div className="flex flex-col gap-2">
          <label className="font-medium">Gender</label>
          <div className="flex gap-4">
            <div className="flex items-center">
              <input
                type="radio"
                name="gender"
                id="male"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="male" className="text-sm">
                Male
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="gender"
                id="female"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="female" className="text-sm">
                Female
              </label>
            </div>
          </div>
        </div>

        {/* Job Title and Company Name */}
        <div className="flex gap-4">
          <div className="flex-1 flex flex-col gap-2">
            <label htmlFor="jobTitle" className="font-medium">
              Job Title
            </label>
            <input
              type="text"
              name="jobTitle"
              id="jobTitle"
              placeholder="Job Title"
              value={formData.jobTitle}
              onChange={handleChange}
              className="rounded-md px-4 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <label htmlFor="companyName" className="font-medium">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleChange}
              className="rounded-md px-4 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Email Address */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-medium">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="rounded-md px-4 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Mobile Number */}
        <div className="flex flex-col gap-2">
          <label htmlFor="mobileNumber" className="font-medium">
            Mobile Number
          </label>
          <input
            type="tel"
            name="mobileNumber"
            id="mobileNumber"
            placeholder="Mobile Number"
            value={formData.mobileNumber}
            onChange={handleChange}
            className="rounded-md px-4 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Home Address */}
        <div className="flex flex-col gap-2">
          <label htmlFor="homeAddress" className="font-medium">
            Your Home Address
          </label>
          <textarea
            name="homeAddress"
            id="homeAddress"
            placeholder="Enter your home address"
            value={formData.homeAddress}
            onChange={handleChange}
            className="rounded-md px-4 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Marketing or Technology Challenge */}
        <div className="flex flex-col gap-2">
          <label htmlFor="challenge" className="font-medium">
            What's your main marketing or technology challenge?
          </label>
          <textarea
            name="challenge"
            id="challenge"
            placeholder="Describe your challenge"
            value={formData.challenge}
            onChange={handleChange}
            className="rounded-md px-4 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Current Website or App */}
        <div className="flex flex-col gap-2">
          <label className="font-medium">
            Do you currently have a website or mobile app for your business?
          </label>
          <div className="flex gap-4">
            <div className="flex items-center">
              <input
                type="radio"
                name="hasWebsiteOrApp"
                id="yes"
                value="yes"
                checked={formData.hasWebsiteOrApp === "yes"}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="yes" className="text-sm">
                Yes
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="hasWebsiteOrApp"
                id="no"
                value="no"
                checked={formData.hasWebsiteOrApp === "no"}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="no" className="text-sm">
                No
              </label>
            </div>
          </div>
        </div>

        {/* Digital Marketing Channels */}
        <div className="flex flex-col gap-2">
          <label className="font-medium">
            Which digital marketing channels are you currently using?
          </label>
          <div className="flex flex-wrap gap-4">
            {[
              "Facebook",
              "LinkedIn",
              "Instagram",
              "YouTube",
              "TikTok",
              "X",
            ].map((channel) => (
              <div key={channel} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name={channel.toLowerCase()}
                  id={channel.toLowerCase()}
                  checked={formData.digitalMarketingChannels.includes(
                    channel.toLowerCase()
                  )}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor={channel.toLowerCase()} className="text-sm">
                  {channel}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Meeting Type */}
        <div className="flex flex-col gap-2">
          <label className="font-medium">
            Are you looking for an online or offline meeting? Offline meetings
            are only applicable for Dhaka, Bangladesh.
          </label>
          <div className="flex gap-4">
            <div className="flex items-center">
              <input
                type="radio"
                name="meetingType"
                id="online"
                value="online"
                checked={formData.meetingType === "online"}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="online" className="text-sm">
                Online
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="meetingType"
                id="offline"
                value="offline"
                checked={formData.meetingType === "offline"}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="offline" className="text-sm">
                Offline
              </label>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#28519A] w-full py-3 rounded-md text-white font-semibold hover:bg-blue-800 transition-colors duration-300"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default PopUpForm;
