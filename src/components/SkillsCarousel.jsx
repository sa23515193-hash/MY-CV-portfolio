import React, { useEffect, useRef } from "react";
import "./SkillsCarousel.css"; 

// ✅ IMPORT IMAGES FROM src/assets/
import vscode from "../assets/vscode.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import reactLogo from "../assets/react.png";
import next from "../assets/next.png";
import node from "../assets/node.png";
import ts from "../assets/ts.png";
import python from "../assets/python.png";
import laravel from "../assets/laravel.png";
import php from "../assets/php.png";
import csharp from "../assets/csharp.png";
import axios from "../assets/axios.png";
import mongo from "../assets/mongo.png";

const skills = [
  { name: "VS Code", img: vscode },
  { name: "HTML", img: html },
  { name: "CSS", img: css },
  { name: "JavaScript", img: js },
  { name: "React", img: reactLogo },
  { name: "Next.js", img: next },
  { name: "Node.js", img: node },
  { name: "TypeScript", img: ts },
  { name: "Python", img: python },
  { name: "Laravel", img: laravel },
  { name: "PHP", img: php },
  { name: "C#", img: csharp },
  { name: "Axios", img: axios },
  { name: "MongoDB", img: mongo },
];

export default function SkillsCarousel() {
  const containerRef = useRef(null);

  useEffect(() => {
    let angle = 0;
    const rotateSpeed = 0.2; 

    const rotate = () => {
      angle += rotateSpeed;
      if (containerRef.current) {
        containerRef.current.style.transform = `rotate(${angle}deg)`;
      }
      requestAnimationFrame(rotate);
    };
    rotate();
  }, []);

  return (
    <section id="skills">
      <h2>Skills & Technologies</h2>
      <div className="carousel-wrapper">
        
      <div className="carousel" ref={containerRef}>
  {skills.map((skill, index) => {
    const angle = (360 / skills.length) * index;
    return (
      <div
        className="skill-logo"
        key={index}
        style={{ transform: `rotate(${angle}deg) translate(150px) rotate(-${angle}deg)` }}
      >
        <img src={skill.img} alt={skill.name} />
        <span>{skill.name}</span>
      </div>
    );
  })}
</div>

      </div>
    </section>
  );
}