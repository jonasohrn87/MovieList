import React from "react";
import { useContext } from "react";
import "../App.css";
import { MovieContext } from "../context/MovieContext.jsx";

const AboutUs = () => {
  const { about } = useContext(MovieContext);
  const { aboutTitle, aboutFoto } = about; //aboutFoto
  console.log(aboutFoto);

  return (
    <div key={about.id} className="about-grid">
      <h1>{aboutTitle}</h1>
      <div className="about-container">
        <img
          src={`http://localhost:1337/${aboutFoto.formats.small.url}`}
          alt="foto om oss"
          className="about-foto"
        />
        <div className="about-text">
          <p>{about.aboutIntro}</p>
          <ul>
            <li>
              <label>Jonas</label>
              <br />
              {about.aboutTextJonas}
            </li>
            <li>
              <label>Rasmus</label>
              <br />
              {about.aboutTextRasmus}
            </li>
            <li>
              <label>Olle</label>
              <br />
              {about.aboutTextOlle}
            </li>
            <li>
              <label>Johnny</label>
              <br />
              {about.aboutTextJohnny}
            </li>
            <li>
              <label>Nikos</label>
              <br />
              {about.aboutTextNikos}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
