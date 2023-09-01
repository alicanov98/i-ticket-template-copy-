import React from "react";

// Router
import { Link } from "react-router-dom";

// Icons
import { MdFavoriteBorder } from "react-icons/md";
import { RiShareForwardLine } from "react-icons/ri";

// Images
import venue from "../assets/images/venue.svg";
import date from "../assets/images/date.svg";
import local from "../assets/images/locale.svg";
import age from "../assets/images/age.svg";
import currency from "../assets/images/currency.svg";
import tickets from "../assets/images/tickets.svg";
import info from "../assets/images/info.svg";

const CardDetails = () => {
  return (
    <>
      <section className="cardHerro">
        <div className="barnerImg">
          <img
            src="https://cdn.iticket.az/event/cover/CNjngyfI3Q4huSOYTvFZ1vu9SnyRLLASrvpNDgvJ.jpg"
            alt=""
          />
        </div>
        <div className="info">
          <div className="container">
            <div className="btnsCard">
              <Link href="#icalendar" className="priceBtn" to="/">
                <span className="cardBtn">
                  <span className="price">25 ₼</span>-dan
                </span>
              </Link>
              <button className="favoriteIcon icon">
                <MdFavoriteBorder />
              </button>
              <button className="shareIcon icon">
                <RiShareForwardLine />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="cardDetails">
        <div className="container">
          <div className="eventChips">
            <Link to="#venue-event">
              <div className="infoBlock">
                <span className="blockIconfirst">
                  <img src={venue} alt="venue" />
                </span>
                <span className="blockIconSecond">
                  <img src={date} alt="date" />
                </span>
                <div className="infoBlockTitle">
                  <p className="blockTitle">Məkan</p>
                  <p className="blockTitle">Tarix</p>
                </div>
              </div>
            </Link>
            <Link to="#event-detail">
              <div className="infoBlock">
                <span className="blockIconfirst">
                  <img src={age} alt="age" />
                  <span className="age">8+</span>
                </span>
                <span className="blockIconSecond">
                  <img src={local} alt="local" />
                </span>
                <div className="infoBlockTitle">
                  <p className="blockTitle">Dil</p>
                  <p className="blockTitle">Yaş məhdudiyyəti</p>
                </div>
              </div>
            </Link>
            <Link to="#event-chips">
              <div className="infoBlock">
                <span className="blockIconfirst">
                  <img src={currency} alt="currency" />
                </span>
                <span className="blockIconSecond">
                  <img src={tickets} alt="tickets" />
                </span>
                <div className="infoBlockTitle">
                  <p className="blockTitle">Qiymət</p>
                  <p className="blockTitle">Biletlər haqda</p>
                </div>
              </div>
            </Link>
            <Link to="event-detail">
              <div className="infoBlock">
                <span className="blockIconfirst">
                  <img src={info} alt="info" />
                </span>
                <div className="infoBlockTitle">
                  <p className="blockTitle">Tədbir haqqında</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardDetails;
