import React from 'react';
import Cards from '../../Components/Cards';

const CardsSection = () => {
    const cardTitles = ["Blockbuster Movies", "Only on Netflix", "Upcoming", "Top Picks for You"];
    
    return (
        <div className='CardsSection'>
            <div className="container">
                {cardTitles.map((title, index) => (
                    <Cards key={index} title={title} />
                ))}
            </div>
        </div>
    );
};

export default CardsSection;
