import React from "react";

const Sidebar = ({ categories, getCategoryProducts }) => {
  return (
    <nav className="sidebar">
      <div className="searchbar">
        <input type="text" placeholder="Search" />
      </div>
      <div className="categories">
        {
        
        categories.map((category, index) => (
          <i  key={index}>
            <a href="#" onClick={e=>getCategoryProducts(category)} >{category}</a>
          </i>
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;
