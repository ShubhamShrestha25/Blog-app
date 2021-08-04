import React from "react";
import "./post.css";

const post = () => {
  return (
    <div className="post">
      <img className="postImg" src="./images/post.jpg" alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. In eveniet
        aliquam repudiandae perferendis dolorem ut, temporibus quidem mollitia,
        voluptatum nemo sit? Aspernatur magni iure rerum distinctio cumque fugit
        hic a. Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
        eveniet aliquam repudiandae perferendis dolorem ut, temporibus quidem
        mollitia, voluptatum nemo sit? Aspernatur magni iure rerum distinctio
        cumque fugit hic a. Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. In eveniet aliquam repudiandae perferendis dolorem ut, temporibus
        quidem mollitia, voluptatum nemo sit? Aspernatur magni iure rerum
        distinctio cumque fugit hic a.
      </p>
    </div>
  );
};

export default post;
