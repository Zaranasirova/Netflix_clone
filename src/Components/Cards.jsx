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
    const getSlidesPerView = () => {
        const width = window.innerWidth;
        if (width >= 1200) return 6;
        if (width >= 992) return 5; 
        if (width >= 768) return 4; 
        if (width >= 576) return 3; 
        return 1; 
    };
    return (
        <div className="title-cards">
        <h2>Popular on Netflix</h2>
        <Swiper
               slidesPerView={getSlidesPerView()}
               centeredSlides={false}
               spaceBetween={110} 
               grabCursor={true}
               pagination={{
                 clickable: true,
               }}
               modules={[Pagination]}
               className="mySwiper"
        >
            {card_data.map((item, index) => (
                <SwiperSlide key={index} className='card-list'>
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