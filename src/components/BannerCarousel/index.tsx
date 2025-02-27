import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import LeagueofLegends from '../../assets/img/LeagueofLegends.png';
import Fortnite from '../../assets/img/fortnite.png';
import CallofDuty from '../../assets/img/CSBanner.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectCreative } from 'swiper/modules';

export function Carrossel() {
    const items = [
        {
            image: CallofDuty,
            title: "Call of Duty",
            text: "Jogo de estratégia em que duas equipes de cinco poderosos Campeões se enfrentam para destruir a base uma da outra. Escolha entre mais de 140 Campeões para realizar jogadas épicas, assegurar abates e destruir torres conforme você luta até a vitória."
        },
        {
            image: LeagueofLegends,
            title: "League of Legends",
            text: "Jogo de estratégia em que duas equipes de cinco poderosos Campeões se enfrentam para destruir a base uma da outra. Escolha entre mais de 140 Campeões para realizar jogadas épicas, assegurar abates e destruir torres conforme você luta até a vitória."
        },
        {
            image: Fortnite,
            title: "Fortnite",
            text: "Jogo de estratégia em que duas equipes de cinco poderosos Campeões se enfrentam para destruir a base uma da outra. Escolha entre mais de 140 Campeões para realizar jogadas épicas, assegurar abates e destruir torres conforme você luta até a vitória."
        },
    ];

    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={false}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            grabCursor={true}
            effect={'creative'}
            creativeEffect={{
                prev: {
                    shadow: true,
                    translate: [0, 0, -400],
                },
                next: {
                    translate: ['100%', 0, 0],
                },
            }}
            modules={[Autoplay, Pagination, Navigation, EffectCreative]}
        >
            {items.map((item, index) => (
                <SwiperSlide key={index} className="bg-black">
                    <img src={item.image} alt="Imagem" className="opacity-70 h-[100vh] max-h-[900px] max-lg:max-h-[700px] max-sm:max-h-[453px] object-cover" />
                    <section className="absolute max-md:left-5 left-14 top-[50%] translate-y-[-50%] flex gap-10 flex-col text-gray-200 max-w-2xl max-sm:max-w-72">
                        <h3 className="text-[50px] max-md:text-4xl max-sm:text-2xl font-bold">{item.title}</h3>
                        <p className="text-lg max-md:text-base max-sm:text-xs">{item.text}</p>
                        <Link to="#" className="hover:text-white hover:bg-buttonHover bg-red rounded-md w-28 max-sm:w-24 h-8 max-sm:h-6 px-[10px] py-5px text-base max-md:text-sm max-sm:text-xs font-bold flex items-center justify-center">Saiba mais</Link>
                    </section>
                </SwiperSlide>
            ))}
            <div className="absolute bg-custom-gradient-bottom-banner w-full h-[100px] bottom-0 z-50"></div>
        </Swiper>
    );
}
