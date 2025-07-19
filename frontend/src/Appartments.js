import React from "react";
import "./Appartments.css";
import {
  FaArrowRight,
  FaBed,
  FaBath,
  FaEye,
  FaRulerCombined,
} from "react-icons/fa";

const Appartments = () => {
  return (
    <div className="main-appartments-container">
      <div className="appartments-header">
        <div className="appartments-top">
          <h1>Discover Our Featured Apartments</h1>
          <p>
            Explore our curated selection of luxury apartments in Dubai,
            offering unparalleled comfort and style for the discerning resident.
          </p>
        </div>
        <div className="next-arrow-container">
          <button className="view-all-btn">
            View All
            <FaArrowRight className="icon1" />
          </button>
        </div>
      </div>

      <div className="properties-container">
        {[1, 2, 3].map((item) => (
          <div className="property" key={item}>
            <div className="property-image-container">
              <img
                className="property-image"
                src={
                  item === 1
                    ? "https://toprated-realestate.com/wp-content/uploads/2025/07/92078025-15ed-4ee3-baae-074376141dbf-800x600.jpg"
                    : item === 2
                    ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDeSOTvXNml32uu_MceGdBkNTG7uqs6AyaPQ&s"
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtukcMK2-JxJa439tF3jjFgx_gkAODfQAx9g&s"
                }
                alt={`Apartment ${item}`}
              />
              <span className="badge">For Sale</span>
              <button className="preview-btn">
                <FaEye className="icon1" />
              </button>
            </div>
            <p className="property-name">
              PKR 59 Lakh to 2.6 Crore – J7 Emporium, Islamabad
            </p>
            <div className="property-details">
              <span className="beds">
                <FaBed className="icon1" /> 1
              </span>
              <span className="bath">
                <FaBath className="icon1" /> 1
              </span>
              <span className="property-area">
                <FaRulerCombined className="icon1" /> 160 sqft
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appartments;
