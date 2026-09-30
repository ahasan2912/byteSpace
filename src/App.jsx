import { useEffect, useState } from "react";
import BuildSkills from "./components/BuildSkills";
import Hero from "./components/Hero";
import LogoSlider from "./components/LogoSlider";
import LearningPathSection from "./components/LearningPathSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import PotentialCreators from "./components/PotentialCreators";
import ProfessionalGrowth from "./components/ProfessionalGrowth";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#0c36cf]">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-white/30 border-t-white" />
      </div>
    );
  }

  return (
    <div>
      <Hero />
      <LogoSlider />
      <BuildSkills />
      <LearningPathSection />
      <ProfessionalGrowth />
      <PotentialCreators />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;