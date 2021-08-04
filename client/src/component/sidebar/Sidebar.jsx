import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <span className="sidebar-title">ABOUT ME</span>
        <img src="./images/hacker.jpg" alt="" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          rem deleniti perferendis cum, quaerat, nostrum voluptatem commodi illo
          hic veritatis dicta. Beatae, consectetur? Tenetur cupiditate, numquam
          adipisci quisquam veniam incidunt.
        </p>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">CATEGORIES</span>
        <ul className="sidebar-list">
          <li className="sidebar-list-item">Life</li>
          <li className="sidebar-list-item">Music</li>
          <li className="sidebar-list-item">Style</li>
          <li className="sidebar-list-item">Sport</li>
          <li className="sidebar-list-item">Tech</li>
          <li className="sidebar-list-item">Cinema</li>
        </ul>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">FOLLOW US</span>
        <div className="sidebar-social">
          <i className="fab fa-facebook-f sidebar-icon" />
          <i className="fab fa-twitter sidebar-icon" />
          <i className="fab fa-instagram sidebar-icon" />
          <i className="fab fa-pinterest-p sidebar-icon" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
