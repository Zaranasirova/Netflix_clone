import React, { useEffect, useState } from 'react';
import back_arrow from "../../assets/icons/back_arrow_icon.png";

const Player = () => {
    const [apiData,setApiData]=useState({
        name:"",
        key:"",
        published_at:"",
        type:""
    })
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTQ0YmU0YmI5Yzk2OWQ1ZTJjYzg4YmQzYmExMGM2NyIsIm5iZiI6MTczMDcyMTUwMy44MDIxMzk4LCJzdWIiOiI2NzI4OTA2ZTc2MTk3OWYwMDVlMmQyMDMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.kLEYDXwLyqWNfrYMBuleQOewVHSFtYI9GitvQvtmk8Q'
        }
    };


    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/1034541/videos?language=en-US', options)
            .then(res => res.json())
            .then(res => setApiData(res.results[0]))
            .catch(err => console.error(err));
    }, [])
    return (
        <section className='player-section'>
            <div className="container">
                <div className="player">
                    <div className='player-image'><img src={back_arrow} alt="back_arrow_icon" /></div>
                    <iframe src={`https://www.youtube.com/embed/${apiData.key}`} width="90%" height="90%" title='trailer' frameBorder="0" allowFullScreen></iframe>
                    <div className="player-info">
                        <p>{apiData.published_at.slice(0,10)}</p>
                        <p>{apiData.name}</p>
                        <p>{apiData.type}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Player