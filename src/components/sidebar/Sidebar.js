import React from "react";

const Sidebar = ({ categories, setSelectedCategory, setSearchedProduct }) => {
  return (
    <nav className="sidebar">
      <div className="searchbar">
        <input
          type="text"
          placeholder="Search"
          onKeyUp={(e) => setSearchedProduct(e.target.value)}
        />
      </div>
      <div className="categories">
        {categories.map((category, index) => (
          <i key={index}>
            <a href="#" onClick={(e) => setSelectedCategory(category)}>
              {category}
            </a>
          </i>
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;
