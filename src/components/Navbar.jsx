import React from "react";
import "./Navbar.css"; // optional, styling ke liye

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#intro">Intro</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;