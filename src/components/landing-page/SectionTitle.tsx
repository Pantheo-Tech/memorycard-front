type HeroSectionTitleProps = {
  title: string;
};

const SectionTitle = ({ title }: HeroSectionTitleProps) => {
  return (
    <div className="flex justify-center items-center gap-1 font-ubuntu font-bold text-[20px] sm:text-[30px] md:text-[35px] text-center p-10 relative z-10 md:leading-[55px]">
      <span className="block bg-gradientBlackToRed h-[2px] w-[80px] relative z-10"></span>
      <span className="bg-gradientRedToLight bg-clip-text text-transparent">
        {title}
      </span>
      <span className="block bg-gradientRedToBlack h-[2px] w-[80px] relative z-10"></span>
    </div>
  );
};

export default SectionTitle;
