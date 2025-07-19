import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <div className="search-div">
      <h1>Your Path to Lucrative Deals!</h1>
      <h3>
        Unlock Success with High-End Services For Profitable Selling with Top
        Rated Real Estate in Dubai
      </h3>

      <div className="filter-Buttons">
        <button className="filterBtn">ALL</button>
        <button className="filterBtn">FOR RENT</button>
        <button className="filterBtn">FOR SALE</button>
        <button className="filterBtn">OFF PLAN</button>
        <button className="filterBtn resale">OFF PLAN RESALE</button>
      </div>

      <div className="main-search-container">
        <div className="search-container">
          <div className="search-input-group">
            <input type="text" placeholder="Enter a Keyword" />
            <select>
              <option>Type</option>
              <option>Apartment</option>
              <option>Commercial</option>
              <option>Plot</option>
              <option>Town House</option>
            </select>
            <select>
              <option>Where</option>
              <option>Islamabad</option>
              <option>Rawalpindi</option>
            </select>
          </div>

          <div className="search-input-group">
            <select>
              <option>Beds</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
            <select>
              <option>Baths</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
            <select>
              <option>Max Price</option>
              <option>Rs.500000</option>
              <option>Rs.10,00000</option>
              <option>Rs.20,00000</option>
              <option>Rs.30,00000</option>
            </select>
            <button className="search-btn">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
