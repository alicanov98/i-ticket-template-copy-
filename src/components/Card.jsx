import React from "react";

import { Link } from "react-router-dom";

export const Card = ({ image, price, name, date, location }) => {
  return (
    <div className="card">
      <Link className="cardEvent" to="/">
        <div className="cardImg">
          <img className="imgUp" src={image} alt="" />
          {/* <img className="imgDown" src={cardImg} alt="" /> */}
          <span className="cardBtn">
            <span className="price">{price} ₼</span>-dan
          </span>
        </div>
        <div className="cardInfo">
          <h2 className="eventName">{name}</h2>
          <div className="eventInfo">
            <p className="eventDate">{date}</p>
            <p className="separator">•</p>
            <p className="venueName">{location}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
