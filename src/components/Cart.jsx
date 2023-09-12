import closeIcon from "../assets/images/close.svg";
import evenodd from "../assets/images/evenodd.svg";
import removeImg from "../assets/images/remove.svg";
import removeAll from "../assets/images/removeAll.svg";
import { useTimer } from "react-timer-hook";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


import { 
  removeFromCart,
  cartTotal,
  cartTotalPrice,
} from "../redux/slices/cartSlice";


function MyTimer({ expiryTimestamp }) {
  const { seconds, minutes } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div className="timer">
      <div>
        <div className="track"></div>
        <span className="timeOut"><span>{minutes}</span>:<span>{seconds}</span></span>
      </div>
    </div>
  );
}

export const Cart = ({ open, setOpen }) => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 900);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartData.cart);
  const cartCount =  cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + item.minimumPrice * item.quantity, 0);
// console.log(cart)
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
            <span className="numberOf">{cartCount}</span>
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
          </div>
        </div>
        <div className="cartFooter">
          <div className="totalPriceCart">
            <div className="cartTotalPrice">
              <span className="totalPriceTitle">Cəmi:</span>
              <span className="totalPrice">{totalPrice} ₼</span>
            </div>
          </div>
          <div className="cartFooterContent">
            <div className="removeCart">
            <button >
              <img src={removeAll} alt="removeAll" /> Səbəti təmizlə
            </button>
            </div>
            <div className="cartBtn">
            <Link to="/basket"  className="complete">Səbət</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
