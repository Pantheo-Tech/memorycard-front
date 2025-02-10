import React from "react";
import Background from "../Background";
import HeroSection from "../HeroSection";

const TopSection: React.FC = () => {
  return (
    <div className="relative min-h-screen border-4 border-background">
      <Background />
      <div className="relative">
        <HeroSection />
      </div>
    </div>
  );
};

export default TopSection;
