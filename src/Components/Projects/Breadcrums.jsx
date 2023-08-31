import React from "react";
import "./Breadcrums.css";
import arrows from "../../assets/dobleRightArrow.png";

const Breadcrums = () => {
  return (
    <div className="breadcrumsContainer">
      <p>Home</p>
      <img src={arrows} alt="" />
      <p className="activeCrums">Project</p>
    </div>
  );
};

export default Breadcrums;
