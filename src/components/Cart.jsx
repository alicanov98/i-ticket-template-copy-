import { useEffect } from "react";

//? images 
import closeIcon from "../assets/images/close.svg";
import evenodd from "../assets/images/evenodd.svg";
import removeImg from "../assets/images/remove.svg";
import removeAll from "../assets/images/removeAll.svg";
//? Router 
import { Link, useLocation } from "react-router-dom";

//? Redux 
import { useDispatch, useSelector } from "react-redux";

import {
  removeFromCart,
  cartTotal,
  cartTotalPrice,
  allRemoveFromCart,
} from "../redux/slices/cartSlice";

//? Timer 
import Timer from "./Timer";

//? -------------------------------------------- 
export const Cart = ({ open, setOpen }) => {

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cartData.cart);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = cart.reduce(
    (total, item) => total + item.minimumPrice * item.quantity,
    0
  );

  const path=useLocation()
  
  useEffect(()=>{
   setOpen(false)
  },[path.pathname,setOpen])

  //? ------------------------------------------ 
  return (
    <div className={`cart ${open && "active"}`}>
      {/* //! Overlay */}
      <div className="overlay" onClick={() => setOpen(false)}></div>
      <div className="cartContent">
      {/* //! Loading */}
        <div className="imapLoading"></div>
        {/* //! Cart Header */}
        <div className="cartHeader">
          <div className="NumberOfTickets">
            <span className="numberOfTitle">
              <img src={evenodd} alt="" />
              Biletlərin sayı:
            </span>
            <span className="numberOf">{cartCount}</span>
          </div>
          <button className="close" onClick={() => setOpen(false)}>
            <img src={closeIcon} alt="" />
          </button>
        </div>
        <div className="title">Səbət</div>
        {/* //! Timer */}
        <Timer setOpen={setOpen}/>

        {/* //! Ticket List */}
        <div className="ticketsList">
          <div className="cartsContent">
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
                    <span className="cartTicketName">{item.eventLocation}</span>
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
          </div>
        </div>
        {/* //! Cart Footer */}
        <div className="cartFooter">
          <div className="totalPriceCart">
            <div className="cartTotalPrice">
              <span className="totalPriceTitle">Cəmi:</span>
              <span className="totalPrice">{totalPrice} ₼</span>
            </div>
          </div>
          <div className="cartFooterContent">
            <div className="removeCart">
              <button onClick={() => dispatch(allRemoveFromCart())}>
                <img src={removeAll} alt="removeAll" /> Səbəti təmizlə
              </button>
            </div>
            <div className="cartBtn">
              <Link to="/basket" className="complete">
                Səbət
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
