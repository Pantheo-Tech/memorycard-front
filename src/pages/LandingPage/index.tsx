import TopSection from "../../components/landing-page/TopSection";
import SectionTitle from "../../components/landing-page/SectionTitle";
import Footer from "../../components/Footer";
import Faq from "../../components/landing-page/Faq";
import GamesCarousel from "../../components/landing-page/GamesCarousel";
import { ContentSection } from "../../components/landing-page/ContentSection";
import img from "../../assets/img/Placeholder.png";
import SideMenu from "../../components/Menu";

const LandingPage = () => {
  return (
    <>
      <SideMenu />
      <div className="overflow-x-hidden">
        <section>
          <TopSection />
        </section>

        <section id="about">
          <SectionTitle title="Sobre Nós" />
          <ContentSection
            img={img}
            text="O MemoryCard é uma rede social dedicada a todos os amantes de jogos! Nosso objetivo é criar um espaço único onde você pode organizar, compartilhar e descobrir jogos de maneira divertida e interativa. Assim como o Backloggd, nossa plataforma oferece um lugar perfeito para registrar os jogos que você já jogou, os que está jogando e, claro, os que ainda quer jogar."
            isRowReverse={false}
          />
        </section>

        <section>
          <SectionTitle title="Sua Biblioteca de Jogos, Organizada" />
          <ContentSection
            img={img}
            text="Com o MemoryCard, você guarda todos os jogos que já jogou, os que está jogando agora e os que planeja jogar no futuro. Crie listas personalizadas e tenha sua coleção sempre à mão, como um save point da sua jornada."
            isRowReverse={true}
          />
        </section>

        <section id="games">
          <SectionTitle title="Jogos Populares" />
          <GamesCarousel />
        </section>

        <section>
          <SectionTitle title="Dicas Que Fazem a Diferença" />
          <ContentSection
            img={img}
            text="Registre aquelas dicas que te ajudaram a passar daquela fase difícil ou a desbloquear um segredo especial. No MemoryCard, você pode salvar e compartilhar estratégias que vão ajudar outros gamers a superar desafios."
            isRowReverse={false}
          />
        </section>

        <section>
          <SectionTitle title="Conquistas Que Contam a Sua História" />
          <ContentSection
            img={img}
            text="Cada troféu, cada medalha, cada marco é uma memória que merece ser guardada. No MemoryCard, você marca suas conquistas e celebra cada vitória, criando um histórico único da sua evolução gamer."
            isRowReverse={true}
          />
        </section>

        <section>
          <SectionTitle title="Conecte-se e Compartilhe" />
          <ContentSection
            img={img}
            text="O MemoryCard é mais que um site: é uma comunidade. Compartilhe suas listas, dicas e conquistas com outros gamers, e descubra o que eles estão jogando. Aqui, sua paixão por games ganha vida junto com outros jogadores."
            isRowReverse={false}
          />
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
      </div>
    </>
  );
};

export default LandingPage;
