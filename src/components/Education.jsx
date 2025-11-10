import React from "react";

export default function Education() {
  const educationData = [
    {
      degree: "BS Computer Science",
      details: "Software Engineering",
      institute: "University of Gujrat, Pakistan",
    },
    {
      degree: "Intermediate (ICS)",
      details: "Computer Science & Statistics",
      institute: "Superior College, Gujrat",
    },
    {
      degree: "Matriculation",
      details: "English Medium, Biology",
      institute: "Government School Gareeb Pura, Pakistan",
    },
  ];

  return (
    <section
      id="education"
      style={{
        padding: "2rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "80%",
          maxWidth: "700px",
          borderRadius: "10px",
          backgroundColor: "#ffebf0", // pastel pink
          padding: "2rem",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#1a1a1a",
            marginBottom: "2rem",
            fontFamily: "Arial, sans-serif",
          }}
        >
          Education
        </h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "left",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  borderBottom: "2px solid #1a1a1a",
                  padding: "0.5rem",
                  color: "#1a1a1a",
                }}
              >
                Degree
              </th>
              <th
                style={{
                  borderBottom: "2px solid #1a1a1a",
                  padding: "0.5rem",
                  color: "#1a1a1a",
                }}
              >
                Details
              </th>
              <th
                style={{
                  borderBottom: "2px solid #1a1a1a",
                  padding: "0.5rem",
                  color: "#1a1a1a",
                }}
              >
                Institute
              </th>
            </tr>
          </thead>
          <tbody>
            {educationData.map((edu, index) => (
              <tr
                key={index}
                style={{
                  borderBottom: "1px solid #e4a3a3ff",
                  backgroundColor: index % 2 === 0 ? "#d6b916ff" : "#5a0c09ff", // alternate row color
                }}
              >
                <td style={{ padding: "0.5rem" }}>{edu.degree}</td>
                <td style={{ padding: "0.5rem" }}>{edu.details}</td>
                <td style={{ padding: "0.5rem" }}>{edu.institute}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
