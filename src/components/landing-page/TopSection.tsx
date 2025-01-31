import Header from "../Header";
import Background from "./Background";
import HeroSection from "./HeroSection";

const TopSection = () => {
  return (
    <div className="relative min-h-screen">
      <Background />
      <div className="reltive z-10">
        <Header />
        <HeroSection />
      </div>
    </div>
  );
}

export default TopSection
