import React from "react";
import Button from "../Button";

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center m-auto w-[80%] relative mt-20 md:mt-40 pb-10">
      <div>
        <h1 className="font-stalinist text-2xl sm:text-3xl md:text-[35px] text-center leading-[40px] md:leading-[60px] mb-[80px] md:mb-[100px]">
          MemoryCard: Guarde Cada Momento da Sua Jornada Gamer!
        </h1>
      </div>
      <Button
        title="Comece Agora - É Grátis!"
        className="h-[45px] w-[250px] text-[20px] md:h-[50px] md:w-[322px] md:text-[24px]"
      />
    </div>
  );
};

export default HeroSection;
