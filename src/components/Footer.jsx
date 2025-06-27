import React from "react";

const Footer = () => {
  return (
    <footer style={{ background: "linear-gradient(to right, #eef9fe, #edf7ff)" }}
      className="-mt-[400px] md:-mt-[300px]">
      <div className="w-10/12 pt-[400px] pb-10 md:pt-[350px] md:my-0 md:w-11/12 max-w-[1080px] mx-auto flex flex-col space-y-6 lg:space-y-0 lg:space-x-4 lg:flex-row justify-between">
        {/* Column 1 */}
        <div className="flex flex-col md:max-w-[340px] lg:max-w-[260px]">
          <img src="/images/logo-dark.png" width="120px" height="24px" alt="logo" />
          <p className="text-sm text-gray-600 my-3 font-mullish">
            Razorpay is the only payments solution in India that allows
            businesses to accept, process and disburse payments with its product
            suite. It gives you access to all payment modes including credit
            card, debit card, netbanking, UPI and popular wallets including
            JioMoney, Mobikwik, Airtel Money, FreeCharge, Ola Money and PayZapp.
          </p>
          <p class="text-sm text-gray-600 my-3 font-mullish">
          RazorpayX supercharges your business banking experience, bringing
          effectiveness, efficiency, and excellence to all financial
          processes. With RazorpayX, businesses can get access to
          fully-functional current accounts, supercharge their payouts and
          automate payroll compliance.
        </p>
        <p class="text-sm text-gray-600 my-3 font-mullish">
          Manage your marketplace, automate bank transfers, collect recurring
          payments, share invoices with customers and avail working capital
          loans - all from a single platform. Fast forward your business with
          Razorpay.
        </p>
        <p class="text-[0.625rem] text-gray-600 my-3 font-mullish">
          Disclaimer: The RazorpayX powered Current Account and VISA corporate
          credit card are provided by RBI licensed banks. Your RazorpayX
          powered account is provided by our partner bank, in accordance with
          RBI regulations. RazorpayX itself is not a bank and doesn't hold or
          claim to hold a banking license.
        </p>

          <p className="font-mullish uppercase font-bold text-gray2">Subscribe to our newsletter</p>
          <form className="relative bg-white w-[260px] mt-2 mb-4">
            <input
              placeholder="Your email address"
              className="pr-16 font-mullish border-gray-300 outline-lightBlue placeholder:text-sm py-2 px-4 border rounded-sm transition-all duration-200"
            />
            <button className="h-[90%] bg-white absolute right-[1.5px] top-1/2 -translate-y-1/2 z-10 font-mullish text-sm font-bold text-lightBlue300 flex rounded-sm items-center hover:text-lightBlue500 transition-all duration-200">
              Subscribe
              <svg viewBox="0 0 24 24" focusable="false" className="w-[14px] h-[14px] ml-3">
                <path
                  fill="currentColor"
                  d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                />
              </svg>
            </button>
          </form>
          <div className="flex items-start space-x-4">
            <img src="/images/footer-certificate-1.png" width="92" height="40" alt="cert1" />
            <img src="/images/footer-certificate-2.jpg" width="122" height="80" alt="cert2" />
          </div>
        </div>
        
        {/* Column 2 */}
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 justify-between">
          {/* Sub Column - 1 */}
          <div className="space-y-3">
            <div>
              <p className="font-mullish uppercase font-bold text-gray2 mb-1">BANKING PLUS</p>
              <ul className="space-y-2">
              {[
              "RazorpayX",
              "Current Accounts",
              "Payouts",
              "Payout Links",
              "Corporate Credit Card",
              ].map((text) => (
                <li key={text}>
                  <a href="#" className="font-mullish font-medium text-blue-500 hover:text-gray-500 transition-all duration-200">
                    {text}
                  </a>
                </li>
              ))}
              <li>
                <a href="#" className="relative font-mullish font-medium text-blue-500 hover:text-gray-500 transition-all duration-200">
                  View Live Demo
                  <span className="text-white font-mullish uppercase bg-green-500 rounded-sm text-xs font-bold p-1 ml-2">New</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mullish uppercase font-bold text-gray2 mb-1">LENDING</p>
            <ul className="space-y-2">
              {[
              "Razorpay Capital",
              "Instant Settlements",
              "Working Capital Loans",
              "Marketplace Instant Settlements",
              ].map((text) => (
                <li key={text}>
                  <a href="#" className="font-mullish font-medium text-blue-500 hover:text-gray-500 transition-all duration-200">
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mullish uppercase font-bold text-gray2 mb-1">RISK & FRAUD</p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="font-mullish font-medium text-blue-500 hover:text-gray-500 transition-all duration-200">Thirdwatch</a>
              </li>
              <li>
                <a href="#" className="relative font-mullish font-medium text-blue-500 hover:text-gray-400 transition-all duration-200">
                  PrePay CoD
                  <span className="text-white font-mullish uppercase bg-green-500 rounded-sm text-xs font-bold p-1 ml-2">New</span>
                </a>
              </li>
            </ul>
          </div>

       
          <div>
            <p className="font-mullish uppercase font-bold text-gray2 mb-1">BECOME A PARTNER</p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="font-mullish font-medium text-blue-500 hover:text-gray-500 transition-all duration-200">Refer and Earn</a>
              </li>
              <li>
                <a href="#" className="font-mullish font-medium text-blue-500 hover:text-gray-500 transition-all duration-200">Onboarding APIs</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mullish uppercase font-bold text-gray2 mb-1">MORE</p>
            <ul className="space-y-2">
            {[
              "Route", "Invoices", "Freelancer Payments", "International", "Flash Checkout", "UPI", "ePOS", "Checkout Demo", "RazorpayX Payroll",
            ].map((text, idx) => (
              <li key={idx}>
                <a href="#" className="font-mullish font-medium text-blue-500 hover:text-gray-500 transition-all duration-200">{text}</a>
              </li>
              ))}
            </ul>
          </div>
        </div>

      {/* Sub Column - 2 */}
      <div className="space-y-3">
        <div>
          <p className="font-mullish uppercase font-bold text-gray2 mb-1">ACCEPT PAYMENTS</p>
          <ul className="space-y-2">
            {[
              "Payment Gateway", "Payment Pages", "Payment Links", "QR Codes", "Subscriptions", "Smart Collect",
            ].map((text) => (
              <li key={text}>
                <a href="#" className="font-mullish font-medium text-blue-500 hover:text-gray-500 transition-all duration-200">{text}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mullish uppercase font-bold text-gray2 mb-1">DEVELOPERS</p>
          <ul className="space-y-2">
            {["Docs", "Integrations", "API Reference"].map((text) => (
              <li key={text}>
                <a href="#" className="font-mullish font-medium text-blue-500 hover:text-gray-500 transition-all duration-200">{text}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mullish uppercase font-bold text-gray2 mb-1">RESOURCES</p>
          <ul className="space-y-2">
            {["Blog", "Customer Stories", "Events", "Chargeback Guide", "Settlement Guide"].map((text) => (
              <li key={text}>
                <a href="#" className="relative font-mullish font-medium text-blue-500 hover:text-gray-500 transition-all duration-200">{text}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mullish uppercase font-bold text-gray2 mb-1">SOLUTIONS</p>
          <ul className="space-y-2">
            {["Education", "E-commerce", "Saas", "BFSI"].map((text) => (
              <li key={text}>
                <a href="#" className="font-mullish font-medium text-blue-500 hover:text-gray-500 transition-all duration-200">{text}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mullish uppercase font-bold text-gray2 mb-1">FREE TOOLS</p>
          <ul className="space-y-2">
            <li>
              <a href="#" className="font-mullish font-medium text-blue-500 hover:text-gray-500 transition-all duration-200">GST Calculator</a>
            </li>
            <li>
              <a href="#" className="font-mullish font-medium text-blue-500 hover:text-gray-500 transition-all duration-200">Online TDS Payment</a>
            </li>
            <li>
              <a href="#" className="relative font-mullish font-medium text-blue-500 hover:text-gray-500 transition-all duration-200">
                GST Number Search
                <span className="text-white font-mullish uppercase bg-green-500 rounded-sm text-xs font-bold p-1 ml-2">New</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Sub Column - 3 */}
      <div>
        <div>
          <p className="font-mullish uppercase font-bold text-gray2 mb-1">COMPANY</p>
          <ul className="space-y-2">
            <li><a href="#" className="font-mullish font-medium text-blue-500 hover:text-gray-500 transition-all duration-200">About Us</a></li>
            <li>
              <a href="#" className="font-mullish relative font-medium text-blue-500 hover:text-gray-500 transition-all duration-200">
                Careers
                <span className="text-white font-mullish bg-green-500 rounded-sm text-xs font-bold p-1 ml-2">We're hiring!</span>
              </a>
            </li>
            {[
              "Terms of Use", "Privacy Policy", "Grievance Redressal", "Responsible Disclosure", "Partners", "White Papers", "Corporate Information",
            ].map((text) => (
              <li key={text}>
                <a href="#" className="font-mullish font-medium text-blue-500 hover:text-gray-500 transition-all duration-200">{text}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mullish uppercase font-bold text-gray2 mb-1 mt-3">HELP & SUPPORT</p>
          <ul className="space-y-2">
            <li><a href="#" className="font-mullish font-medium text-blue-500 hover:text-gray-500 transition-all duration-200">Support</a></li>
            <li><a href="#" className="font-mullish font-medium text-blue-500 hover:text-gray-500 transition-all duration-200">Knowledge base</a></li>
          </ul>
        </div>

        <div>
          <p className="font-mullish uppercase font-bold text-gray2 mb-1 mt-6">FIND US ONLINE</p>
          <ul className="flex space-x-4 items-center mt-4">
            {["facebook", "twitter", "instagram", "github", "linkedin"].map((platform) => (
              <li key={platform} className="cursor-pointer">
                <a href="#">
                  <img src={`./images/${platform}-icon.png`} width="24" height="24" loading="lazy" alt={platform} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mullish uppercase font-bold text-gray2 mb-1 mt-6">REGD. OFFICE ADDRESS</p>
          <p className="font-mullish text-sm mt-4 whitespace-nowrap">
            Razorpay Software Private Limited, <br />
            1st Floor, SJR Cyber, <br />
            22 Laskar Hosur Road, Adugodi, <br />
            Bengaluru, 560030, <br />
            Karnataka, India <br />
            CIN: U72200KA2013PTC097389
          </p>
          <div className="font-mullish mt-6">
            <p className="text-sm">© Razorpay 2023</p>
            <p className="text-sm">All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
        </div>
    </footer>
  );
};

export default Footer;
