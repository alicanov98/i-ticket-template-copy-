import React from "react";

import { Link } from "react-router-dom";
export const Card = ({ data }) => {
 
  return (
    <Link to={`/card-details/${data.id}`} className="card">
    <div className="cardImg">
      <div className="image">
        <img
          src={`http://localhost:7000/${data.cardImg}`}
          alt={data.eventTitle}
        />
        <span className="btn">
          <span className="price">{data.minimumPrice} ₼</span>-dan
        </span>
      </div>
      <div className="eventInfo">
        <div className="eventName">{data.eventTitle}</div>
        <div className="info">
          <p className="eventDate">{data.eventDates}</p>
          <span className="separator">•</span>
          <p className="venueName">{data.eventLocation}</p>
        </div>
      </div>
    </div>
  </Link>
  );
};
