import Header from "./components/Header";

import "./styles/global.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'swiper/css';

import { ReactNode } from "react";
import NavMenu from "./components/NavMobile";

function App({ children }: { children: ReactNode }) {
  return (
    <>
      {/* <Header /> */}
      <main className="relative">{children}</main>
      <NavMenu />
    </>
  );
}

export default App;
