import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Movie = (props) => {
  return (
    <div className="movies-grid">
      {props.filter ? (
        props.filter.map((movie) => (
          <div key={movie.id} className="movie-card">
            <h2>{movie.title}</h2>
            {movie.poster && (
              <img
                src={`http://localhost:1337${movie.poster.url}`}
                alt={`${movie.title} poster`}
                className="movie-poster"
              />
            )}
            <p className="movie-description">
              {movie.description.substring(0, 200) + "..."}
              <NavLink
                to={"/movie"}
                end
                onClick={() => props.handleClick(movie)}
              >
                Läs mer ➡️
              </NavLink>
            </p>
          </div>
        ))
      ) : (
        <div key={props.movie.id} className="movie-card">
          <h2>{props.movie.title}</h2>
          {props.movie.poster && (
            <img
              src={`http://localhost:1337${props.movie.poster.url}`}
              alt={`${props.movie.title} poster`}
              className="movie-poster"
            />
          )}
          <p className="movie-description">{props.movie.description}</p>
        </div>
      )}
    </div>
  );
};

export default Movie;
