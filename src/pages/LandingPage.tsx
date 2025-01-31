import TopSection from "../components/landing-page/TopSection";
import SectionTitle from "../components/landing-page/SectionTitle";
import Overlay from "../components/landing-page/Overlay";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="bg-background relative -z-20">
      <TopSection />
      <Overlay />
      <div className="bg-background">
        <SectionTitle title="Sua Biblioteca de Jogos, Organizada" />
        <SectionTitle title="Dicas Que Fazem a Diferença" />
        <SectionTitle title="Conquistas Que Contam a Sua História" />
        <SectionTitle title="Conecte-se e Compartilhe" />
        <SectionTitle title="FAQs" />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
