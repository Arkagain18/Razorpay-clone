import React from "react";
import feather from "feather-icons";
import { useEffect } from "react";
import FeaturesSection1 from "./FeaturesSection1";
import featureBG from "/images/feature-section-2BG.png";

const FeaturesSection2 = () => {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <section style={{ backgroundImage: `url(${featureBG})` }} className="bg-no-repeat bg-cover pt-[20rem] pb-[500px] mt-14">

      <div className="w-11/12 max-w-[1080px] pt-4 mx-auto relative">
        <h2 className="font-mullish text-white text-center text-2xl leading-[1.2] font-bold">
          Explore Razorpay Business Banking
        </h2>
        <div className="w-6 h-1 bg-green-400 mx-auto mt-4 mb-20" />

        <div className="w-full min-h-[440px] flex flex-col relative">
          <img
            src="./images/x-flame-1.png"
            loading="lazy"
            className="absolute -top-[142px] -left-[140px] w-[200px]"
            alt=""
          />
          <img
            src="./images/x-flame-2.png"
            loading="lazy"
            className="absolute top-[150px] -right-[180px] w-[270px]"
            alt=""
          />

          <div className="relative w-full p-10 py-12 bg-[#181c2e] border border-slate-700 z-20 rounded-md">
            <div className="flex flex-col justify-between w-full h-full items-start gap-12 z-20">
              <h3 className="text-white font-mullish font-bold text-[28px] leading-10 max-w-[500px]">
                Manage your company's finance with
                <img
                  src="./images/razorpayX.png"
                  loading="lazy"
                  width="168px"
                  height="32px"
                  className="inline"
                  alt="RazorpayX"
                />
                <span className="text-green-600"> Business Banking </span>
              </h3>
              <ul className="space-y-2">
                {[
                  "Open a fully digital current account",
                  "Automate payable & compliment payments",
                  "Simplify and track spends with Corporate cards",
                  "View financial insights at a glance",
                ].map((text, idx) => (
                  <li key={idx} className="font-mullish text-white flex items-center space-x-2">
                    <i data-feather="check" className="text-green-400"></i>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col-reverse w-full md:flex-row items-center gap-4">
                <button className="relative flex cursor-pointer bg-blue-500 items-center md:justify-start text-white py-[14px] px-[18px] md:pr-[90px] rounded-md font-mullish font-bold hover:bg-lightBlue500 transition-all duration-200 self-stretch md:w-fit">
                  Sign Up
                  <div className="w-12 h-[60px] bg-green-400 absolute right-6 skew-x-[20deg] flex justify-center items-center">
                    <svg
                      viewBox="0 0 24 24"
                      focusable="false"
                      className="w-[20px] h-[20px] -skew-x-[20deg]"
                    >
                      <path
                        fill="currentColor"
                        d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                      ></path>
                    </svg>
                  </div>
                </button>
                <div className="flex items-center cursor-pointer group">
                  <a
                    href="#"
                    className="font-mullish font-bold text-blue-500 group-hover:text-blue-300 transition-all duration-200"
                  >
                    Know More
                  </a>
                  <svg
                    className="w-5 h-5 ml-1 text-blue-700 group-hover:text-blue-500 transition-all duration-200"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
            <img
              src="./images/buisness-banking.png"
              className="max-w-[600px] absolute right-0 bottom-0 z-5 hidden md:max-w-[400px] lg:max-w-[600px] md:block lg:block"
              alt="Business Banking"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4 my-14">
            {[
              {
                title: "Current Account",
                desc:
                  "Current accounts for fast-growing business, supported by the best in-class technology",
                icon: "./images/current-icon.png",
              },
              {
                title: "Capital Credits",
                desc:
                  "Instant additional cash and corporate cards designed for growing business",
                icon: "./images/capital-credit-icon.png",
              },
              {
                title: "Payouts",
                desc:
                  "Make simple, reliable & secure payouts to bank accounts, UPI IDs or wallets",
                icon: "./images/payouts-icon.png",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="w-full min-h-[15rem] relative cursor-pointer group"
              >
                <img
                  src={feature.icon}
                  className="bg-blue-600 absolute right-3 top-3 w-12 h-12 rounded-full z-[8] transition-all duration-200"
                  alt="icon"
                />
                <svg
                  viewBox="0 0 349.32501220703125 225"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  className="stroke-1 stroke-[#525a76] h-full w-full absolute z-[9] transition-all duration-200 group-hover:drop-shadow-[0px_0px_33px]"
                  style={{ strokeOpacity: 0.8 }}
                >
                  <path
                    d="m 0 6 a 6 6 0 0 1 6 -6 h 250.32501220703125 a 16 16 0 0 1 11 5 l 77 77 a 16 16 0 0 1 5 11 v 126 a 6 6 0 0 1 -6 6 h -337.32501220703125 a 6 6 0 0 1 -6 -6 z"
                    fill="#181C2E"
                  ></path>
                </svg>
                <div className="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
                  <div>
                    <h3 className="font-mullish font-bold text-white leading-[1.2] text-[1.375rem]">
                      {feature.title}
                    </h3>
                    <p className="font-mullish text-gray-400 mt-6">
                      {feature.desc}
                    </p>
                  </div>
                  <div className="flex items-center cursor-pointer group">
                    <a
                      href="#"
                      className="font-mullish font-bold text-blue-500 group-hover:text-blue-300 transition-all duration-200"
                    >
                      Know More
                    </a>
                    <svg
                      className="w-5 h-5 ml-1 text-blue-500 group-hover:text-blue-300 transition-all duration-200"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    <img
                      className="h-[25%] w-[22%] absolute right-0 bottom-2 invisible transition-all duration-200 group-hover:visible"
                      src="./images/features2-wave.png"
                      alt="Wave"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full items-center justify-evenly border border-slate-700 mb-24 gap-6 p-8 relative rounded-md hidden md:flex-col lg:flex-row md:block lg:flex">
            <p className="font-mullish text-white text-bold">
              Check out the live demo to learn how RazorPayX works.{' '}
              <span className="font-bold">No sign-up required!</span>
            </p>
            <button className="relative flex bg-blue-500 items-center justify-start text-white py-[14px] px-[18px] md:pr-[90px] rounded-md font-mullish font-bold hover:bg-lightBlue500 transition-all duration-200">
              check out the demo
              <div className="w-12 h-[60px] bg-green-400 absolute right-6 skew-x-[20deg] flex justify-center items-center">
                <svg
                  viewBox="0 0 24 24"
                  focusable="false"
                  className="w-[20px] h-[20px] -skew-x-[20deg]"
                >
                  <path
                    fill="currentColor"
                    d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection2;
