import { ReactNode } from "react";
import { useLocation } from "react-router-dom";

import Header from "./components/Header";
import HeaderHome from "./components/HeaderHome";
import NavMenu from "./components/NavMobile";

import "./styles/global.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'swiper/css';

function App({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();

  const isSpecialPage = pathname !== "/register" && pathname !== "/" && pathname !== "/login";

  return (
    <>
      {isSpecialPage ? <HeaderHome /> : <Header />}
      <main className="relative">
        {children}
      </main>
      {isSpecialPage && <NavMenu />}
    </>
  );
}

export default App;
