import React from "react";
import Header from "../Components/Header/Header";
import Banner from "../Components/Home/Banner";
import "../Components/Home/Home.css";
import Profile from "../Components/Profile/Profile";

const Home = () => {
  return (
    <>
      <div className="banner">
        <Header />
        <Banner />
      </div>
      <Profile />
    </>
  );
};

export default Home;
