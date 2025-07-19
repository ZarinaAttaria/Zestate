import logo from "./logo.svg";
import "./App.css";
import HomePage from "./HomePage";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Team from "./Team";
import Listings from "./Listings";
import ContactPage from "./ContactPage";
import Blogs from "./Blogs";
import Login from "./Login";
import Details from "./Details";
import Testimonials from "./Testimonials";

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
