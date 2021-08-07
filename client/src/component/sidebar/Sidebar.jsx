import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./sidebar.css";

const Sidebar = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <span className="sidebar-title">ABOUT ME</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
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
          {cats.map((c, key) => (
            <div key={key}>
              <Link to={`/?user=${c.name}`} className="link">
                <li className="sidebar-list-item">{c.name}</li>
              </Link>
            </div>
          ))}
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
