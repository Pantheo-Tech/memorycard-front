import { Link } from "react-router-dom"
import Button from "./Button";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-transparent text-primaryText text-xl relative z-10 p-10">
      <h1>Logo Aqui</h1>
      <nav>
        <ul className="flex gap-8">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">Sobre</a>
          </li>
          <li>
            <a href="/games">Jogos</a>
          </li>
          <li>
            <a href="/faqs">FAQs</a>
          </li>
        </ul>
      </nav>
      <Button title="Acessar" height="34px" width="142px" />
    </header>
  );
}

export default Header