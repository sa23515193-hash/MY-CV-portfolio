import React, { useState } from "react";
import "./App.css"; // App ka main CSS

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Objective from "./components/Objective";
import SkillsCarousel from "./components/SkillsCarousel";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Profiles from "./components/Profiles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function App() {
  

  return (

    <div className="app-container">
      <Header />
      <Navbar/>
      <Intro />
      < Objective/>
      < SkillsCarousel/>
      < Education/>
      < Experience/>
      < Projects/>
      < Profiles/>
      < Contact/>
      <Footer />
      </div>
  );
}
