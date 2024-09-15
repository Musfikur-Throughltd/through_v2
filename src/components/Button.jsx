

const Button = () => {
  return (
    <div>
      <button className="flex items-center justify-center gap-2 bg-[#28519A] lg:px-7 lg:py-2 md:px-6 md:py-2 px-3 py-1 text-white rounded-full lg:text-[18px] md:text-[18px] text-[12px] md:ml-[260px] lg:ml-0 ml-36"><span className="font-medium">Get a Quote</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 pt-1">
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
      </svg></button>
    </div>
  );
};

export default Button;