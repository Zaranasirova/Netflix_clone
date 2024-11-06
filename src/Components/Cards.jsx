import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ title, category }) => {
    const cardsRef = useRef();
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [apiData, setApiData] = useState([]);

    useEffect(() => {


        fetch(`https://api.themoviedb.org/3/movie/${category? category :"now_playing"}?language=en-US&page=1`, options)
            .then(res => res.json())
            .then(res => setApiData(res.results))
            .catch(err => console.error(err));


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

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTQ0YmU0YmI5Yzk2OWQ1ZTJjYzg4YmQzYmExMGM2NyIsIm5iZiI6MTczMDcyMTUwMy44MDIxMzk4LCJzdWIiOiI2NzI4OTA2ZTc2MTk3OWYwMDVlMmQyMDMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.kLEYDXwLyqWNfrYMBuleQOewVHSFtYI9GitvQvtmk8Q'
        }
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
                {apiData.map((item, index) => (
                    <Link to={`/player/${item.id}`} className="card-list" key={index}>
                        <div className="card-image">
                            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.original_title} />
                        </div>
                        <p>{item.original_title}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Cards;
