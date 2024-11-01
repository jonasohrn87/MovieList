import React from "react";
import { useContext } from "react";
import "../App.css";
import { MovieContext } from "../context/MovieContext.jsx";

const AboutUs = () => {
  const { about } = useContext(MovieContext);
  console.log("about log:", about);

  let foto;
  for (let i = 0; i < about.length; i++) {
    if (about[i].aboutFoto != null) {
      foto = about[i].aboutFoto.formats.small.url;
    }
  }

  return (
    <div key={about.id} className="about-grid">
      <h1>About Us</h1>
      <div className="about-container">
        <img
          src={`http://localhost:1337/${foto}`}
          alt="foto om oss"
          className="about-foto"
        />
        <div className="about-text">
          <ul>
            {about.map((about) => (
              <li key={about.id}>
                <label>{about.aboutName}</label>
                <br />
                {about.aboutText}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
