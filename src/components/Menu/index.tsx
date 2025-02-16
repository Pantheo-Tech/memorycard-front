import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

const menuItems = [
  { title: "Home", link: "header" },
  { title: "Sobre", link: "about" },
  { title: "Jogos", link: "games" },
  { title: "FAQs", link: "faqs" },
];

export default function SideMenu() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav
      className="hidden md:flex fixed top-1/2 left-0 z-50 flex-col items-start transition-all duration-500 ease-in-out"
      onMouseEnter={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
    >
      <AnimatePresence>
        {showMenu ? (
          <motion.ul
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-red text-white p-4 rounded-r-lg shadow-lg"
          >
            {menuItems.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1 }}
                className="p-2 cursor-pointer transition-colors"
              >
                <Link to={item.link} smooth={true} duration={500} className="text-white">
                  {item.title}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        ) : (
          <motion.h1
            exit={{ x: -50, opacity: 0 }}
            whileHover={{ scale: 1.2 }}
            className="text-white bg-red p-5 rounded-r-lg shadow-md cursor-pointer"
          >
            MENU
          </motion.h1>
        )}
      </AnimatePresence>
    </nav>
  );
}
