import HeroSection from "../../components/school-management/HeroSection";
import Features from "../../components/school-management/Features";
import WhyChooseUs from "../../components/school-management/WhyChooseUs";
import WorkProcess from "../../components/school-management/WorkProcess";
import PricingSection from "../../components/school-management/PricingSection";
import FaqSection from "../../components/school-management/FaqSection";

const schoolMmanagement = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      <HeroSection />
      <Features />
      <WhyChooseUs />
      <WorkProcess />
      <PricingSection />
      <FaqSection />
    </div>
  );
};

export default schoolMmanagement;
