import React from "react";
import Activation from "/images/instant-activation-icon.png"
import Integration from "/images/easy-integration.png"
import API from "/images/api-driven_icon.png"
import Mode from "/images/payment-modes.png"
import Pricing from "/images/simple-pricing.png"
import Industry from "/images/simple-pricing.png"
import Dashboard from "/images/dashboard-reporting-icon.png"
import Secure from "/images/secure-icon.png"

const features = [
  {
    title: "Instant Activation",
    desc: "Get activated and transact within 2 minutes. Completely online onboarding with minimum documentation.",
    icon: Activation,
  },
  {
    title: "Easy Integration",
    desc: "With plugins for all major platforms and languages, integrate and go live with Razorpay in less than an hour.",
    icon: Integration,
  },
  {
    title: "API Driven",
    desc: "Build your business for scale with our complete API-driven automation that requires zero manual intervention.",
    icon: API,
  },
  {
    title: "100+ Payment Modes",
    desc: "Offer your customers all payment modes including Credit/Debit cards, Netbanking, UPI, Wallets etc.",
    icon: Mode,
  },
  {
    title: "Simple Pricing",
    desc: "Our innovative payment solutions with competitive pricing make payments simpler.",
    icon: Pricing,
  },
  {
    title: "Best in Industry Support",
    desc: "Always available email, phone and chat based support to help you in every step.",
    icon: Industry,
  },
  {
    title: "Dashboard Reporting",
    desc: "Real-time data and insights on your Razorpay Dashboard to make informed business decisions.",
    icon: Dashboard,
  },
  {
    title: "Secure",
    desc: "PCI DSS Level 1 compliant solution which removes your burden of regulatory compliance.",
    icon: Secure,
  },
];

const CoreFeatures = () => {
  return (
    <section className="relative mt-14 overflow-hidden">
  {/* Blue Clipped Background */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-800 to-blue-500 clip-diagonal" />

  {/* Content */}
  <div className="w-11/12 max-w-[1080px] mx-auto py-20 md:py-16 lg:py-28">
    <h2 className="font-mullish font-bold text-2xl text-center text-white">Features</h2>
    <div className="w-6 h-1 bg-green-400 mx-auto mt-4 mb-6"></div>
    <p className="font-mullish text-center max-w-[450px] text-white mx-auto">
      Empower your business with all the right tools to accept online payments and provide the best customer experience
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2rem] mt-10">
      {features.map((feature, index) => (
        <div key={index}>
          <img src={feature.icon} alt={feature.title} />
          <h3 className="font-mullish text-white text-lg font-bold my-4">{feature.title}</h3>
          <p className="font-mullish text-white opacity-80">{feature.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>


  );
};

export default CoreFeatures;
