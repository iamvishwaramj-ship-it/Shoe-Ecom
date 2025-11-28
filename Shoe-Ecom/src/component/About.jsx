import React from "react";
import Navbar from "./Navbar";
import hero from "../assets/women.jpg";
import "./About.css";

const clients = [
  {
    id: 1,
    name: "John Smith",
    review: "Amazing service!",
    img: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 2,
    name: "Emily Johnson",
    review: "Highly recommended!",
    img: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 3,
    name: "Michael Brown",
    review: "Great experience!",
    img: "https://i.pravatar.cc/150?img=20",
  },
];

export default function About() {
  return (
    <div>
      <Navbar />

      {/* HERO SECTION */}
      <section className="about-hero">
        <img src={hero} className="hero-bg" alt="background" />
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1>About Us</h1>
          <p>our Happiness, Our Priority.</p>
        </div>
      </section>

      {/* TEXT SECTION */}
      <section className="about-text-section">
        <p>
          "Travel is for everyone. With Stylish Online Store, it opens our eyes to
          the world and helps us discover more about ourselves."
        </p>
      </section>

      {/* Cards Section */}
      <div className="about-cards">
        <div className="card">
          <h3>Who We Are</h3>
          <p>
            A passionate team of developers and creative experts turning ideas
            into real digital solutions.
          </p>
        </div>

        <div className="card">
          <h3>Our Mission</h3>
          <p>
            Deliver high-quality experiences with honesty, innovation, and
            commitment.
          </p>
        </div>

        <div className="card">
          <h3>Our Values</h3>
          <p>
            Quality, transparency, creativity, and continuous improvement define
            who we are.
          </p>
        </div>
      </div>

      <div className="team-section">
        <h2>Meet Our Team</h2>
        <p>
          A small but powerful group of thinkers, developers, and designers.
        </p>

        <div className="team-container">
          {/* Team Member 1 */}
          <div className="team-member">
            <img
              src="https://i.pravatar.cc/150?img=1"
              alt="Vishwa"
              className="team-img"
            />
            <h3>Steve</h3>
            <p>Front-End Developer</p>
          </div>

          {/* Team Member 2 */}
          <div className="team-member">
            <img
              src="https://i.pravatar.cc/150?img=5"
              alt="Sanjay"
              className="team-img"
            />
            <h3>Angel</h3>
            <p>UI/UX Designer</p>
          </div>

          {/* Team Member 3 */}
          <div className="team-member">
            <img
              src="https://i.pravatar.cc/150?img=8"
              alt="Arun"
              className="team-img"
            />
            <h3>joseph</h3>
            <p>Full Stack Developer</p>
          </div>
        </div>
      </div>

      {/* HAPPY CLIENTS SECTION */}
      <div className="clients-section">
        <h2>Happy Clients</h2>
        <p className="clients-subtitle">
          Thousands of people trust us. Here’s what they say.
        </p>

        <div className="clients-container">
          {clients.map((client) => (
            <div key={client.id} className="client-card">
              <img src={client.img} alt={client.name} className="client-img" />

              <h4>{client.name}</h4>
              <p>"{client.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
