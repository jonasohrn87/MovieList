import React, { useEffect, useState } from "react";
import "../App.css";

const MovieNights = () => {
    const [movieNights, setMovieNights] = useState([]);
    const [showMore, setShowMore] = useState(false); 
    const [maxParagraphs, setMaxParagraphs] = useState(4);
    const [showOlderEvents, setShowOlderEvents] = useState(false);

    const handleShowMore = () => {
        setShowMore(!showMore);
    };

    const handleShowOlderEvents = () => {
        setShowOlderEvents(!showOlderEvents);
    };

    useEffect(() => {
        const fetchMovieNights = async () => {
            const respons = await fetch(
                "http://localhost:1337/api/movie-nights?populate=*"
            );
            const data = await respons.json();
            if (data.data) {
                setMovieNights(data.data);
            }
        };

        const updateMaxParagraphs = () => {
            if (window.innerWidth < 768) {
                setMaxParagraphs(2);
            } else if (window.innerWidth < 1024) {
                setMaxParagraphs(3);
            } else {
                setMaxParagraphs(4);
            }
        };

        fetchMovieNights();
        updateMaxParagraphs();
        window.addEventListener('resize', updateMaxParagraphs);
        
        return () => {
            window.removeEventListener('resize', updateMaxParagraphs);
        };
    }, []);

    const sortedMovieNights = [...movieNights].sort((a, b) => {
        const dateA = new Date(a.dateTime).getTime();
        const dateB = new Date(b.dateTime).getTime();
        return dateA - dateB;
    });

    return (
        <div className="movieNights-container">
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={showOlderEvents}
                        onChange={handleShowOlderEvents}
                    />
                    Visa äldre evenemang
                </label>
            </div>
            <div>
                {sortedMovieNights
                    .filter(movieNight => showOlderEvents || new Date(movieNight.dateTime) >= new Date())
                    .map((movieNight) => (
                        <div key={movieNight.id}>
                            <div className="date-title-container">
                                <h2>{new Date(movieNight.dateTime)
                                    .toLocaleTimeString('sv-SE', {
                                        year: 'numeric',
                                        month: '2-digit',
                                        day: '2-digit',
                                        hour: '2-digit', 
                                        minute: '2-digit' 
                                    })}
                                </h2>
                                <h2 className="movieNights-title">{movieNight.title}</h2>
                            </div>
                            <div className="movieNights-innerContainer">
                                <div className="image-price-location-container">
                                    {movieNight.image && (
                                        <img 
                                            src={`http://localhost:1337${movieNight.image.url}`}
                                            alt={`${movieNight.title} event image`}
                                            className="movieNights-image"
                                        />                            
                                    )} 
                                    <div className="price-location">
                                        <h3>Pris: {movieNight.cost} kr</h3>
                                        <h3>Plats: {movieNight.location}</h3>
                                    </div>
                                </div>
                                <div>
                                    <h3>{movieNight.titleDescription}</h3>
                                    {movieNight.description.split('\n').slice(0, showMore ? undefined : maxParagraphs).map((paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                    ))}  
                                    {movieNight.description.split('\n').length > maxParagraphs && (
                                        <span onClick={handleShowMore} className="show-more-text">
                                            {showMore ? 'Läs mindre ⬆️' : 'Läs mer ➡️'}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default MovieNights;
