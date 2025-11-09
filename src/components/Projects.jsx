import React, { useState } from "react";
import carVideo from "../assets/car-shpwroom.mp4";
import shopVideo from "../assets/shop.mp4";
import trackerVideo from "../assets/tracker.mp4";

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      {/* Project 1 */}
      <div className="project">
        <h3>Car Showroom Website (Portfolio Demo)</h3>
        <p>
          A demo website for a car showroom built as part of portfolio projects. 
          Features include responsive layout, car listings, interactive forms, 
          and a modern UI.
        </p>
        <p>
          <strong>Technologies used:</strong> HTML, CSS, JavaScript, Node.js, Express.js, React.
        </p>
        <p>
          <strong>Role:</strong> Developed full front-end and back-end, integrated database, 
          implemented contact forms and car listing features.
        </p>
        <video className= "./assets/car-shpwroom.mp4"  src= {carVideo} controls />
      </div>

      {/* Project 2 */}
      <div className="project">
        <h3>Shop Website (Jeddah, Saudi Arabia)</h3>
        <p>
          A live website for a shop based in Jeddah. Features include product catalog, 
          contact info, about page, and responsive design for desktop and mobile.
        </p>
        <p>
          <strong>Technologies used:</strong> HTML, CSS, JavaScript, Node.js, React, Next.js, APIs.
        </p>
        <p>
          <strong>Role:</strong> Full-stack development, integrated product display, 
          contact forms, About page content, and smooth navigation.
        </p>
        <video className="shop.mp4" src= {shopVideo} controls />
      </div>

      {/* Project 3 */}
      <div className="project">
        <h3>Personal Growth Tracker</h3>
        <p>
          A web app to manage daily routine, study schedule, and fitness goals. Features include 
          login/register, dashboard, monthly reports, profile saving, and feedback system.
        </p>
        <p>
          <strong>Technologies used:</strong> Node.js, React, Express.js, MongoDB, Axios.
        </p>
        <p>
          <strong>Role:</strong> Designed full-stack app, implemented authentication, 
          created dashboards, profile management, and automated monthly report generation.
        </p>
        <video className="tracker.mp4" src={trackerVideo} controls />
      </div>
    </section>
  );
}