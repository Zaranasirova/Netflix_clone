import React from 'react';
import card_data from "../assets/image/cards/Cards_data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import required modules
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

const Cards = () => {
    return (
        <div className="title-cards">
        <h2>Popular on Netflix</h2>
        <Swiper
               slidesPerView={4}
               centeredSlides={false}
               spaceBetween={0} // Boşluğu 0 olaraq təyin edin
               grabCursor={true}
               pagination={{
                 clickable: true,
               }}
               modules={[Pagination]}
               className="mySwiper"
        >
            {card_data.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className="card-image">
                        <img src={item.image} alt={item.name} />
                    </div>
                    <p>{item.name}</p>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
    )
}

export default Cards