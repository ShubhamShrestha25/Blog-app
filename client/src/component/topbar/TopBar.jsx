import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

const TopBar = () => {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
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
          <li className="top-list-item">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="top-list-item">
            <Link className="link">ABOUT</Link>
          </li>
          <li className="top-list-item">
            <Link className="link">CONTACT</Link>
          </li>
          <li className="top-list-item">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="top-list-item">
            <Link className="link" onClick={handleLogout}>
              {user && "LOGOUT"}
            </Link>
          </li>
        </ul>
      </div>
      <div className="top-right">
        {user ? (
          <Link to="/settings">
            <img
              className="top-img"
              src={PF + user.profilePic}
              alt="Not Found"
            />
          </Link>
        ) : (
          <ul className="right-list">
            <li className="right-list-item">
              <Link to="/login" className="link">
                Login
              </Link>
            </li>
            <li className="right-list-item">
              <Link to="/register" className="link">
                Register
              </Link>
            </li>
          </ul>
        )}
        <i className="fas fa-search top-search-icon" />
      </div>
    </div>
  );
};

export default TopBar;
