import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import "./styles/global.css";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <LandingPage />
      </main>
    </>
  );
}

export default App;
