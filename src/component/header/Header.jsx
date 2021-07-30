import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-titles">
        <span className="header-title-sm">React & Node</span>
        <span className="header-title-lg">Blog</span>
      </div>
      <img className="header-img" src="./images/homepage.jpg" alt="" />
    </div>
  );
};

export default Header;
