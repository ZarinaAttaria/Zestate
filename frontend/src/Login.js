import React, { useState, useEffect } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaLock,
  FaUser,
  FaArrowRight,
} from "react-icons/fa";
import "./Login.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const carouselImages = [
    "https://media.gettyimages.com/id/1335404751/video/home-purchase-rental-investment-private-property-real-estate-consultant-concept-and-matte.jpg?s=640x640&k=20&c=IuZtSVvMdmNeyQTLc_ZQRpGk8W1rUS04oK42Ic2O78E=",
    "https://img.freepik.com/free-vector/realtor-assistance_23-2148672112.jpg?semt=ais_hybrid&w=740",
    "https://png.pngtree.com/png-clipart/20230926/original/pngtree-illustration-of-a-vector-concept-for-property-search-find-your-ideal-png-image_12874997.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login submitted:", { email, password });
  };

  return (
    <>
      <Navbar />

      <div className="login-page">
        <div className="login-container">
          <div className="login-carousel">
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className={`carousel-image ${
                  index === currentImageIndex ? "active" : ""
                }`}
                style={{ backgroundImage: `url(${image})` }}
              />
            ))}
            <div className="carousel-dots">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${
                    index === currentImageIndex ? "active" : ""
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* Right side - Login Form */}
          <div className="login-form-container">
            <div className="login-form-wrapper">
              <h2>Welcome Back</h2>
              <p className="login-subtitle">Sign in to access your account</p>

              <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <div className="input-with-icon">
                    <FaUser className="input-icon" />
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <div className="input-with-icon">
                    <FaLock className="input-icon" />
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className="toggle-password"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                <div className="form-options">
                  <label className="remember-me">
                    <input type="checkbox" />
                    Remember me
                  </label>
                  <a href="/forgot-password" className="forgot-password">
                    Forgot password?
                  </a>
                </div>

                <button type="submit" className="login-button">
                  Sign In <FaArrowRight />
                </button>

                <div className="signup-link">
                  Don't have an account? <a href="/signup">Sign up</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
