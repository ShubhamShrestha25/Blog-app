import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./singlepost.css";

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
    };
    getPost();
  }, [path]);

  return (
    <div className="single-post">
      <div className="single-post-wrapper">
        {post.photo && (
          <img src={post.photo} alt="" className="single-post-img" />
        )}
        <h1 className="single-post-title">
          {post.title}
          <div className="single-post-edit">
            <i className="far fa-edit single-post-icon" />
            <i className="fas fa-trash-alt single-post-icon" />
          </div>
        </h1>
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
        <p className="single-post-desc">{post.desc}</p>
      </div>
    </div>
  );
};

export default SinglePost;
