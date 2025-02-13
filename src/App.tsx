import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import "./styles/global.css";
import 'swiper/css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <main className="relative">
        <LandingPage />
      </main>
    </>
  );
}

export default App;
