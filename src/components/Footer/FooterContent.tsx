import React from "react";
import FooterNav from "./FooterNav";
import FooterSocialLinks from "./FooterSocialLinks";

const FooterContent: React.FC = () => {
  return (
    <div className="absolute bottom-0 flex justify-between items-center flex-wrap gap-2 w-full py-5 px-5 sm:px-10 md:px-20">
      <p className="text-primaryText font-ubuntu text-sm md:text-base">
        Copyright © Pantheo Tech
      </p>
      <div className="hidden lg:flex">
        <FooterNav />
      </div>
      <div>
        <FooterSocialLinks />
      </div>
    </div>
  );
};

export default FooterContent;
