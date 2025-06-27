import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-[#02042a]">
      <div className="w-11/12 max-w-[1080px] flex flex-col lg:flex-row justify-between items-center mx-auto">
        {/* Left Part */}
        <div className="space-y-8">
          <h1 className="font-mullish text-white font-bold text-[40px] leading-[1.2]">
            Power your finance, grow your business
          </h1>
          <div className="w-6 h-1 bg-green-400"></div>
          <p className="font-mullish text-[18px] leading-7 text-white opacity-70">
            Accept payments from customers. Automate payouts to vendors & employees. Never run out of working capital.
          </p>
          <button className="bg-blue-400 text-white rounded-md font-mullish font-bold hover:bg-blue-500 transition-all duration-200 py-[14px] px-[18px]">
            Sign Up Now
          </button>
        </div>

        {/* Right Part */}
        <img src="/images/hero-illustration.jpg" className="w-full max-w-[680px]" alt="hero" />
      </div>

      {/* Shape Part */}
      <div className="absolute w-[103%] left-0 right-0">
        <img src="/images/hero-shape.png" loading="lazy" className="w-full object-fill z-10" alt="shape" />
      </div>
    </section>
  );
};

export default HeroSection;
