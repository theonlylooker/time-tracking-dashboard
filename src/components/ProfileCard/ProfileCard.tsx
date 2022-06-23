import React from "react";
import { ProfileProps } from "../../types/types";

const ProfileCard = ({ name, img }: ProfileProps) => {
  return (
    <div className="profileCard">
      <div className="profileCard__header firstColor">
        <picture className="profileCard__imgContainer">
          <img className="profileCard__img" src={img} alt="Profile avatar" />
        </picture>
        <div className="profileCard__text">
          <p className="profileCard__subtitle">Report for</p>
          <p>{name}</p>
        </div>
      </div>
      <div className="profileCard__body secondColor">
        <p>Daily</p>
        <p>Weekly</p>
        <p>Montly</p>
      </div>
    </div>
  );
};

export default ProfileCard;
