import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HashLink } from "react-router-hash-link"; // Importando HashLink
import { XIcon } from "lucide-react";
import Button from "../Button";
import { Link, useLocation } from "react-router-dom";

interface MobileMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const menuItems = [
  { title: "Home", link: "home" },
  { title: "Sobre", link: "about" },
  { title: "Jogos", link: "games" },
  { title: "FAQs", link: "faqs" },
];

const MobileMenu: React.FC<MobileMenuProps> = ({ isMenuOpen, toggleMenu }) => {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background text-white"
        >
          <button className="absolute top-14 right-6" onClick={toggleMenu}>
            <XIcon size={32} />
          </button>
          <nav className="text-xl space-y-6 font-jomolhari">
            <ul>
              {menuItems.map(({ title, link }) => (
                <li key={link} className="mb-2">
                  <HashLink
                    to={`/#${link}`} // Roteamento + rolagem usando #id
                    smooth
                    onClick={toggleMenu}
                    className="hover:opacity-50 cursor-pointer"
                  >
                    {title}
                  </HashLink>
                </li>
              ))}
            </ul>
          </nav>
          {isLandingPage && (
            <Link to="/register" onClick={toggleMenu}>
              <Button title="Acessar" className="h-[34px] w-[142px] text-[16px]" />
            </Link>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
