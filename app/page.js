import HeroSection from "./components/home/HeroSection";
import Services from "./components/home/services";
import HowItWorksBangla from "./components/home/HowItWorksBangla";
import CustomerReviewSlider from "./components/home/CustomerReviewSlider";
import Contact from "./components/home/Contact";
import FloatingActionButton from "./components/home/FloatingActionButton";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <Services />
      <HowItWorksBangla />
      <CustomerReviewSlider />
      <Contact />
      <FloatingActionButton />
    </div>
  );
}
