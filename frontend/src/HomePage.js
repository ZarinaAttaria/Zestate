import React from "react";
import Navbar from "./Navbar";
import "./HomePage.css";
import Search from "./Search";
import Appartments from "./Appartments";
import Why from "./Why";
import Contact from "./Contact";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import TrustedBy from "./TrustedBy";

const HomePage = () => {
  return (
    <>
      <div className="home">
        <Navbar transparent />
        <Search />
      </div>
      <Appartments />
      <Why />
      <Testimonials />
      <TrustedBy />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
