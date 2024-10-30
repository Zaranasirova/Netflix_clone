import React, { useRef, useEffect, useState } from 'react';
import card_data from "../assets/image/cards/Cards_data";

const Cards = ({ title, category }) => {
    const cardsRef = useRef();
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - cardsRef.current.offsetLeft;
            const walk = x - startX;
            cardsRef.current.scrollLeft = scrollLeft - walk;
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        } else {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, startX, scrollLeft]);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - cardsRef.current.offsetLeft);
        setScrollLeft(cardsRef.current.scrollLeft);
    };

    return (
        <div className="title-cards">
            <h2>{title || "Popular on Netflix"}</h2>
            <div
                className="card-wrapper"
                ref={cardsRef}
                onMouseDown={handleMouseDown}
                style={{
                    overflowX: 'scroll',
                    cursor: isDragging ? 'grabbing' : 'grab',
                    scrollSnapType: 'x mandatory'
                }}
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
