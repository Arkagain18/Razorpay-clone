import React, { useEffect } from "react";
import feather from "feather-icons";

const features = [
  {
    icon: "/images/payment-link-icon.png",
    title: "Payment Link",
    desc: "Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately",
  },
  {
    icon: "/images/payment-pages-icon.png",
    title: "Payment Pages",
    desc: "Take your store online instantly with zero coding. Accept international & domestic payments",
  },
  {
    icon: "/images/payment-buttons-icon.png",
    title: "Payment Buttons",
    desc: "Create, Copy & Collect With Payment Button. Collect one time or subscription payments & more",
  },
  {
    icon: "/images/subscriptions-icon.png",
    title: "Subscriptions",
    desc: "Subscription plans with automated recurring transactions on various payment methods.",
  },
  {
    icon: "/images/route-icon.png",
    title: "Route",
    desc: "Split incoming payments automatically to vendor's accounts, manage marketplace money flow...",
  },
  {
    icon: "/images/smart-collect-icon.png",
    title: "Smart Collect",
    desc: "Automatically recognise incoming NEFT, RTGS, IMPS, UPI payments using Virtual Accounts & UPI-IDs",
  },
];

const FeaturesSection1 = () => {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <section className="relative mt-[190px] overflow-hidden">
      <img
        src="/images/feature-section1-dottedrows.png"
        className="absolute -top-[8rem] left-[10rem] inline-block -z-10"
        loading="lazy"
        width={233}
        height={167}
        alt=""
      />
      <img
        src="/images/feature-section1-dottedrows.png"
        className="absolute top-[3rem] right-0 inline-block rotate-180"
        loading="lazy"
        width={233}
        height={167}
        alt=""
      />

      <div className="relative w-11/12 max-w-[1080px] mx-auto pt-4">
        <h2 className="font-mullish font-extrabold text-center text-2xl leading-[1.2] md:block hidden">
          Accept Payments with Razorpay Payment Suite
        </h2>
        <h2 className="font-mullish font-extrabold text-center text-4xl leading-[1.2] md:hidden">
          Explore Razorpay Payment Suite
        </h2>
        <div className="w-6 h-1 bg-green-400 mx-auto mt-4 mb-6"></div>

        <div className="w-full min-h-[520px] bg-white flex rounded-md relative p-10 py-12 border border-gray-300">
          <div className="flex flex-col justify-between w-full">
            <h3 className="font-mullish font-bold text-[28px] leading-10 max-w-[500px]">
              Supercharge your business with the all-powerful
              <span className="text-blue-500"> Payment Gateway</span>
            </h3>
            <ul className="space-y-2">
              {[
                "100+ Payment Methods",
                "Industry Leading Success Rate",
                "Superior Checkout Experience",
                "Easy to Integrate",
                "Instant Settlements from day 1",
                "In-depth Reporting and Insights",
              ].map((text, index) => (
                <li key={index} className="font-mullish flex items-center space-x-2">
                  <i data-feather="check" className="text-green-400"></i>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
           <div className="flex flex-col md:flex-row items-center gap-4">
        {/* Sign Up Button */}
        <button className="flex items-center bg-blue-400 w-full md:w-fit text-white rounded-md font-mullish font-bold hover:bg-blue-500 transition-all duration-200 py-[14px] px-[18px]">
          Sign Up Now
          <svg
            className="w-[14px] h-[14px] ml-3 mt-[2px] text-white"
            fill="#FFFFFF"
            viewBox="0 0 15 15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.29289 2.29289C8.68342 1.90237 9.31658 1.90237 9.70711 2.29289L14.2071 6.79289C14.5976 7.18342 14.5976 7.81658 14.2071 8.20711L9.70711 12.7071C9.31658 13.0976 8.68342 13.0976 8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L11 8.5H1.5C0.947715 8.5 0.5 8.05228 0.5 7.5C0.5 6.94772 0.947715 6.5 1.5 6.5H11L8.29289 3.70711C7.90237 3.31658 7.90237 2.68342 8.29289 2.29289Z" />
          </svg>
        </button>

        {/* Know More Link */}
        <div className="flex items-center cursor-pointer group">
          <a
            href="#"
            className="font-mullish font-bold text-blue-500 group-hover:text-black transition-all duration-200"
          >
            Know More
          </a>
          <svg
            className="w-5 h-5 ml-1 text-blue-500 group-hover:text-black transition-all duration-200"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

          </div>
          <img
            src="/images/payment-suite.png"
            className="max-w-[600px] absolute right-0 bottom-0 hidden md:max-w-[400px] lg:max-w-[600px] md:block lg:block"
            alt="payment suite"
          />
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {features.map((feature, index) => (
          <div key={index} className="w-full min-h-[15rem] relative cursor-pointer group">
          <img src={feature.icon} className="bg-blue-500 absolute right-3 top-3 w-12 h-12 rounded-full z-[8] transition-all duration-200" alt="icon"/>

          {/* SVG Card Outline */}
          <svg
              viewBox="0 0 349.32501220703125 225"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200 group-hover:drop-shadow-[0px_0px_10px_rgba(235,235,235,1)]"
              style={{ strokeOpacity: 0.15 }}>
            <path
              d="m 0 6 a 6 6 0 0 1 6 -6 h 250.32501220703125 a 16 16 0 0 1 11 5 l 77 77 a 16 16 0 0 1 5 11 v 126 a 6 6 0 0 1 -6 6 h -337.32501220703125 a 6 6 0 0 1 -6 -6 z"
              fill="#fff"/>
          </svg>

          {/* Card Content */}
          <div className="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
          <div>
            <h3 className="font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.375rem]">
              {feature.title}
            </h3>
            <p className="font-mullish text-grayText mt-6">{feature.desc}</p>
          </div>

          {/* CTA Section */}
          <div className="flex items-center cursor-pointer group mt-4">
            <a href="#" className="font-mullish font-bold text-blue-500 group-hover:text-black transition-all duration-200">
              Know More
            </a>

             {/* Arrow SVG */}
            <svg
              className="w-5 h-5 ml-1 text-blue-500 group-hover:text-black transition-all duration-200"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>

            {/* Blue Zig-Zag Wave (Only on hover) */}
            <img src="/images/features-wave.png" alt="wave" className="h-[25%] w-[22%] absolute right-0 bottom-2 invisible group-hover:visible transition-all duration-200"/>
            </div>
            </div>
          </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection1;
