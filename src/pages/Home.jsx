import Hero from "../components/Hero";
import LogoSlider from "../components/LogoSlider";
import BuildSkills from "../components/BuildSkills";
import LearningPathSection from "../components/LearningPathSection";
import ProfessionalGrowth from "../components/ProfessionalGrowth";
import PotentialCreators from "../components/PotentialCreators";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Home = () => {
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

export default Home;