import React from "react";
import Post from "../post/Post";
import "./posts.css";

const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((p, key) => (
        <div key={key}>
          <Post post={p} />
        </div>
      ))}
    </div>
  );
};

export default Posts;
