import React from "react";


const cards = [
  {
    title: "Corporate Cards",
    desc: "Simplify your recurring, international and team expenses with savings on every spend. Save upto 10 lacs every month.",
    icon: "/images/razorpayXicon.png",
    bg: "/images/instant-settlement-bg.png",
    bgHover: "/images/instant-settlement-hoverbg.png",
  },
  // You can add unique entries here if you want later, duplicating for now
  {
    title: "UPI AutoPay",
    desc: "Allow customers to set up recurring payments using UPI Apps.",
    icon: "/images/autopay_icon.png",
    bg: "/images/upi-autopaybg.png",
    bgHover: "/images/upi-autopay-hoverbg.png",
  },
  {
    title: "Magic Checkouts",
    desc: "Improve your order conversion rates & reduce return-to-origins. Boost your business by 20%",
    icon: "/images/magic-checkout.png",
    bg: "/images/instant-magic-checkout-bg.png",
    bgHover: "/images/magic-checkout-hoverbg.png",
  },
  {
    title: "Payments Button",
    desc: "Accepts payments on your website, in less than 5 minutes. No developer needed",
    icon: "/images/payment-button.png",
    bg: "/images/payment-button-bg.png",
    bgHover: "/images/instantsettlement-hoverbg.png",
  },
  {
    title: "Instant Settelment",
    desc: "Settle your customer payments within 10 seconds as soon as your account is activated, even during holidays",
    icon: "/images/instant-settlement-icon.png",
    bg: "/images/instantsettlement-bg.png",
    bgHover: "/images/instantsettlement-hoverbg.png",
  },
];

const ProductSuite = () => {
  return (
    <section className="bg-white relative">
      <div className="relative w-11/12 max-w-[1080px] mx-auto pt-4">
        {/* Background dots */}
        <img
          src="/images/feature-section1-dottedrows.png"
          alt=""
          className="absolute w-[233px] left-[300px] -top-[6rem] z-10"
        />
        <img
          src="/images/feature-section1-dottedrows.png"
          alt=""
          className="absolute w-[233px] -right-[3.5rem] -top-[6rem] z-10"
        />

        {/* Grid Content */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-4 relative z-[100]">
          {/* Left Heading */}
          <div className="relative flex items-center z-0">
            <h2 className="text-deepBlueHead font-mullish font-extrabold text-4xl leading-[3.375rem]">
              New in the{" "}
              <span className="text-blue-800">Razorpay</span> <br />
              Product Suite
            </h2>
          </div>

          {/* Cards */}
          {cards.map((card, index) => (
  <div
    key={index}
    className="group p-10 w-full max-h-[300px] bg-no-repeat bg-white cursor-pointer hover:scale-105 transition-all duration-200"
    style={{
      backgroundImage: `url(${card.bg})`,
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundImage = `url(${card.bgHover})`;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundImage = `url(${card.bg})`;
    }}
  >
    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
      <img src={card.icon} alt="icon" className="w-6 h-6" />
    </div>
    <h3 className="font-mullish text-xl font-bold pt-4">{card.title}</h3>
    <p className="font-mullish py-3 text-grayText leading-normal">{card.desc}</p>
    <div className="flex flex-row items-center cursor-pointer group">
      <a
        href="#"
        className="font-mullish font-bold text-blue-500 group-hover:text-Blue-300 transition-all duration-200"
      >
        Know More
      </a>
      <i
        data-feather="chevron-right"
        className="w-5 h-5 text-blue-500 group-hover:text-blue-300 transition-all duration-200"
      ></i>
    </div>
  </div>
))}

        </div>
      </div>
    </section>
  );
};

export default ProductSuite;
