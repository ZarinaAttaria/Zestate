import React from "react";
import Navbar from "./Navbar";
import "./About.css";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-page">
        <div className="main-about-container">
          <div className="about-us-left">
            <h1>About Us</h1>
            <p>
              Top Rated Real Estate was born not just from ambition but from
              firsthand experience. With deep roots in hospitality, banking,
              real estate, and accounting, our team brings a rare,
              cross-industry advantage to the market. We've managed short-term
              rentals, scaled property portfolios, and led financial operations,
              so we know what it takes to turn a property into performance.
            </p>
          </div>
          <div className="about-us-right">
            <img
              className="about-image"
              src="https://toprated-realestate.com/wp-content/uploads/2025/06/Untitled-design-14.png"
              alt="About our company"
            />
          </div>
        </div>

        <div className="main-about-container reverse-on-mobile">
          <div className="about-us-right">
            <img
              className="about-image"
              src="https://toprated-realestate.com/wp-content/uploads/2025/06/Untitled-design-16.png"
              alt="Our mission"
            />
          </div>
          <div className="about-us-left">
            <h1>Our Mission</h1>
            <p>
              At Top Rated Real Estate, our mission is to empower clients with
              trusted guidance, unmatched market expertise, and exceptional
              service. We are committed to delivering seamless property
              experiences, whether buying, selling, or investing driven by
              integrity, innovation, and a deep understanding of local and
              global real estate markets.
            </p>
          </div>
        </div>

        <div className="main-about-container">
          <div className="about-us-left">
            <h1>Why Choose Us</h1>
            <p>We value properties with precision</p>
            <ul>
              <li>We market with intention and speed</li>
              <li>We operate with full transparency and DLD compliance</li>
              <li>We act fast but never recklessly</li>
              <li>We market with intention and speed</li>
            </ul>
            <p className="additional-text">
              That's how we help investors win and why clients stay.
            </p>
          </div>
          <div className="about-us-right">
            <img
              className="about-image"
              src="https://toprated-realestate.com/wp-content/uploads/2025/06/pexels-apasaric-325193-3-1536x1024.jpg"
              alt="Why choose us"
            />
          </div>
        </div>

        <div className="contact-container">
          <h1>Unlock Exclusive Listings Before They Hit the Market</h1>
          <p>
            Get expert guidance, exclusive listings, and seamless support, all
            in one place.
          </p>
          <button className="contact-us-Btn">Contact Us</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
