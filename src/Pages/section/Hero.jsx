import React from 'react';
import bg_image from "../../assets/image/hero_banner.jpg";
import hero_title from "../../assets/image/hero_title.png";
import play_button from "../../assets/icons/play_icon.png";
import info_icon from "../../assets/icons/info_icon.png"
import Cards from '../../Components/Cards';

const Hero = () => {
    return (
        <section className='hero-section'>
            <div className="hero">
                <img src={bg_image} alt="hero-bg-image" className='banner-image' />
            </div>
            <div className="hero-caption">
                <div className="container">
                    <div className="hero-wrapper">
                        <img src={hero_title} alt="hero-title-image" className='caption-img' />
                        <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
                        <div className="hero-btns">
                            <button className='btn'><img src={play_button} alt="play-icon"/>Play</button>
                            <button className='btn dark-btn'><img src={info_icon} alt="info-icon" />More İnfo</button>
                        </div>
                    </div>
                    <Cards/>
                </div>
            </div>

        </section>
    )
}

export default Hero