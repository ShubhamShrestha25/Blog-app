import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../../context/Context";
import "./singlepost.css";

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const { user } = useContext(Context);
  const PF = "http://localhost:5000/images/";
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false);
    } catch (err) {}
  };

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  return (
    <div className="single-post">
      <div className="single-post-wrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="" className="single-post-img" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="single-post-title-input"
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
        ) : (
          <h1 className="single-post-title">
            {title}
            {post.username === user?.username && (
              <div className="single-post-edit">
                <i
                  className="far fa-edit single-post-icon"
                  onClick={() => setUpdateMode(true)}
                />
                <i
                  className="fas fa-trash-alt single-post-icon"
                  onClick={handleDelete}
                />
              </div>
            )}
          </h1>
        )}

        <div className="single-post-info">
          <span className="single-post-author">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="single-post-date">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="single-post-desc-input"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="single-post-desc">{desc}</p>
        )}
        {updateMode && (
          <button className="single-post-button" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
