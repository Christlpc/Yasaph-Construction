import React from "react";
import logo from "../Image/Yasaph logo.png";

function Header() {
  return (
    <div className="header">
      <nav>
        <img src={logo} alt="logo" id="logo"></img>

        <ul className="tete">
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">A propos</a>
          </li>
          <li>
            <a href="#Service">Service</a>
          </li>
          <li>
            <a href="#Projets">Projets </a>
          </li>
          <li>
            <a href="#Contact">Contacts</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
