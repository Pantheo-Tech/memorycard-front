import Button from "../Button";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-transparent text-primaryText sm:text-xl relative z-10 py-10 px-10 md:px-20">
      <p>Logo Aqui</p>
      <nav className="font-jomolhari">
        <ul className="flex gap-8 md:gap-[50px]">
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
      <Button title="Acessar" className="h-[34px] w-[142px] text-[16px]" />
    </header>
  );
};

export default Header;
