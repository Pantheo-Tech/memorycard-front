import TopSection from "../../components/landing-page/TopSection";
import SectionTitle from "../../components/landing-page/SectionTitle";
import Footer from "../../components/Footer";
import Faq from "../../components/landing-page/Faq";
import GamesCarousel from "../../components/landing-page/GamesCarousel";

const LandingPage = () => {
  return (
    <>
      <section>
        <TopSection />
      </section>

      <section id="about">
        <SectionTitle title="Sobre Nós" />
      </section>

      <section>
        <SectionTitle title="Sua Biblioteca de Jogos, Organizada" />
      </section>

      <section id="games">
        <SectionTitle title="Jogos Populares" />
        <GamesCarousel />
      </section>

      <section>
        <SectionTitle title="Dicas Que Fazem a Diferença" />
      </section>

      <section>
        <SectionTitle title="Conquistas Que Contam a Sua História" />
      </section>

      <section>
        <SectionTitle title="Conecte-se e Compartilhe" />
      </section>

      <section id="faqs">
        <SectionTitle title="FAQs" />
      </section>

      <section>
        <Faq />
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
};

export default LandingPage;
