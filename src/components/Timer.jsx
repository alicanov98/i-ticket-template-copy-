import { useState, useEffect } from "react";

//? Redux
import { useDispatch, useSelector } from "react-redux";
import {
  allRemoveFromCart,
  cartTotal,
  cartTotalPrice,
} from "../redux/slices/cartSlice";

//? Router
import { useLocation } from "react-router-dom";

const Timer = ({ setOpen }) => {
  //! States
  const [minutes, setMinutes] = useState(15);
  const [seconds, setSeconds] = useState(0);

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cartData.cart);

  const path = useLocation().pathname;

  useEffect(() => {
    let interval;

    if (minutes === 0 && seconds === 0) {
      clearInterval(interval);
      dispatch(allRemoveFromCart());
      dispatch(cartTotal());
      dispatch(cartTotalPrice());
      if (path !== "/basket") {
        setOpen(false);
      }
    } else {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [minutes, seconds, setOpen, dispatch, path]);

  useEffect(() => {
    const checkCart = () => {
      if (cart.length !== 0) {
        setMinutes(15);
      } else {
        setMinutes(0);
      }
      setSeconds(0);
    };
    checkCart();
  }, [cart.length]);

  return (
    <div className="timer">
      <div>
        <div className="track"></div>
        <span className="timeOut">
          <span>{minutes}</span>:<span>{seconds}</span>
        </span>
      </div>
    </div>
  );
};

export default Timer;
