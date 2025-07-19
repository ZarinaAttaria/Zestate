import React from "react";
import "./Blogs.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaCalendarAlt, FaUser, FaComment, FaArrowRight } from "react-icons/fa";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Real Estate in Pakistan",
      excerpt:
        "Exploring the emerging trends and opportunities in Pakistan's booming real estate market...",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmxJTMMnm4WOj7Y0Fn2AB0uyho6Yvk8tN82A&s",
      date: "July 15, 2025",
      author: "Zestate Team",
      comments: 12,
      category: "Market Trends",
    },
    {
      id: 2,
      title: "5 Essential Tips for First-Time Home Buyers",
      excerpt:
        "Navigating the home buying process can be overwhelming. Here are our top tips to make it easier...",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4_PrZvGz0unWiwBb8QR5wIgTcL11X3bh4nQ&s",
      date: "July 10, 2025",
      author: "Sarah Khan",
      comments: 8,
      category: "Buying Guide",
    },
    {
      id: 3,
      title: "Investment Hotspots in Islamabad for 2025",
      excerpt:
        "Discover the most promising areas in Islamabad for real estate investment this year...",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK9Htm1pCnG4Mw_rK7q-c797HXUWBBvaRdfA&s",
      date: "July 5, 2025",
      author: "Ali Raza",
      comments: 15,
      category: "Investment",
    },
    {
      id: 4,
      title: "Understanding Property Taxes in Pakistan",
      excerpt:
        "A comprehensive guide to property taxes and how they affect your real estate investments...",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ItynUR2Ua6Jiw4W5OgehHY2HrFopkU4RGA&s",
      date: "June 28, 2025",
      author: "Zestate Team",
      comments: 5,
      category: "Legal",
    },
    {
      id: 5,
      title: "Luxury Living: Top High-End Communities",
      excerpt:
        "Explore Pakistan's most exclusive residential communities and what makes them special...",
      image:
        "https://media.licdn.com/dms/image/v2/D4D12AQEcbkE1xktPvA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1676527285505?e=2147483647&v=beta&t=k-B3RBUjkTFlmx1psWPTZjxm3emzM2Y7jGfoszx98nc",
      date: "June 20, 2025",
      author: "Fatima Ahmed",
      comments: 20,
      category: "Lifestyle",
    },
    {
      id: 6,
      title: "Sustainable Homes: Eco-Friendly Features to Look For",
      excerpt:
        "How to identify and appreciate sustainable features in modern residential properties...",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSGGBuHnC2Lca0_zEfrb6CSp4SG8Fvg8dcOA&s",
      date: "June 15, 2025",
      author: "Zestate Team",
      comments: 7,
      category: "Sustainability",
    },
  ];

  const categories = [
    "All Topics",
    "Market Trends",
    "Investment",
    "Buying Guide",
    "Selling Tips",
    "Legal",
    "Lifestyle",
    "Sustainability",
  ];

  return (
    <>
      <Navbar />
      <div className="blogs-page">
        <div className="blogs-hero">
          <div className="hero-content">
            <h1>Zestate Insights</h1>
            <p>
              Expert analysis, market trends, and valuable tips for your real
              estate journey
            </p>
          </div>
        </div>

        <div className="blogs-container">
          <div className="blogs-sidebar">
            <div className="sidebar-section">
              <h3>Categories</h3>
              <ul className="category-list">
                {categories.map((category, index) => (
                  <li key={index} className={index === 0 ? "active" : ""}>
                    {category}{" "}
                    <span>
                      {index !== 0 && Math.floor(Math.random() * 15) + 5}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sidebar-section">
              <h3>Popular Posts</h3>
              <div className="popular-posts">
                {blogPosts.slice(0, 3).map((post) => (
                  <div key={post.id} className="popular-post">
                    <img src={post.image} alt={post.title} />
                    <div>
                      <h4>{post.title}</h4>
                      <span>
                        <FaCalendarAlt /> {post.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="sidebar-section newsletter">
              <h3>Subscribe to Newsletter</h3>
              <p>Get the latest real estate insights delivered to your inbox</p>
              <form>
                <input type="email" placeholder="Your email address" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>

          <div className="blogs-main">
            <div className="blogs-grid">
              {blogPosts.map((post) => (
                <div key={post.id} className="blog-card">
                  <div className="blog-image-container">
                    <img src={post.image} alt={post.title} />
                    <div className="blog-category">{post.category}</div>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <span>
                        <FaUser /> {post.author}
                      </span>
                      <span>
                        <FaCalendarAlt /> {post.date}
                      </span>
                      <span>
                        <FaComment /> {post.comments} Comments
                      </span>
                    </div>
                    <h2>{post.title}</h2>
                    <p>{post.excerpt}</p>
                    <a href="#" className="read-more">
                      Read More <FaArrowRight />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="pagination">
              <button className="active">1</button>
              <button>2</button>
              <button>3</button>
              <button>
                Next <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
