import Header from "./components/Header";

import "./styles/global.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ReactNode } from "react";

function App({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="relative">{children}</main>
    </>
  );
}

export default App;
