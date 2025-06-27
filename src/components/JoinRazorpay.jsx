import React from "react";

const JoinRazorpay = () => {
  return (
    <section className="bg-[#f5f8fe] relative pt-40 pb-12 -mt-[200px] -z-[100]">
      <div className="relative w-11/12 max-w-[1080px] mx-auto flex flex-col md:flex-row">
        {/* Left */}
        <div className="flex flex-col justify-center w-full md:max-w-[calc(100%-500px)] sm:my-16 mt-10 md:mt-30">
          <h2 className="font-mullish font-bold text-2xl text-deepBlueHead"> Join the 50,00,000+ businesses using Razorpay </h2>
          <div className="w-6 h-1 bg-green-400 my-4 mb-10"></div>
          <p className="font-mullish opacity-80">
            We make it easier for you to focus on building great products while we simplify your payments. Join thousands of
            happy users and simplify the online payment experience for your customers.
          </p>
          <p className="font-mullish mt-6 opacity-80"> Focus on your business while we handle the complexities of payments for you.</p>
        </div>


        {/* Right - Animated company logo image */}
        <div className="w-[500px] h-[500px] relative overflow-hidden mx-auto">
          {/* Top Gradient */}
          <div
            style={{ background: "linear-gradient(180deg, #f4f8ff, #fff0)" }}
            className="absolute w-full h-[150px] top-0 z-50"
          ></div>

          {/* Scrolling image wrapper */}
          <div className="absolute animate-[scrollUp_10s_linear_infinite]">
            <img
              src="/images/comanies.png"
              width="500"
              className="object-cover"
              alt="companies"
            />
            <img
              src="/images/comanies.png"
              width="500"
              className="object-cover"
              alt="companies-duplicate"
            />
          </div>

          {/* Bottom Gradient */}
          <div
            style={{ background: "linear-gradient(0deg, #f4f8ff, #fff0)" }}
            className="absolute w-full h-[150px] bottom-0 z-50"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default JoinRazorpay;
