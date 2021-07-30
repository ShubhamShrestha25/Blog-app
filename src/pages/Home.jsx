import React from "react";
import Header from "../component/header/Header";
import Posts from "../component/post/Posts";
import Sidebar from "../component/sidebar/Sidebar";
import "./home.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
