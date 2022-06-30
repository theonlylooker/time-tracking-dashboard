import React from "react";
import { ProfileProps } from "../../types/types";

const ProfileCard = ({ name, img, handleType }: ProfileProps) => {
  return (
    <div className="profileCard">
      <div className="profileCard__header firstColor">
        <picture className="profileCard__imgContainer">
          <img className="profileCard__img" src={img} alt="Profile avatar" />
        </picture>
        <div className="profileCard__text">
          <p className="profileCard__subtitle">Report for</p>
          <p className="profileCard__user">{name}</p>
        </div>
      </div>
      <div className="profileCard__body">
        <button
          className="profileCard__button secondColor"
          onClick={() => handleType("daily")}
        >
          Daily
        </button>
        <button
          className="profileCard__button secondColor"
          onClick={() => handleType("weekly")}
          autoFocus
        >
          Weekly
        </button>
        <button
          className="profileCard__button secondColor"
          onClick={() => handleType("monthly")}
        >
          Monthly
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
