import React from "react";
import "../component/Contact.css"; 
import Navbar from "../component/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />

      <div className="contact-container">
        {/* Top images */}
        <div className="contact-images">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>

        {/* Heading */}
        <h1 className="contact-title">
          HELLO,<span> CONTACT US!</span>
        </h1>

        <p className="contact-subtext">
          Got any questions? Our team is here to help! Fill out the form below
          and we’ll get back to you soon.
        </p>

        {/* Form */}
        <form className="contact-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Message" rows="5"></textarea>

          <button type="submit">SUBMIT</button>
        </form>

        {/* Support info */}
        <div className="contact-info">
          <p>Want quick help? Email us at:</p>
          <a href="mailto:support@yourwebsite.com">support@yourwebsite.com</a>
          <p>Available Mon–Fri, 9AM–5PM IST</p>
        </div>
      </div>
    </>
  );
}
