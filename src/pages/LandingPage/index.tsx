import TopSection from "../../components/landing-page/TopSection";
import SectionTitle from "../../components/landing-page/SectionTitle";
import Footer from "../../components/Footer";

const LandingPage = () => {
  return (
    <>
      <section>
        <TopSection />
      </section>

      <section>
        <SectionTitle title="Sua Biblioteca de Jogos, Organizada" />
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

      <section>
        <SectionTitle title="FAQs" />
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
};

export default LandingPage;
