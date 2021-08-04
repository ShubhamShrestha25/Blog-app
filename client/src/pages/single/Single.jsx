import React from "react";
import Sidebar from "../../component/sidebar/Sidebar";
import SinglePost from "../../component/singlepost/SinglePost";
import "./single.css";

const Single = () => {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
};

export default Single;
