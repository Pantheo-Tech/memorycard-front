import { useState, useEffect } from "react";
import Slider from "react-slick";
import ReactStars from "react-stars";

import Button from "../Button";

type Game = {
  id: number;
  title: string;
  description: string;
  image: string;
  rating: number;
};

const GamesCarousel = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    fetch("/games.json")
      .then((response) => response.json())
      .then((data: Game[]) => {
        console.log("Dados carregados:", data);
        setGames(data);
        setCurrent(Math.floor(data.length / 2));
      })
      .catch((error) => console.error("Erro ao carregar os jogos: ", error));
  }, []);

  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 5,
    speed: 500,
    focusOnSelect: true,
    initialSlide: current,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrent(newIndex);
    },
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="my-12 p-2">
      {games.length > 0 ? (
        <Slider {...settings}>
          {games.map((game, index) => (
            <div
              key={game.id}
              className={`relative group ${
                index === current ? "scale-110" : "scale-90 grayscale"
              } transition-transform duration-300 flex flex-col justify-center items-center`}
            >
              <img
                src={game.image}
                alt={game.title}
                className="w-[316px] h-[445px] object-cover rounded-lg transition-transform flex flex-col justify-center items-center m-auto"
              />
              {index === current && (
                <div className="px-10 pb-10 md:px-2">
                  <div className="my-2">
                    <ReactStars
                      count={5}
                      value={game.rating}
                      size={24}
                      color2={"#ffd700"}
                      edit={false}
                    />
                  </div>
                  <p className="text-left text-sm mb-4">{game.description}</p>
                  <Button title="Leia mais" className="h-[34px] w-[224px] text-[18px]" />
                </div>
              )}
            </div>
          ))}
        </Slider>
      ) : (
        <p className="text-center text-xl">Carregando jogos...</p>
      )}
    </section>
  );
};

export default GamesCarousel;
