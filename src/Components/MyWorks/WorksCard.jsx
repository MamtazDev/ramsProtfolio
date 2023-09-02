import React from "react";
import rightArrow from "../../assets/ArrowRight.png";

const WorksCard = ({ content }) => {
  return (
    <div className="workCardContainer">
      <div className="cardImageContainer">
        <img src={content.image} alt="" className="w-100 h-100" />
      </div>
      <div className="cardTextContainer">
        <h6>
          <a href="#">{content.title}</a>
        </h6>
        <p>{content.skill}</p>
        <div>
          <a href="#">View Case Study</a>
          <img src={rightArrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WorksCard;
