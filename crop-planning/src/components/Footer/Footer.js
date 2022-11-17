import React from "react";
import "./Footer.css";

const Footer = () => (
  <div className="footer">
    <p>&copy;{new Date().getFullYear()} SoilLab</p>
    <p>Urbana, IL</p>
  </div>
);

export default Footer;