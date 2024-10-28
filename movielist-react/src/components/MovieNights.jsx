import React, { useEffect, useState } from "react";
import "../App.css";

const MovieNights = () => {

    return (
        <div className="movieNights-container">
            <h2>Filmträffar</h2>

            <h3>Fantasy Kväll</h3>
            <p>Lördag 20:00</p>
            
            <h3>Skräck Fredag</h3>
            <p>Fredag 14:00</p>
        </div>
    );
};

export default MovieNights;