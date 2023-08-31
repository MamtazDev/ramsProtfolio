import React from "react";
import WorksCard from "./WorksCard";
import web1 from "../../assets/monitor1.png";
import web2 from "../../assets/monitor2.png";
import web3 from "../../assets/monitor3.png";

const Web = () => {
  const cardContent = [
    {
      image: web1,
      title: "Clark Associates",
      skill: "Company page",
    },
    {
      image: web2,
      title: "WebstaurantStore",
      skill: "JavaScript App",
    },
    {
      image: web3,
      title: "New Roots",
      skill: "Landing Page",
    },
  ];
  return (
    <div className="webContainer">
      <h4>Web</h4>
      <div className="row">
        {cardContent.map((item, idx) => (
          <div className="col-12 col-md-6 col-lg-4" key={idx}>
            <WorksCard content={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Web;
