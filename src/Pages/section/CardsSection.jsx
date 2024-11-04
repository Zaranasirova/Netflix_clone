import React from 'react';
import Cards from '../../Components/Cards';

const CardsSection = () => {
    const cardTitles = ["Blockbuster Movies", "Only on Netflix", "Upcoming"];
    const cardCategory=["top_rated", "upcoming","popular"]
    
    return (
        <div className='CardsSection'>
            <div className="container">
                {cardTitles.map((title, index) => (
                    <Cards key={index} title={title} category={cardCategory[index]} />
                ))}
            </div>
        </div>
    );
};

export default CardsSection;
