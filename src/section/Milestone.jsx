const Milestone = () => {
  return (
    <div className="w-full px-4 py-24 bg-white flex flex-col items-center gap-12">
      {/* Heading Section */}
      <div className="text-center flex flex-col items-center gap-5">
        <div className="text-3xl text-blue-900 font-semibold">Milestones</div>
        <div className="text-4xl text-gray-900 font-semibold">
          Tracking Progress and Milestones
        </div>
        <p className="w-full max-w-3xl text-gray-500 text-lg font-normal leading-7">
          Effective progress tracking and milestone setting are critical
          components of any successful project or personal goal. By
          systematically monitoring our achievements.
        </p>
      </div>

      {/* Milestone Statistics Section */}
      <div className="flex flex-wrap gap-8 justify-center items-center w-full">
        {/* Years of Experience */}
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex items-center gap-2">
            <div className="text-5xl text-gray-900 font-medium">04</div>
            <div className="text-5xl text-gray-900 font-medium">+</div>
          </div>
          <div className="text-xl text-gray-500 font-medium capitalize">
            Years of Experience
          </div>
        </div>

        {/* Separator */}
        <div className="w-28 h-px bg-blue-900 rotate-90 hidden md:block"></div>

        {/* Total Courses */}
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex items-center gap-2">
            <div className="text-5xl text-gray-900 font-medium">43</div>
            <div className="text-5xl text-gray-900 font-medium">+</div>
          </div>
          <div className="text-xl text-gray-500 font-medium capitalize">
            Total Courses
          </div>
        </div>

        {/* Separator */}
        <div className="w-28 h-px bg-blue-900 rotate-90 hidden md:block"></div>

        {/* Satisfied Customers */}
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex items-center gap-2">
            <div className="text-5xl text-gray-900 font-medium">17</div>
            <div className="text-5xl text-gray-900 font-medium">+</div>
          </div>
          <div className="text-xl text-gray-500 font-medium capitalize">
            Satisfied Customers
          </div>
        </div>

        {/* Separator */}
        <div className="w-28 h-px bg-blue-900 rotate-90 hidden md:block"></div>

        {/* Projects Done */}
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex items-center gap-2">
            <div className="text-5xl text-gray-900 font-medium">136</div>
            <div className="text-5xl text-gray-900 font-medium">+</div>
          </div>
          <div className="text-xl text-gray-500 font-medium capitalize">
            Projects Done
          </div>
        </div>
      </div>
    </div>
  );
};

export default Milestone;
