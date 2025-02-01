import Background from "./Background";
import HeroSection from "./HeroSection";

const TopSection = () => {
  return (
    <div className="relative z-0 min-h-screen border-4 border-background">
      <Background />
      <div className="relative">
        <HeroSection />
      </div>
    </div>
  );
};

export default TopSection;
