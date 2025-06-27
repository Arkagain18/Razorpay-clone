import './App.css'

import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection1 from "./components/FeaturesSection1";
import FeaturesSection2 from "./components/FeaturesSection2";
import ProductSuite from "./components/ProductSuite";
import CoreFeatures from "./components/CoreFeatures";
import JoinRazorpay from "./components/JoinRazorpay";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

function App() {

  return (
     <div className="overflow-x-hidden relative w-full">
      <Banner />
      <Navbar />
      <HeroSection />
      <FeaturesSection1 />
      <FeaturesSection2 />
      <ProductSuite />
      <CoreFeatures />
      <JoinRazorpay />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  )
}

export default App
