import React from "react";

import { Link } from "react-router-dom";
export const Card = ({ data }) => {
 
  return (
    <div className="card" >
      <Link className="cardEvent" to={`/card-details/${data.id}`}>
        <div className="cardImg">
          <img
            className="imgUp"
            src={`http://localhost:7000/${data.cardImg}`}
            alt=""
          />
          {/* <img className="imgDown" src={cardImg} alt="" /> */}
          <span className="cardBtn">
            <span className="price">{data.minimumPrice} ₼</span>-dan
          </span>
        </div>
        <div className="cardInfo">
          <h2 className="eventName">{data.eventTitle}</h2>
          <div className="eventInfo">
            <p className="eventDate">{data.eventDates}</p>
            <p className="separator">•</p>
            <p className="venueName">{data.eventLocation}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
