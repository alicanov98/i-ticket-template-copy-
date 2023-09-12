import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import removeImg from "../assets/images/remove.svg";
import delivery from "../assets/images/delivery.svg";

import {
  removeFromCart,
  cartTotal,
  cartTotalPrice,
} from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";
import Timer from "../components/Timer";


export const Basket = () => {

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartData.cart);

  const [mobileNumber, setMobileNumber] = useState("+994");
  const handleMobileNumberChange = (e) => {
    const newValue = e.target.value;
    if (newValue.startsWith("+994")) {
      setMobileNumber("" + newValue);
    } else {
      setMobileNumber(newValue);
    }
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.minimumPrice * item.quantity,
    0
  );

  return (
    <>
      <section className="basket">
        <div className="container">
          <div className="orders">
            <div className="eventTickets">
              <h4 className="title">Səbət</h4>
              <Timer />
              <ul className="cartTicketList">
                {cart.map((item) => (
                  <li className="cartTicketItem" key={item.id}>
                    <div className="cartTicketImg">
                      <img
                        src={`http://localhost:7000/${item.cardImg}`}
                        alt="img"
                      />
                    </div>
                    <div className="cartTicketData">
                      <span className="cartTicketStartDate">
                        LTM / {item.eventDates} - {item.startTime}
                      </span>
                      <span className="cartTicketTitle">{item.eventTitle}</span>
                      <span className="cartTicketName">
                        {item.eventLocation}
                      </span>
                    </div>
                    <div className="cartTicketPrice">
                      <div className="cartPriceTicket">
                        <span className="cartPrice">{item.minimumPrice} ₼</span>
                      </div>
                      <div className="cartTicketItemRemove">
                        <button
                          className="removeBtn"
                          onClick={() => {
                            dispatch(removeFromCart(item.id));
                            dispatch(cartTotal());
                            dispatch(cartTotalPrice());
                          }}
                        >
                          <img src={removeImg} alt="" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="delivery">
                <h4 className="title">Çatdırılma üsulunu seçin</h4>
                <div className="onlineDelivery">
                  <img src={delivery} alt="delivery" />
                  <p className="text">Elektron bilet və ya vauçer</p>
                </div>
              </div>
            </div>
            <div className="ticketsOrder">
              <div className="ticketOrderTitle">
                <h2>Çatdırılma üsulu</h2>
                <p>Elektron bilet və ya vauçer (PDF formatında)</p>
              </div>
              <span className="personInfoforOrder">İstifadəçi Məlumatları</span>
              <form className="orderForm">
                <input type="text" placeholder="Ad" />
                <input type="text" placeholder="Soyad" />
                <input
                  type="text"
                  value={mobileNumber}
                  onChange={handleMobileNumberChange}
                />
                <input type="text" placeholder="E-poçt" />
              </form>
              <div className="orderTotalPrice">
                <span className="orderPrice">Cəmi:</span>
                <span className="orderPrice">{totalPrice} ₼</span>
              </div>
              <div className="rule">
                <span className="form-group">
                  <input type="checkbox" id="checkbox" className="checkBox" />
                  <label htmlFor="checkbox">Şərtləri və qaydaları</label> 
                  <br />
                      qəbul edirəm.
                </span>
              </div>

              <Link className="complete" to="/">
                Sifariş yarat
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
