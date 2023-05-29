import React from "react";
import logo from "../../assets/images/logo.png";
import user from "../../assets/images/user.jpg";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            <a href="#">
              <img src={logo} alt="tech-resource" /> Technology Resources
            </a>
          </div>
          <nav className="header__menu">
            <ul>
              <li>
                <a href="/articles">Articles</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/profile">
                  <img src={user} alt="profile" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
