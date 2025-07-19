import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = ({ transparent = false }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${transparent ? "transparent" : "solid"}`}>
      <div className="logo">Zestate</div>

      {/* Desktop Navigation */}
      <ul className={`nav-links ${isMobileMenuOpen ? "mobile-active" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/team" onClick={() => setIsMobileMenuOpen(false)}>
            Our Team
          </Link>
        </li>
        <li>
          <Link to="/listings" onClick={() => setIsMobileMenuOpen(false)}>
            Our Listings
          </Link>
        </li>
        <li>
          <Link to="/blogs" onClick={() => setIsMobileMenuOpen(false)}>
            Blogs
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            Contact Us
          </Link>
        </li>
        <li className="listing">
          <Link
            to="/login"
            className="create-listing-btn"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Create a Listing
          </Link>
        </li>
      </ul>

      <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar;
