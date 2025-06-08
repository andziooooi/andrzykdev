import React from "react";
import "../styles/NavBar.css";
export const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#project">Projects</a>
        </li>
      </ul>
    </nav>
  );
};
