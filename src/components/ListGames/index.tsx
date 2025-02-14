import { ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

import CS from "../../assets/img/Cs.png"


type ListGamesType = {
    text: string
}

export interface Game {
    id: string;
    bannerUrl: string;
}

const GamesTop: Game[] = [
    {
        id: "1",
        bannerUrl: CS
    },
    {
        id: "2",
        bannerUrl: CS
    },
    {
        id: "3",
        bannerUrl: CS
    },
    {
        id: "4",
        bannerUrl: CS
    },
    {
        id: "5",
        bannerUrl: CS
    },
    {
        id: "6",
        bannerUrl: CS
    },
    {
        id: "7",
        bannerUrl: CS
    },
    {
        id: "8",
        bannerUrl: CS
    },
    {
        id: "9",
        bannerUrl: CS
    },
    {
        id: "10",
        bannerUrl: CS
    }
]

export function ListGames({ text }: ListGamesType) {
    return (
        <div>
            <section className="text-gray-200 flex gap-5 items-center text-2xl font-bold mb-5">
                <span>{text}</span>
                <ChevronRight width={24} />
            </section>
            <Swiper
                slidesPerView="auto"
                spaceBetween={20}
                direction='horizontal'
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: "auto",
                        spaceBetween: 20,
                    },
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="listGames"
            >

                {GamesTop.map((game, index) => (
                    <SwiperSlide key={index}>
                        <Link to="#" className="w-[230px] h-[314px] rounded-xl"><img key={game.id}
                            src={game.bannerUrl}
                            alt="Imagem" className="rounded-xl border-gray-800 border" width={230}
                            height={314} /></Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
