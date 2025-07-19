import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="main-contact-container">
      <div className="contact-left">
        <h1>Get in touch</h1>
        <p>
          Contact us today to discuss your real estate needs and discover how
          TopRated Real Estate can help you achieve your property goals in Dubai
          and beyond
        </p>
      </div>
      <div className="contact-form-container">
        <h1>Contact Us</h1>
        <div className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Message" id="message" />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
