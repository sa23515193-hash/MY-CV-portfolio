import React, { useRef, useState } from "react";
import profilePic from "./profile.png";
import cvFile from "./cv.pdf";

export default function Intro() {
  const [index, setIndex] = useState(0);
  const scrollRef = useRef(null);

  const sections = ["intro", "skills", "image", "info"];

  const handleNext = () => {
    if (index < sections.length - 1) {
      setIndex(index + 1);
      scrollToSection(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
      scrollToSection(index - 1);
    }
  };

  const scrollToSection = (i) => {
    const container = scrollRef.current;
    container.scrollTo({
      left: i * container.clientWidth,
      behavior: "smooth",
    });
  };

  const sectionStyle = {
    flex: "0 0 100%",
    width: "100%",
    height: "100%",
    textAlign: "center",
    padding: "4rem 2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    transition: "all 0.5s ease-in-out",
  };

  return (
    <section
      id="intro"
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100vh",
        background: "linear-gradient(135deg, #081c24, #123a4a, #1f6b6b)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* SCROLLABLE CONTAINER */}
      <div
        ref={scrollRef}
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          scrollBehavior: "smooth",
        }}
      >
        {/* --- PAGE 1: INTRO --- */}
        <div style={sectionStyle}>
          <h1
            style={{
              color: "#00e0b8",
              fontSize: "3rem",
              fontWeight: "700",
              letterSpacing: "2px",
              textShadow: "0 0 15px rgba(0, 224, 184, 0.6)",
            }}
          >
            Sawaira Ijaz
          </h1>
          <h3 style={{ marginBottom: "1rem", color: "#f1f1f1" }}>
            Freelancer & Full Stack Web Developer
          </h3>
          <a
            href={cvFile}
            download="Sawaira_Ijaz_CV.pdf"
            style={{
              display: "inline-block",
              padding: "0.8rem 1.5rem",
              background: "linear-gradient(90deg, #00e0b8, #007bff)",
              color: "#fff",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "500",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            }}
            onMouseOver={(e) =>
              (e.target.style.background = "linear-gradient(90deg, #007bff, #00e0b8)")
            }
            onMouseOut={(e) =>
              (e.target.style.background = "linear-gradient(90deg, #00e0b8, #007bff)")
            }
          >
            📄 Download CV
          </a>
        </div>

        {/* --- PAGE 2: SKILLS --- */}
        <div
          style={{
            ...sectionStyle,
            background: "linear-gradient(135deg, #102b3f, #235d6f)",
          }}
        >
          <h2 style={{ color: "#00e0b8" }}>Skills</h2>
          <p
            style={{
              maxWidth: "700px",
              marginTop: "1.5rem",
              lineHeight: "1.8",
              color: "#e2e2e2",
              fontSize: "1.05rem",
            }}
          >
            Skilled in C#, database forms, Node.js, React, Next.js, and Express.js
            for building responsive, user-friendly web applications. Proficient in
            academic writing, documentation editing, and modern UI/UX design.
            Familiar with database management, API integration, and system setup
            including Windows installation and creating bootable USB drives.
          </p>
        </div>

        {/* --- PAGE 3: IMAGE --- */}
        <div
          style={{
            ...sectionStyle,
            background: "linear-gradient(135deg, #0d2b38, #1b4a5b)",
          }}
        >
          <h2 style={{ color: "#00e0b8", marginBottom: "1.5rem" }}>
            My Profile
          </h2>
          <img
            src={profilePic}
            alt="Sawaira Ijaz"
            style={{
              width: "260px",
              height: "260px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "6px solid #00e0b8",
              boxShadow: "0 0 25px rgba(0, 224, 184, 0.5)",
            }}
          />
        </div>

        {/* --- PAGE 4: PERSONAL INFO --- */}
        <div
          style={{
            ...sectionStyle,
            background: "linear-gradient(135deg, #183642, #286671)",
          }}
        >
          <h2 style={{ color: "#00e0b8", marginBottom: "1.5rem" }}>
            Personal Information
          </h2>
          <div
            style={{
              textAlign: "left",
              color: "#eaeaea",
              background: "rgba(0,0,0,0.3)",
              padding: "1.5rem 2rem",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
              maxWidth: "420px",
              width: "90%",
            }}
          >
            <p><strong>Name:</strong> Sawaira Ijaz</p>
            <p><strong>Father Name:</strong> Ijaz Ahmed</p>
            <p><strong>Age:</strong> 20</p>
            <p><strong>Date of Birth:</strong> 15-August-2025</p>
            <p><strong>Email:</strong> sa23515193@gmail.com</p>
            <p><strong>Mobile:</strong> 03170763598</p>
            <p><strong>Address:</strong> Kolowal near Chak Sada, Tehsil/District Gujrat</p>
            <p><strong>Country:</strong> Pakistan</p>
          </div>
        </div>
      </div>

      {/* --- ARROW BUTTONS --- */}
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          display: "flex",
          gap: "1.2rem",
        }}
      >
        {index > 0 && (
          <button
            onClick={handlePrev}
            style={{
              background: "#00e0b8",
              color: "#002a33",
              border: "none",
              borderRadius: "50%",
              width: "45px",
              height: "45px",
              fontSize: "1.5rem",
              cursor: "pointer",
              transition: "transform 0.2s",
            }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            ←
          </button>
        )}
        {index < sections.length - 1 && (
          <button
            onClick={handleNext}
            style={{
              background: "#00e0b8",
              color: "#002a33",
              border: "none",
              borderRadius: "50%",
              width: "45px",
              height: "45px",
              fontSize: "1.5rem",
              cursor: "pointer",
              transition: "transform 0.2s",
            }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            →
          </button>
        )}
      </div>
    </section>
  );
}
