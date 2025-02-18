import { Carrossel } from "../../components/BannerCarousel";
import { ListGames } from "../../components/ListGames";
import HeaderHome from "../../components/HeaderHome";

export default function Home() {

  return (
    <main>
      <HeaderHome />
      <Carrossel />
      <section className="flex flex-col gap-10 ml-16 max-sm:ml-4 mb-24">
        <ListGames text="Jogos Recomendados" />
        <ListGames text="Ação" />
        <ListGames text="Mundo Aberto" />
      </section>
    </main>
  );
}
