import React from "react";

export default function Experience() {
  const skills = [
    { name: "HTML", level: 100 },
    { name: "CSS", level: 100 },
    { name: "JavaScript", level: 100},
    { name: "TypeScript", level: 95 },
    { name: "React", level: 100 },
    { name: "vite", level: 90},
    { name: "Node.js", level: 95 },
    { name: "Next.js", level: 95 },
    { name: "Express.js", level: 95 },
    { name: "PHP", level: 90 },
    { name: "Laravel", level: 90 },
    { name: "C#", level: 90 },
    { name: "Python", level: 90 },
    { name: "MongoDB", level: 100 },
    { name: "SQL/Database", level: 85 },

  ];

  return (
    <section
      id="experience"
      style={{
        padding: "2rem",
        maxWidth: "800px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Experience</h2>
      <p style={{ fontWeight: "bold" }}>
        Freelancer — Web Developer & Document Designer
      </p>
      <ul style={{ marginBottom: "2rem" }}>
        <li>1+ years experience building responsive websites & apps.</li>
        <li>Skilled in Node.js, React, Next.js, Express, PHP, Laravel.</li>
        <li>C# Windows Forms apps with database integration (SQL/MongoDB).</li>
        <li>Python scripting, academic writing, and PDF/CV design.</li>
        <li>API integration using axios and RESTful services.</li>
      </ul>

      <h3 style={{ marginBottom: "1rem" }}>Skills & Languages</h3>

      {skills.map((skill, index) => (
        <div key={index} style={{ marginBottom: "1rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div
            style={{
              backgroundColor: "#e0e0e0",
              borderRadius: "5px",
              height: "10px",
              overflow: "hidden",
              marginTop: "0.25rem",
            }}
          >
            <div
              style={{
                width: `${skill.level}%`,
                backgroundColor: "#24c8f1ff", // pastel pink
                height: "100%",
              }}
            ></div>
          </div>
        </div>
      ))}
    </section>
  );
}
