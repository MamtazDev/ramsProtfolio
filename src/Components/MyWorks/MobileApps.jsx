import React from "react";
import WorksCard from "./WorksCard";
import image1 from "../../assets/mobileapps1.png";
import image2 from "../../assets/mobileapps2.png";

const MobileApps = () => {
  const cardContent = [
    {
      image: image1,
      title: "WingAI",
      skill: "React App",
    },
    {
      image: image2,
      title: "WebstaurantStore",
      skill: "JavaScript App",
    },
  ];
  return (
    <div className="mobileAppsContainer">
      <h4>Mobile Apps</h4>
      <div className="row">
        <div className="col-2"></div>
        {cardContent.map((item, idx) => (
          <div className="col-4" key={idx}>
            <WorksCard content={item} />
          </div>
        ))}

        <div className="col-2"></div>
      </div>
    </div>
  );
};

export default MobileApps;
