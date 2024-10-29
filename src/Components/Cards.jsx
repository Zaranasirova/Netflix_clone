import React from 'react';
import card_data from "../assets/image/cards/Cards_data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Cards = () => {
    return (
        <div className="title-cards">
            <h2>Popular on Netflix</h2>
            <div className="card-list">
                {
                    card_data.map((item, index) => (
                        <Swiper className="mySwiper" key={index}>
                            <SwiperSlide>
                                <div className="card-image">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <p>{item.name}</p>
                            </SwiperSlide>
                        </Swiper>
                    ))
                }
            </div>
        </div>
    )
}

export default Cards