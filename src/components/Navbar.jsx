import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#02042a] text-white">
      <div className="relative max-w-[1080px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="cursor-pointer py-7 pr-7">
          <img src="./images/logo.png" width="125px" height="30px" alt="Razorpay Logo" />
        </a>

        {/* Desktop Menu Items */}
        <ul className="hidden lg:flex space-x-6">
          {[
            "Payments",
            "Banking",
            "Corporate Card",
            "Payroll",
            "Resources",
            "Support",
            "Pricing",
          ].map((item) => (
            <li
              key={item}
              className="text-white font-mullish py-7 hover:text-blue-500 cursor-pointer transition-all duration-200 relative group"
            >
              <a href="#">{item}</a>
              <div className="absolute bottom-0 w-full h-1 bg-blue-400 hidden group-hover:block transition-all duration-200" />
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center space-x-6">
          {/* Flag (hidden on small) */}
          <img
            src="./images/india-flag.png"
            width="28px"
            height="20px"
            className="hidden lg:block"
            alt="India Flag"
          />

          {/* Log in button */}
          <button className="py-3 px-5 font-mullish text-white cursor-pointer border-blue-500 border rounded-sm text-sm font-bold hidden lg:block">
            Log in
          </button>

          {/* Sign up button */}
          <button className="py-3 px-4 font-mullish rounded-sm cursor-pointer text-sm font-bold bg-white text-blue-500 border transition-all duration-200 hover:text-blue-500 hidden lg:flex">
            Sign up →
          </button>

          {/* Hamburger (shown on md and smaller) */}
          <button
            className="lg:hidden focus:outline-none text-white text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="px-6 pt-4 pb-6 lg:hidden">
          <ul className="space-y-4">
            {[
              "Payments",
              "Banking",
              "Corporate Card",
              "Payroll",
              "Resources",
              "Support",
              "Pricing",
            ].map((item) => (
              <li key={item} className="text-white font-mullish hover:text-blue-400 transition-all duration-200">
                <a href="#">{item}</a>
              </li>
            ))}

            <li>
              <button className="w-full mt-4 py-2 px-4 font-mullish text-white border border-blue-500 rounded-sm text-sm font-bold">
                Log in
              </button>
            </li>
            <li>
              <button className="w-full mt-2 py-2 px-4 font-mullish rounded-sm text-sm font-bold bg-white text-blue-500 border transition-all duration-200 hover:text-blue5-00">
                Sign up →
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
