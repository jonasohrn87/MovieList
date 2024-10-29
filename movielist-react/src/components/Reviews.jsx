import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext.jsx";
import "../App.css";

const Reviews = () => {
  const { searchFilter, setSearchMovie, searchMovie } =
    useContext(MovieContext);
  return (
    <div className="reviews-container">
      <div className="searchbar">
        <h2>Recensioner</h2>
        <input
          type="text"
          placeholder="Sök recensioner..."
          value={searchMovie}
          onChange={(e) => setSearchMovie(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="reviews-grid">
        {searchFilter.map((review) => (
          <div key={review.id} className="review-card">
            <h2>{review.title}</h2>

            <p>Betyg: {review.rating}</p>
            {review.image && (
              <img
                src={`http://localhost:1337${review.image.url}`}
                alt={`${review.title} image`}
                className="review-image"
              />
            )}
            <p>{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
