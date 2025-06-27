import React from "react";
import Dotted from "/images/feature-section1-dottedrows.png"
import Test from "/images/testimonial.jpg"
import Quotes from "/images/quotes.png"
import Logo from "/images/fake-company-logo.png"

const Testimonials = () => {
  return (
    <section className="relative">
      <div className="w-11/12 max-w-[1300px] mx-auto relative py-20">
        <img
          src={Dotted}
          className="absolute w-[200px] top-[8rem] left-[2rem] -z-10"
          alt="dotted background"
        />
        <h2 className="font-mullish font-bold text-2xl text-black text-center">
          An Experience <br /> People Love to Talk About
        </h2>
        <div className="w-6 h-1 bg-green-400 mx-auto my-4"></div>

        {/* Left arrow */}
        <button className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] xl:w-[100px] xl:h-[100px] bg-[#f4f8ff] rounded-full absolute left-2 md:left-0 top-[50%] -translate-y-1/2 flex justify-center items-center">
          <div className="w-[65%] h-[65%] bg-[#f4f8ff] rounded-full flex justify-center items-center mix-blend-multiply">
            <i
              data-feather="chevron-right"
              className="stroke-[5px] w-6 h-6 md:w-8 md:h-8 xl:w-10 xl:h-10 text-gray-400 rotate-180"
            ></i>
          </div>
        </button>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center max-w-[960px] mx-auto my-20 md:space-x-12">
          <img
            src={Test}
            height="320px"
            width="320px"
            className="rounded-xl mb-6 md:mb-0"
            loading="lazy"
            alt="testimonial"
          />

          <div className="max-w-[400px] flex flex-col text-center md:text-left">
            <img
              src={Quotes}
              height="40px"
              width="35px"
              className="-mb-2"
              loading="lazy"
              alt="quote"
            />
            <p className="font-mullish text-3xl font-extralight">
              Readymade Closed Wallet Solution For Quick Refunds
            </p>
            <a href="#" className="text-grayText italic underline">
              Learn More
            </a>
            <p className="font-mullish font-extrabold text-2xl">Lorem Ipsum</p>
            <p className="font-mullish font-medium">CEO, XYZ Engineering Company</p>
            <img
              src={Logo}
              height="40px"
              width="80px"
              className="mt-2"
              loading="lazy"
              alt="company"
            />
          </div>
        </div>

        {/* Dots */}
        <div className="w-full flex flex-row mx-auto space-x-2 justify-center">
          {[0, 1, 2, 3, 4, 5].map((_, i) => (
            <div
              key={i}
              className={`h-[10px] w-[10px] rounded-full ${
                i === 1 ? "bg-blue-300" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>

        {/* Right arrow */}
        <button className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] xl:w-[100px] xl:h-[100px] bg-[#f4f8ff] rounded-full absolute right-2 md:right-0 top-[50%] -translate-y-1/2 flex justify-center items-center">
          <div className="w-[65%] h-[65%] bg-[#f4f8ff] rounded-full flex justify-center items-center mix-blend-multiply">
            <i
              data-feather="chevron-right"
              className="stroke-[5px] w-6 h-6 md:w-8 md:h-8 xl:w-10 xl:h-10 text-gray-400"
            ></i>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
