import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { XIcon } from "lucide-react";
import Button from "../Button";

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
                  <Link
                    to={link}
                    smooth
                    duration={500}
                    onClick={toggleMenu}
                    className="hover:opacity-50 cursor-pointer"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Button title="Acessar" className="h-[34px] w-[142px] text-[16px]" onClick={toggleMenu} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
