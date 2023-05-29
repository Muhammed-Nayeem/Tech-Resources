import React from "react";
import "./Footer.css";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <p>{currentYear}&copy;Tech-Resources || All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
