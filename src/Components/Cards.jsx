import React, { useRef, useEffect, useState } from 'react';
import card_data from "../assets/image/cards/Cards_data";

const Cards = () => {
    const cardsRef = useRef();
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - cardsRef.current.offsetLeft);
        setScrollLeft(cardsRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };
    

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - cardsRef.current.offsetLeft;
        const walk = (x - startX); 
        cardsRef.current.scrollLeft = scrollLeft - walk; 
    };

    return (
        <div className="title-cards">
            <h2>Popular on Netflix</h2>
            <div
                className="card-wrapper"
                ref={cardsRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                style={{ overflowX: 'scroll', cursor: isDragging ? 'grabbing' : 'grab', scrollSnapType: 'x mandatory' }}
            >
                {card_data.map((item, index) => (
                    <div className="card-list" key={index}>
                        <div className="card-image">
                            <img src={item.image} alt={item.name} />
                        </div>
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cards;
