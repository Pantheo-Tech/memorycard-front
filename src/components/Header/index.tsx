import React, { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import Button from "../button";
import Logo from "./Logo";
import MobileMenu from "../mobile-menu/index";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header
      id="header"
      className="flex justify-between items-center bg-transparent text-primaryText sm:text-xl relative z-10 py-10 px-10 md:px-20"
    >
      <div className="w-[200px] md:w-[300px]">
        <Logo />
      </div>

      <button
        className="md:hidden absolute top-14 right-6 z-50"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <XIcon size={32} /> : <MenuIcon size={32} />}
      </button>

      <Button
        title="Acessar"
        className="h-[34px] w-[142px] text-[16px] hidden md:block"
      />

      <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;
