import { useState, useEffect } from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Welcome to my CV</h1>
        <p>Full Stack Web Developer & Freelancer — Sawaira Ijaz</p>
      </div>
    </header>
  );
}
