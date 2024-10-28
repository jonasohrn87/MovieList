import React, { useEffect, useState } from "react";
import "../App.css";

const MovieNights = () => {
    const [movieNights, setMovieNights] = useState([]);
    
    useEffect(() => {
        const fetchMovieNights = async () => {
            const respons = await fetch(
                "http://localhost:1337/api/movie-nights?populate=*",
                {}
            );
            const data = await respons.json();
            if (data.data) {
                setMovieNights(data.data);
            }
        };
        fetchMovieNights();           
    }, []);

    return (
        <div className="movieNights-container">
            <div>
                {movieNights.map((movieNights) => (
                    <div key={movieNights.id} className="">
                        <h2>{new Date(movieNights.dateTime)
                            .toLocaleTimeString('sv-SE', {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit',
                            hour: '2-digit', 
                            minute: '2-digit' }) + " " + movieNights.title}
                            </h2>
                        <div className="movieNights-innerContainer">
                        <div>
                        {movieNights.image && (
                            <img 
                            src={`http://localhost:1337${movieNights.image.url}`}
                            alt={`${movieNights.title} event image`}
                            className="movieNights-image"
                            />                            
                        )} 

                        </div>
                        <div>
                        <h3>{movieNights.titleDescription}</h3>
                        {movieNights.description.split('\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                        ))}                   

                        </div>

                        </div>

                    </div>
                ))}
            </div>

            <h2>Filmträffar</h2>

            <h3>Fantasy Kväll</h3>
            <p>Lördag 20:00</p>
            
            <h3>Skräck Fredag</h3>
            <p>Fredag 14:00</p>
        </div>
    );
};

export default MovieNights;