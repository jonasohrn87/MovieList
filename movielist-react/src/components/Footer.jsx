import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext.jsx";
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter, FaTiktok } from "react-icons/fa6";

const Footer = () => {
  const { footer } = useContext(MovieContext);

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-content-contact">
          <FaInstagramSquare />
          <FaXTwitter />
          <FaFacebookSquare />
          <FaTiktok />
          <FaLinkedin />
        </div>
        {footer.map((footer) => (
          <p key={footer.id}>{footer ? footer.footerText : ""}</p>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
