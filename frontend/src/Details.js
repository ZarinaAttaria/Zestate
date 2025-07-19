import React from "react";
import "./Details.css";
import { FaHeart, FaMapMarkerAlt, FaUser, FaShare } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Details = () => {
  return (
    <>
      <Navbar />
      <div className="details-container">
        {/* Top Section */}
        <div className="details-top-div">
          <img
            className="details-image"
            src="https://toprated-realestate.com/wp-content/uploads/2025/07/8febeb88-798e-43f5-a3ee-bc1a05b0fb78-592x444.jpg"
            alt="Modern Apartment in Elara"
          />
          <div className="details-top-div-details">
            <div className="details-social-icons">
              <FaShare title="Share this property" />
              <FaHeart title="Add to favorites" />
            </div>
            <div className="details-title">
              <h1>
                Modern Apartment in Elara, Madinat Jumeirah Living | 721 Sq.Ft |
                World-Class Amenities
              </h1>
              <h2>Rs. 2,500,000.00</h2>
            </div>
            <p>Off Plan Resale</p>
            <span>
              <FaMapMarkerAlt /> Elara, Madinat Jumeirah Living - Dubai - United
              Arab Emirates
            </span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="details-bottom-div">
          {/* Left Content - Scrollable */}
          <div className="details-bottom-div-left">
            <h3>Description</h3>
            <hr />
            <ul className="details-description-list">
              <li>
                <div className="details-description-div">
                  <h4>Community:</h4>
                  <p>Madinat Jumeirah Living – Elara</p>
                </div>
              </li>
              <li>
                <div className="details-description-div">
                  <h4>Property Type:</h4>
                  <p>1 Bedroom Apartment</p>
                </div>
              </li>
              <li>
                <div className="details-description-div">
                  <h4>Size:</h4>
                  <p>721 Sq. Ft.</p>
                </div>
              </li>
              <li>
                <div className="details-description-div">
                  <h4>Status:</h4>
                  <p>Off-Plan</p>
                </div>
              </li>
            </ul>
            <hr />

            <h2>Key Features</h2>
            <ul className="details-key-features-list">
              <li>Contemporary layout designed for comfort and style</li>
              <li>
                Access to beautifully landscaped sky gardens and rooftop terrace
              </li>
              <li>Prime location near Burj Al Arab and Jumeirah Beach</li>
              <li>
                Elegant interiors with natural finishes and abundant natural
                light
              </li>
            </ul>
            <hr />

            <h2>Amenities:</h2>
            <ul className="details-amenities-list">
              <li>Infinity pool and children's pool</li>
              <li>Fully equipped gymnasium</li>
              <li>Sports parks and recreational areas</li>
              <li>Dedicated play area for children</li>
            </ul>

            {/* Tour Section */}
            <div className="details-tour-div">
              <h1>Schedule a Tour</h1>
              <hr />
              <select>
                <option>Select Tour Type</option>
                <option>In Person</option>
                <option>Video Chat</option>
              </select>
              <input type="date" placeholder="Select Tour Date" />
              <select>
                <option>Select Time</option>
                <option>10:30 am</option>
                <option>11:00 am</option>
                <option>11:30 am</option>
                <option>12:00 pm</option>
              </select>
              <hr />

              <h1>Your Information</h1>
              <div>
                <div>
                  <input type="text" placeholder="Enter Your Name" />
                  <input type="tel" placeholder="Enter Your Phone" />
                  <input type="email" placeholder="Enter Your Email" />
                </div>
                <textarea placeholder="Enter Your Message" rows="4"></textarea>
              </div>
              <button>Submit a Tour Request</button>
            </div>

            {/* Address Section */}
            <div className="details-address-div">
              <h2>Address</h2>
              <hr />
              <div className="details-address-div-list">
                <h4>Address</h4>
                <p>
                  Elara, Madinat Jumeirah Living - Dubai - United Arab Emirates
                </p>
              </div>
              <div className="details-address-div-list">
                <h4>City</h4>
                <p>Dubai</p>
              </div>
              <div className="details-address-div-list">
                <h4>State/Country</h4>
                <p>Dubai Emirate</p>
              </div>
              <div className="details-address-div-list">
                <h4>Area</h4>
                <p>Umm Suqeim 3</p>
              </div>
              <div className="details-address-div-list">
                <h4>Country</h4>
                <p>United Arab Emirates</p>
              </div>
              <img src="map.png" alt="Location Map" />
            </div>

            {/* Details Section */}
            <div className="details-details-div">
              <h2>Details</h2>
              <hr />
              <div className="details-details-div-list">
                <h4>Price</h4>
                <p>Rs. 2,500,000.00</p>
              </div>
              <div className="details-details-div-list">
                <h4>Property Size</h4>
                <p>721 sq.ft</p>
              </div>
              <div className="details-details-div-list">
                <h4>Bedroom</h4>
                <p>1</p>
              </div>
              <div className="details-details-div-list">
                <h4>Bathroom</h4>
                <p>1</p>
              </div>
              <div className="details-details-div-list">
                <h4>Property Type</h4>
                <p>Apartment</p>
              </div>
              <div className="details-details-div-list">
                <h4>Property Status</h4>
                <p>Off Plan Resale</p>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Fixed */}
          <div className="details-bottom-div-right">
            <div className="details-bottom-right-top">
              <img
                className="details-ceo-image"
                src="https://media.istockphoto.com/id/1206181103/photo/face-of-happy-young-persian-woman-smiling-in-traditional-clothing.jpg?s=612x612&w=0&k=20&c=6Kos894F11JWo5BmnqFladEquUeHTmvv6UK8m4gHJRk="
                alt="Agent Hania"
              />
              <div>
                <p>
                  <FaUser /> Hania
                </p>
                <a href="#listings">View Listings</a>
              </div>
            </div>

            <div className="details-form-div">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Phone" />
              <textarea
                placeholder="Hello, I am interested in [Modern Apartment in Elara, Madinat Jumeirah Living | 721 Sq.Ft | World-Class Amenities]"
                rows="4"
              ></textarea>
              <select>
                <option>I'm a buyer</option>
                <option>I'm an agent</option>
                <option>Other</option>
              </select>
              <p>By submitting this form I agree to Terms of Use</p>
              <div className="details-call-btns-div">
                <button>Send Message</button>
                <button>Call</button>
              </div>
              <button>Whatsapp</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Details;
