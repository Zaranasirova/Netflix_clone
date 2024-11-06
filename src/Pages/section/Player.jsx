import React, { useEffect, useState } from 'react';
import back_arrow from "../../assets/icons/back_arrow_icon.png";
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
    const [apiData, setApiData] = useState({
        name: "",
        key: "",
        published_at: "",
        type: ""
    });
    const [loading, setLoading] = useState(true); // Yükləmə vəziyyəti
    const [error, setError] = useState(null); // Xətalar üçün
    const navigate = useNavigate();
    const { id } = useParams();

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTQ0YmU0YmI5Yzk2OWQ1ZTJjYzg4YmQzYmExMGM2NyIsIm5iZiI6MTczMDcyMTUwMy44MDIxMzk4LCJzdWIiOiI2NzI4OTA2ZTc2MTk3OWYwMDVlMmQyMDMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.kLEYDXwLyqWNfrYMBuleQOewVHSFtYI9GitvQvtmk8Q'
        }
    };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
            .then(res => res.json())
            .then(res => {
                if (res.results && res.results.length > 0) {
                    setApiData(res.results[0]);
                } else {
                    setError('No videos found for this movie.');
                }
            })
            .catch(err => {
                console.error(err);
                setError('Failed to fetch data.');
            })
            .finally(() => setLoading(false)); // Yükləmə bitdikdən sonra loading-i false edirik
    }, [id]);

    if (loading) {
        return <div>Loading...</div>; // Yüklənmə zamanı mesajı
    }

    if (error) {
        return <div>{error}</div>; // Xəta mesajı
    }

    return (
        <section className='player-section'>
            <div className="container">
                <div className="player">
                    <div className='player-image'>
                        <img
                            src={back_arrow}
                            alt="back_arrow_icon"
                            onClick={() => { navigate("/") }}
                        />
                    </div>
                    {apiData.key ? (
                        <iframe
                            src={`https://www.youtube.com/embed/${apiData.key}`}
                            width="90%"
                            height="90%"
                            title='trailer'
                            frameBorder="0"
                            allowFullScreen
                        />
                    ) : (
                        <p>No trailer available.</p> // Trailer olmadıqda mesaj
                    )}
                    <div className="player-info">
                        <p>{new Date(apiData.published_at).toLocaleDateString()}</p> {/* Tarixi daha düzgün formatda göstərmək */}
                        <p>{apiData.name}</p>
                        <p>{apiData.type}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Player;
