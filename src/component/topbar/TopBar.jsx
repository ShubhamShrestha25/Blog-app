import React from "react";
import "./topbar.css";

const TopBar = () => {
  return (
    <div className="top">
      <div className="top-left">
        <i className="fab fa-facebook-f top-icon" />
        <i className="fab fa-twitter top-icon" />
        <i className="fab fa-instagram top-icon" />
        <i className="fab fa-pinterest-p top-icon" />
      </div>
      <div className="top-center">
        <ul className="top-list">
          <li className="top-list-item">HOME</li>
          <li className="top-list-item">ABOUT</li>
          <li className="top-list-item">CONTACT</li>
          <li className="top-list-item">WRITE</li>
          <li className="top-list-item">LOGOUT</li>
        </ul>
      </div>
      <div className="top-right">
        <img className="top-img" src="./images/userprofile.jpg" alt="" />
        <i className="fas fa-search top-search-icon" />
      </div>
    </div>
  );
};

export default TopBar;
