const FooterNav = () => {
  return (
    <nav className="absolute bottom-0">
      <ul className="flex gap-8 md:gap-[50px] p-4 font-jomolhari">
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
  );
};

export default FooterNav;
