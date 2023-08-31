import React from "react";
import "./MyWorks.css";
import MobileApps from "./MobileApps";
import Web from "./Web";

const MyWorks = () => {
  return (
    <div className="myWorksContainer">
      <div className="container">
        <h3>My Works</h3>
        <MobileApps />
        <Web />
      </div>
    </div>
  );
};

export default MyWorks;
