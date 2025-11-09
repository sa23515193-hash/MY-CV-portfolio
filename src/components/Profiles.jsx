import React from "react";

export default function Profiles() {
  return (
    <section id="profiles">
      <h2>Profiles</h2>
      <div className="profile-buttons">
        
        <a
          href="https://github.com/sa23515193-hash"
          className="profile-btn github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i> GitHub Profile
        </a>
        
        <a
          href="https://www.linkedin.com/in/sawaira-ijaz-2a8503385"
          className="profile-btn linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i> LinkedIn Profile
        </a>

      </div>
    </section>
  );
}