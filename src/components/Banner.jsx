import React from "react";

const Banner = () => {
  return (
    <div className="w-full h-[52px] bg-white relative">
      <div className="w-0 h-0 absolute top-0 bottom-0 left-0 border-b-[52px] border-b-lightBlue border-r-[40px] border-r-transparent z-[14]"></div>
      <div className="hidden lg:block w-2 h-[52px] bg-[#C4DDF9] skew-x-[38deg] absolute left-5 z-[12]"></div>
      <div className="w-[120px] h-[52px] bg-[#E7F1FD] skew-x-[38deg] absolute z-[10] left-4 lg:left-6"></div>
      <div className="w-[140px] h-[52px] bg-[#F3F8FE] skew-x-[38deg] absolute z-[12] left-[4rem] lg:left-[9rem]"></div>
      <div className="absolute top-1/2 left-1/2 z-[1000] w-full -translate-x-1/2 -translate-y-1/2 flex justify-center items-center space-x-4">
        <p className="hidden lg:block font-mullish">
          RazorpayX Payroll: 3 Clicks, Payroll Fixed! Automate payroll now!
        </p>
        <p className="block lg:hidden font-mullish text-xs md:text-[14px]">
          Automate Payroll in just 3 clicks now!
        </p>
        <button className="py-[10px] px-4 bg-blue-500 cursor-pointer text-white font-mullish font-bold text-xs rounded-md">
          Know More
        </button>
      </div>
      <div className="w-[140px] h-[52px] bg-[#F3F8FE] skew-x-[38deg] absolute z-[12] right-[4rem] lg:right-[9rem]"></div>
      <div className="w-[120px] h-[52px] bg-[#E7F1FD] skew-x-[38deg] absolute z-[10] right-4 lg:right-6"></div>
      <div className="hidden lg:block w-2 h-[52px] bg-[#C4DDF9] skew-x-[38deg] absolute right-5 z-[12]"></div>
      <div className="w-0 h-0 absolute top-0 bottom-0 right-0 border-t-[52px] border-t-lightBlue border-l-[40px] border-l-transparent z-[14]"></div>
    </div>
  );
};

export default Banner;
