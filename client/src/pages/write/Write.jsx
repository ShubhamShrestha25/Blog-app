import React, { useContext, useState } from "react";
import "./write.css";
import axios from "axios";
import { Context } from "../../context/Context";

const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      axios.post("/posts", newPost);
      window.location.replace("/");
    } catch (err) {}
  };

  return (
    <div className="write">
      {file && (
        <img
          src={URL.createObjectURL(file)}
          alt="no found"
          className="write-img"
        />
      )}

      <form className="write-form" onSubmit={handleSubmit}>
        <div className="write-form-group">
          <label htmlFor="file-input">
            <i className="fas fa-plus write-icon" />
          </label>
          <input
            type="file"
            id="file-input"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="write-input"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="write-form-group">
          <textarea
            type="text"
            placeholder="Tell us your story"
            className="write-input write-text"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <button className="write-submit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
