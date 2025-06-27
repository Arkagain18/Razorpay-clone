import React from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import CTA from "/images/ctaImg.png"

const CTASection = () => {
  return (
    <section className="bg-[url('/images/CTABg.png')] w-full h-full bg-no-repeat bg-cover relative ctasection min-h-[510px]">
      <div className="w-11/12 max-w-[1080px] relative flex flex-row items-center justify-between mx-auto space-x-20 pt-16">
        {/* Left */}
        <div className="flex flex-col gap-5 mt-12 max-w-[600px]">
          <h2 className="font-mullish font-bold text-2xl text-white">
            Supercharge your business with Razorpay
          </h2>
          <div className="w-6 h-1 bg-green-400"></div>
          <p className="font-mullish text-white">
            Sign up now to experience the future of payments and offer <br />
            your customers the best checkout experience.
          </p>

          <ul className="flex flex-row flex-wrap gap-x-11 text-white gap-y-3">
            {["Quick Onboarding", "Access to entire product suite", "API access","24x7 support",].map((feature) => (
            <li key={feature} className="font-mullish flex items-center text-white">
            <CheckIcon className="w-5 h-5 text-green-400 mr-2" />
            <span>{feature}</span>
            </li>
             ))}
          </ul>

          <button className="min-w-[32px] font-mullish text-sm font-bold bg-white text-blue-500 border flex rounded-sm items-center hover:text-blue-500 transition-all duration-200 py-3 px-4 place-self-start">
            Sign Up
            <svg viewBox="0 0 24 24" focusable="false" className="w-[14px] h-[14px] ml-3">
              <path
                fill="currentColor"
                d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
              />
            </svg>
          </button>
        </div>

        {/* Right */}
        <img
          src={CTA}
          width="240px"
          height="282px"
          className="mt-16 pt-2 hidden lg:block"
          alt="CTA"
        />
      </div>
    </section>
  );
};

export default CTASection;
