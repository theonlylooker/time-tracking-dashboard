import React from "react";
import { TrackingCardProps } from "../../types/types";

const TrackingCard = ({ className, img, color }: TrackingCardProps) => {
  return (
    <div className={className}>
      <div
        className={`trackingCard__header ${
          color === "Self Care" ? "SelfCare" : color
        }  `}
      >
        <img className="trackingCard__img" src={img} alt="icon" />
      </div>
      <div className="trackingCard__body">
        <div className="trackingCard__type">
          <p className="trackingCard__title">work</p>
          <span className="trackingCard__menu"></span>
        </div>
        <div className="trackingCard__content">
          <p className="trackingCard__actualPeriod">32hrs</p>
          <p className="trackingCard__lastPeriod">last week - 7hrs</p>
        </div>
      </div>
    </div>
  );
};

export default TrackingCard;
