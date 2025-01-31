import { Link } from "react-router-dom"
import Button from "./Button";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-transparent text-primaryText sm:text-xl relative z-10 p-10">
      <p>Logo Aqui</p>
      <nav className="font-jomolhari">
        <ul className="flex gap-8">
          <li>
            <a href="/" className="hover:opacity-50">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:opacity-50">
              Sobre
            </a>
          </li>
          <li>
            <a href="/games" className="hover:opacity-50">
              Jogos
            </a>
          </li>
          <li>
            <a href="/faqs" className="hover:opacity-50">
              FAQs
            </a>
          </li>
        </ul>
      </nav>
      <Button title="Acessar" className="h-[34px] w-[142px] text-[16px]"/>
    </header>
  );
}

export default Header
