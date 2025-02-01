import Background from "./Background";
import HeroSection from "./HeroSection";

const TopSection = () => {
  return (
    <div className="relative min-h-screen border-4 border-background">
      <Background />
      <div className="reltive z-10">
        <HeroSection />
      </div>
    </div>
  );
};

export default TopSection;
