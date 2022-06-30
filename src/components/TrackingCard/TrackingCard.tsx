import React from "react";
import { TrackingCardProps } from "../../types/types";

const TrackingCard = ({
  className,
  img,
  type,
  timeframe,
  timeframeType,
}: TrackingCardProps) => {
  return (
    <div className={className}>
      <div
        className={`trackingCard__header ${
          type === "Self Care" ? "SelfCare" : type
        }  `}
      >
        <img className="trackingCard__img" src={img} alt="icon" />
      </div>
      <div
        className={`trackingCard__body ${
          type === "Self Care" ? "SelfCarebody" : type + "body"
        }`}
      >
        <div className="trackingCard__type">
          <p className="trackingCard__title">{type}</p>
          <span className="trackingCard__menu"></span>
        </div>
        <div className="trackingCard__content">
          <p className="trackingCard__actualPeriod">{timeframe.current}hrs</p>
          <p className="trackingCard__lastPeriod">
            Last {timeframeType === "dai" ? "day" : timeframeType} -{" "}
            {timeframe.previous}hrs
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrackingCard;
