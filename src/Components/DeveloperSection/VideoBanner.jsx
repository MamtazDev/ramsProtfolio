import React from "react";
import videoBanner from "../../assets/videoImage.png";
import videoIcon from "../../assets/playIcon.png";

const VideoBanner = () => {
  return (
    <div className="videoBannerContainer">
      <h3>Ricardo Mejia Silva</h3>
      <h6>Web/Mobile Developer</h6>
      <div className="videoContainer">
        <img src={videoBanner} alt="" className="w-100 h-100" />
        <img src={videoIcon} alt="" className="playIcon" />
      </div>
    </div>
  );
};

export default VideoBanner;
