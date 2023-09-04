import React from "react";
import closeIcon from "../assets/images/close.svg";
import evenodd from "../assets/images/evenodd.svg";
import removeImg from "../assets/images/remove.svg";
import removeAll from "../assets/images/removeAll.svg";
import { useTimer } from "react-timer-hook";
import { Link } from "react-router-dom";
function MyTimer({ expiryTimestamp }) {
  const { seconds, minutes } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div>
      <div>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
    </div>
  );
}

export const Cart = ({ open, setOpen }) => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 900);
  return (
    <div className={`cart ${open && "active"}`}>
      <div className="overlay" onClick={() => setOpen(false)}></div>
      <div className="cartContent">
        <div className="imapLoading"></div>
        <div className="cartHeader">
          <div className="NumberOfTickets">
            <span className="numberOfTitle">
              <img src={evenodd} alt="" />
              Biletlərin sayı:
            </span>
            <span className="numberOf">0</span>
          </div>
          <button className="close" onClick={() => setOpen(false)}>
            <img src={closeIcon} alt="" />
          </button>
        </div>
        <div className="title">Səbət</div>
        <MyTimer expiryTimestamp={time} />
        <div className="ticketsList">
          <div className="cartsContent">
            <ul className="cartTicketList">
              <li className="cartTicketItem">
                <div className="cartTicketImg">
                  <img
                    src="https://cdn.iticket.az/event/poster_square/114uUyg3L7XwbPvhgpd4pg3VLG91i2FHokEpyGDI.jpg"
                    alt="img"
                  />
                </div>
                <div className="cartTicketData">
                  <span className="cartTicketStartDate">
                    LTM / Şənbə, 23 Sentyabr - 09:00
                  </span>
                  <span className="cartTicketTitle">
                    Lahıc Tarix-Diyarşünaslıq Muzeyi
                  </span>
                  <span className="cartTicketName">
                    Lahıc Tarix-Diyarşünaslıq Muzeyi
                  </span>
                </div>
                <div className="cartTicketPrice">
                  <div className="cartPriceTicket">
                    <span className="cartPrice">3 ₼</span>
                    <span className="person">Xarici vətəndaşlar.</span>
                  </div>
                  <div className="cartTicketItemRemove">
                    <button className="removeBtn">
                      <img src={removeImg} alt="" />
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="cartFooter">
            <div className="totalPriceCart">
          <div className="cartTotalPrice">
            <span className="totalPriceTitle">Cəmi:</span>
            <span className="totalPrice">4 ₼</span>
          </div>
            </div>
          <div className="cartFooterContent">
            <Link to="/">
              <img src={removeAll} alt="removeAll" /> Səbəti təmizlə
            </Link>
            <button className="complete">Səbət</button>
          </div>
        </div>
      </div>
    </div>
  );
};
