import Button from "../Button";

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center items-center m-auto w-[80%] relative z-10 mt-20 md:mt-40">
      <div>
        <h1 className="font-stalinist text-3xl md:text-[40px] text-center leading-[40px] md:leading-[60px] mb-[45px]">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
        </h1>
      </div>
      <Button
        title="Acesse já"
        className="h-[33px] w-[142px] text-[16px] sm:h-[45px] sm:w-[250px] sm:text-[20px] md:h-[50px] md:w-[322px] md:text-[24px]"
      />
    </div>
  );
};

export default HeroSection;
