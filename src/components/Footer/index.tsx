import React from "react";
import Button from "../Button";
import FooterContent from "./FooterContent";

const Footer: React.FC = () => {
  return (
    <div className="bg-bg-footer bg-cover bg-center h-[300px] flex flex-col justify-center items-center relative">
      <div className="absolute top-0 left-0 w-full h-full bg-background opacity-90 z-10"></div>

      <Button
        title="Acesse já"
        className="h-[45px] w-[250px] text-[20px] z-20"
      />
      <div className="z-20 flex justify-center items-center">
        <FooterContent />
      </div>
    </div>
  );
};

export default Footer;
