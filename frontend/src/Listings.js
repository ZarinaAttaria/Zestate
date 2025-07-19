import React from "react";
import "./Listings.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
  FaBath,
  FaBed,
  FaMapPin,
  FaRulerCombined,
  FaEye,
  FaHeart,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Listings = () => {
  const navigate = useNavigate();
  const propertiesList = [
    {
      id: 1,
      image:
        "https://toprated-realestate.com/wp-content/uploads/2025/07/8febeb88-798e-43f5-a3ee-bc1a05b0fb78-592x444.jpg",
      status: "For Sale",
      title: "Ultra-Luxury 2-Bedroom ",
      location: "Six Senses Residences The Palm - Karachi ",
      beds: 2,
      baths: 2,
      area: 160,
      price: "Rs.6,500,000.00",
      posted: "2 days ago",
    },
    {
      id: 2,
      image:
        "https://toprated-realestate.com/wp-content/uploads/2025/07/Screen-Shot-2025-07-14-at-3.35.47-PM.png",
      status: "For Rent",
      title: "Modern Villa with Private Pool",
      location: "E-11, Islamabad - Pakistan",
      beds: 4,
      baths: 3,
      area: 320,
      price: "Rs.250,000/month",
      posted: "1 week ago",
    },
    {
      id: 3,
      image:
        "https://toprated-realestate.com/wp-content/uploads/2025/07/Screen-Shot-2025-07-11-at-9.57.01-AM-898x600.png",
      status: "For Sale",
      title: "Luxury Apartment with Sea View",
      location: "Clifton, Karachi - Pakistan",
      beds: 3,
      baths: 2,
      area: 210,
      price: "Rs.9,200,000.00",
      posted: "3 days ago",
    },
    {
      id: 4,
      image:
        "https://toprated-realestate.com/wp-content/uploads/2025/07/c5422331-ba5a-4389-a078-30e7c1ecfb1b-599x600.jpg",
      status: "Off Plan",
      title: "Premium Townhouse in Gated Community",
      location: "DHA Phase 5, Lahore - Pakistan",
      beds: 3,
      baths: 2.5,
      area: 240,
      price: "Rs.7,800,000.00",
      posted: "Just added",
    },
  ];
  const handleDetailsClick = () => {
    navigate("/details");
  };
  return (
    <>
      <Navbar />
      <div className="listings-page">
        <div className="listings-search-container">
          <div className="search-filters">
            <input
              className="search-input"
              type="text"
              placeholder="Enter a Keyword"
            />
            <select className="filter-select">
              <option>Type</option>
              <option>Apartment</option>
              <option>Commercial</option>
              <option>Plot</option>
              <option>Town House</option>
            </select>
            <select className="filter-select">
              <option>Location</option>
              <option>Islamabad</option>
              <option>Rawalpindi</option>
            </select>

            <select className="filter-select">
              <option>Status</option>
              <option>For Rent</option>
              <option>For Sale</option>
              <option>Off Plan</option>
            </select>

            <select className="filter-select">
              <option>Bedrooms</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4+</option>
            </select>

            <select className="filter-select">
              <option>Bathrooms</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4+</option>
            </select>

            <select className="filter-select">
              <option>Max Price</option>
              <option>Rs. 500,000</option>
              <option>Rs. 1,000,000</option>
              <option>Rs. 2,000,000</option>
              <option>Rs. 3,000,000</option>
            </select>

            <input
              className="area-input"
              type="text"
              placeholder="Min Area (sq ft)"
            />

            <input
              className="area-input"
              type="text"
              placeholder="Max Area (sq ft)"
            />

            <button className="search-button">Search Properties</button>
          </div>
        </div>

        <div className="property-results">
          {propertiesList.map((property) => (
            <div className="property-card" key={property.id}>
              <div className="property-image-container">
                <img
                  className="property-image"
                  src={property.image}
                  alt={property.title}
                />
                <div className="image-overlay">
                  <button className="icon-button preview-button">
                    <FaEye />
                  </button>
                  <button className="icon-button favorite-button">
                    <FaHeart />
                  </button>
                </div>
                <span
                  className={`listing-badge ${property.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {property.status}
                </span>
              </div>
              <div className="property-info">
                <h3 className="property-title">{property.title}</h3>
                <p className="property-location">
                  <FaMapPin className="icon" /> {property.location}
                </p>
                <div className="property-details">
                  <span className="detail-item">
                    <FaBed className="icon" /> {property.beds} Beds
                  </span>
                  <span className="detail-item">
                    <FaBath className="icon" /> {property.baths} Baths
                  </span>
                  <span className="detail-item">
                    <FaRulerCombined className="icon" /> {property.area} sqft
                  </span>
                </div>
                <div className="property-footer">
                  <div className="pricing-div">
                    <h4 className="property-price">{property.price}</h4>
                    <span className="posted-date">
                      <FaMapPin className="icon" /> {property.posted}
                    </span>
                  </div>
                  <button className="details-btn" onClick={handleDetailsClick}>
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Listings;
