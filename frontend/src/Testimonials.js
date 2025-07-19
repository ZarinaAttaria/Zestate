import React from "react";
import "./Testimonials.css";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Home Buyer",
    content:
      "Working with this agency was an absolute pleasure. They found us the perfect family home in our preferred neighborhood within our budget. Their attention to detail and negotiation skills saved us thousands!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Investor",
    content:
      "As a property investor, I appreciate their market knowledge and honesty. They've helped me build a portfolio of 8 rental properties that generate consistent income. Truly professionals who understand investment strategies.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "The Williams Family",
    role: "Sellers",
    content:
      "Our home sold for 15% above asking price in just 3 days! The staging advice and marketing strategy were exceptional. We felt supported throughout the entire process and would recommend them to anyone.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/63.jpg",
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "First-time Buyer",
    content:
      "Being a first-time home buyer was overwhelming, but our agent made everything so simple. They explained each step clearly and fought to get us the best deal possible. We love our new home!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="section-header">
          <h2 className="section-subtitle">Client Experiences</h2>
          <h1 className="section-title">What Our Clients Say About Us</h1>
          <div className="divider"></div>
        </div>

        <div className="testimonials-wrapper">
          <button className="nav-arrow prev" onClick={prevTestimonial}>
            <IoIosArrowBack />
          </button>

          <div className="testimonials-slider">
            {testimonials.map((testimonial, index) => (
              <div
                className={`testimonial-card ${
                  index === currentIndex ? "active" : ""
                }`}
                key={testimonial.id}
              >
                <div className="quote-icon">
                  <FaQuoteLeft />
                </div>
                <p className="testimonial-content">{testimonial.content}</p>
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={i < testimonial.rating ? "filled" : ""}
                    />
                  ))}
                </div>
                <div className="testimonial-author">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="author-image"
                  />
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-role">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="nav-arrow next" onClick={nextTestimonial}>
            <IoIosArrowForward />
          </button>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
