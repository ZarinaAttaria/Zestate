import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="main-footer-container">
      <div className="footer-container">
        {/* Left Section */}
        <div className="left-div">
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/512/942/942089.png"
            alt="Logo"
          />
          <p>© Top Rated Real Estate LLC. All Rights Reserved</p>
          <div className="social-icons">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Center Section */}
        <div className="center-div">
          <h1>Quick Links</h1>
          <ul className="quick-links">
            <li>
              <Link to="#">Blog</Link>
            </li>
            <li>
              <Link to="#">About</Link>
            </li>
            <li>
              <Link to="#">Privacy Policy</Link>
            </li>
            <li>
              <Link to="#">FAQs</Link>
            </li>
            <li>
              <Link to="#">Terms and Conditions</Link>
            </li>
            <li>
              <Link to="#">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="right-div">
          <h1>Get In Touch</h1>
          <p>
            3603-64, Building Burj Al Salam Tower, Trade Centre, Sheikh Zayed RD
            – Trade Centre Roundabout – Dubai, UAE
          </p>
          <p>Email: info@toprated-realestate.com</p>
          <p>Tel: +971 4 3721340</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
