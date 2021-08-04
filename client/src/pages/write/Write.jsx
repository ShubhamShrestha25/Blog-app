import React from "react";
import "./write.css";

const Write = () => {
  return (
    <div className="write">
      <img src="./images/post.jpg" alt="" className="write-img" />
      <form className="write-form">
        <div className="write-form-group">
          <label htmlFor="file-input">
            <i className="fas fa-plus write-icon" />
          </label>
          <input type="file" id="file-input" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="write-input"
            autoFocus={true}
          />
        </div>
        <div className="write-form-group">
          <textarea
            type="text"
            placeholder="Tell us your story"
            className="write-input write-text"
          />
        </div>
        <button className="write-submit">Publish</button>
      </form>
    </div>
  );
};

export default Write;
