import React, { useEffect, useState } from "react";
import "../App.css";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [searchReview, setSearchReview] = useState("");

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
            <input
                type="text"
                placeholder="Sök recensioner..."
                value={searchReview}
                onChange={(e) => setSearchReview(e.target.value)}
            />
            <ul>
                {searchFilter.map((review) => (
                    <div key={review.id}>
                        <h2>{review.title}</h2>
                        <p>{review.review}</p>
                        <p>Betyg: {review.rating}</p>
                        {review.image && (
                            <img
                                src={`http://localhost:1337${review.image.url}`}
                                alt={`${review.title} image`}
                            />
                        )}
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Reviews;