import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../Button";
import iconMenuOpen from "../../assets/img/icon-menu.svg";
import iconMenuClose from "../../assets/img/icon-menu-close.svg";

const Header = () => {
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
        className="md:hidden absolute top-6 right-6 z-50"
        onClick={toggleMenu}
      >
        <img
          src={isMenuOpen ? iconMenuClose : iconMenuOpen}
          alt="Menu"
          className="w-8 h-8"
        />
      </button>

      <nav className="hidden md:block font-jomolhari">
        <ul className="flex gap-8 md:gap-[50px]">
          <li>
            <a href="/" className="hover:opacity-50">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:opacity-50">
              Sobre
            </a>
          </li>
          <li>
            <a href="#games" className="hover:opacity-50">
              Jogos
            </a>
          </li>
          <li>
            <a href="#faqs" className="hover:opacity-50">
              FAQs
            </a>
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
              <button className="absolute top-6 right-6" onClick={toggleMenu}>
                <img
                  src={iconMenuClose}
                  alt="Fechar Menu"
                  className="w-8 h-8"
                />
              </button>

              <nav className="text-xl space-y-6 font-jomolhari">
                <ul>
                  <li className="mb-2">
                    <a
                      href="/"
                      className="hover:opacity-50"
                      onClick={toggleMenu}
                    >
                      Home
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="#about"
                      className="hover:opacity-50"
                      onClick={toggleMenu}
                    >
                      Sobre
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="#games"
                      className="hover:opacity-50"
                      onClick={toggleMenu}
                    >
                      Jogos
                    </a>
                  </li>
                  <li className="mb-5">
                    <a
                      href="#faqs"
                      className="hover:opacity-50"
                      onClick={toggleMenu}
                    >
                      FAQs
                    </a>
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
