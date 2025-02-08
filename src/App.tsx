import Header from "./components/header";
import LandingPage from "./pages/LandingPage";
import "./styles/global.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
