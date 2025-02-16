import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import Button from "../Button";
import Logo from "./Logo";
import MobileMenu from "../MobileMenu";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const isLandingPage = location.pathname === "/";

  return (
    <header
      id="header"
      className="flex justify-between items-center bg-transparent text-primaryText sm:text-xl relative z-10 py-10 px-10 md:px-20"
    >
      <div className="w-[200px] md:w-[300px]">
        <Logo />
      </div>

      <button className="md:hidden absolute top-14 right-6 z-50" onClick={toggleMenu}>
        {isMenuOpen ? <XIcon size={32} /> : <MenuIcon size={32} />}
      </button>

      {isLandingPage && (
        <Link to="/register">
          <Button title="Acessar" className="h-[34px] w-[142px] text-[16px] hidden md:block" />
        </Link>
      )}

      <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
}
