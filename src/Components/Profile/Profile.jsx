import React from "react";
import DeveloperInfo from "./DeveloperInfo";
import SkillsInfo from "./SkillsInfo";

const Profile = () => {
  return (
    <div style={{ marginTop: "130px" }}>
      <div className="container">
        <DeveloperInfo />
        <SkillsInfo/>
      </div>
    </div>
  );
};

export default Profile;
