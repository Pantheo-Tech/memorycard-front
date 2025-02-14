import Header from "./components/Header";

import "./styles/global.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Footer from "./components/Footer";
import { ReactNode } from "react";

function App({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="relative">{children}</main>
      <Footer />
    </>
  );
}

export default App;
