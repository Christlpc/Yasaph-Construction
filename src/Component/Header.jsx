import React from "react";
import logo from "../Image/Yasaph logo.png";

function Header() {
  return (
    <div className="header">
      <nav>
        <img src={logo} alt="logo" id="logo"></img>
        <ul className="tete">
          <li>
            <a href="#home">Home</a>
          </li>
            <li>
              <a href="login">A propos</a>
            </li>
            <li>
            <a href="#aboutus">Service</a>
          </li>
          <li>
            <a href="login">Projets </a>
          </li>
          <li>
            <a href="/login">Contacts</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
