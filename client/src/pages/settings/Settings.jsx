import React from "react";
import Sidebar from "../../component/sidebar/Sidebar";
import "./settings.css";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settings-wrapper">
        <div className="settings-title">
          <span className="settings-update-title">Update Your Account</span>
          <span className="settings-delete-title">Delete Account</span>
        </div>
        <form className="settings-form">
          <label>Profile Picture</label>
          <div className="settings-pp">
            <img src="./images/post.jpg" alt="" />
            <label htmlFor="file-input">
              <i className="fas fa-user-circle settings-pp-icon"></i>
            </label>
            <input type="file" id="file-input" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="name" />
          <label>Email</label>
          <input type="text" placeholder="name@gmail.com" />
          <label>password</label>
          <input type="password" />
          <button className="settings-submit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
