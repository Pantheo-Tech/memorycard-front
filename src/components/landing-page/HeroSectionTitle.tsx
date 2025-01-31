type HeroSectionTitleProps = {
  title: string;
};

const HeroSectionTitle = ({ title }: HeroSectionTitleProps) => {
  return (
    <div className="flex justify-center items-center gap-1 font-ubuntu font-bold text-4xl md:text-[64px] text-center p-10 relative z-10">
      <span className="block bg-gradientBlackToRed h-[2px] w-[80px] relative z-10"></span>
      <span className="bg-gradientRedToLight bg-clip-text text-transparent">
        {title}
      </span>
      <span className="block bg-gradientRedToBlack h-[2px] w-[80px] relative z-10"></span>
    </div>
  );
};

export default HeroSectionTitle;
