import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll"; // Importe o Link do react-scroll
import Button from "../Button";
import MenuCloseIcon from "./MenuCloseIcon";
import MenuOpenIcon from "./MenuOpenIcon";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <header className="flex justify-between items-center bg-transparent text-primaryText sm:text-xl relative z-10 py-10 px-10 md:px-20">
      <p>Logo Aqui</p>

      <button
        className="md:hidden absolute top-9 right-6 z-50"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <MenuCloseIcon /> : <MenuOpenIcon />}
      </button>

      <nav className="hidden md:block font-jomolhari">
        <ul className="flex gap-8 md:gap-[50px]">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="hover:opacity-50"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="hover:opacity-50"
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              to="games"
              smooth={true}
              duration={500}
              className="hover:opacity-50"
            >
              Jogos
            </Link>
          </li>
          <li>
            <Link
              to="faqs"
              smooth={true}
              duration={500}
              className="hover:opacity-50"
            >
              FAQs
            </Link>
          </li>
        </ul>
      </nav>

      <Button
        title="Acessar"
        className="h-[34px] w-[142px] text-[16px] hidden md:block"
      />

      <AnimatePresence>
        {isMenuOpen && (
          <div className="fixed inset-0 z-40">
            <div
              className="absolute inset-0 bg-black bg-opacity-50"
              onClick={toggleMenu}
            ></div>

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed right-0 top-0 w-full h-full bg-background text-white flex flex-col items-center justify-center z-50"
            >
              <button className="absolute top-9 right-6" onClick={toggleMenu}>
                <MenuCloseIcon />
              </button>

              <nav className="text-xl space-y-6 font-jomolhari">
                <ul>
                  <li className="mb-2">
                    <Link
                      to="home"
                      smooth={true}
                      duration={500}
                      onClick={toggleMenu}
                      className="hover:opacity-50"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="about"
                      smooth={true}
                      duration={500}
                      onClick={toggleMenu}
                      className="hover:opacity-50"
                    >
                      Sobre
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="games"
                      smooth={true}
                      duration={500}
                      onClick={toggleMenu}
                      className="hover:opacity-50"
                    >
                      Jogos
                    </Link>
                  </li>
                  <li className="mb-5">
                    <Link
                      to="faqs"
                      smooth={true}
                      duration={500}
                      onClick={toggleMenu}
                      className="hover:opacity-50"
                    >
                      FAQs
                    </Link>
                  </li>
                </ul>
              </nav>
              <Button
                title="Acessar"
                className="h-[34px] w-[142px] text-[16px]"
                onClick={toggleMenu}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
