import React, { useEffect, useState, useContext } from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import { MovieContext } from "../context/MovieContext.jsx";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [searchReview, setSearchReview] = useState("");
    const { handleMovieClick } = useContext(MovieContext);

    useEffect(() => {
        const fetchReviews = async () => {
            const response = await fetch(
                "http://localhost:1337/api/reviews?populate=*",
                {}
            );
            const data = await response.json();
            if (data.data) {
                setReviews(data.data);
            }
        };
        fetchReviews();
    }, []);

    const searchFilter = reviews
        .filter((review) =>
            review.title?.toLowerCase().includes(searchReview.toLowerCase())
        )
        .sort((a, b) => a.title.localeCompare(b.title));

    return (
        <div className="reviews-container">
            <div className="searchbar">
                <h2>Recensioner</h2>
                <input
                    type="text"
                    placeholder="Sök recensioner..."
                    value={searchReview}
                    onChange={(e) => setSearchReview(e.target.value)}
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
                        <p className="review-review">
              {review.review.substring(0, 200) + "..."}
              <NavLink
                to={"/recensioner/" } //+ review.id ska ligga med här
                end
                onClick={() => handleMovieClick(review)}
              >
                Läs mer ➡️
              </NavLink>
            </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;