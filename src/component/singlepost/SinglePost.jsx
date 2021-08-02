import React from "react";
import "./singlepost.css";

const SinglePost = () => {
  return (
    <div className="single-post">
      <div className="single-post-wrapper">
        <img src="./images/post.jpg" alt="" className="single-post-img" />
        <h1 className="single-post-title">
          Lorem Ipsun Doloroororor
          <div className="single-post-edit">
            <i className="far fa-edit single-post-icon" />
            <i className="fas fa-trash-alt single-post-icon" />
          </div>
        </h1>
        <div className="single-post-info">
          <span className="single-post-author">
            Autor: <b>Safaak</b>
          </span>
          <span className="single-post-date">1 hour ago</span>
        </div>
        <p className="single-post-desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa autem
          nostrum reprehenderit repudiandae possimus, dolorem consequuntur
          voluptatum mollitia iste beatae atque, ab natus sapiente placeat ipsum
          esse accusamus, expedita est! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Corrupti distinctio exercitationem iure pariatur,
          enim minus quos soluta magnam officiis placeat porro! Ab facilis
          magnam quos voluptatum ullam ipsum nam quo? Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Tempora quas aliquam maxime, quasi
          dignissimos ullam iure et praesentium ea reprehenderit nesciunt, error
          sunt? Expedita laborum nostrum unde blanditiis ullam mollitia.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
