import { useState } from "react";

//? Images
import removeImg from "../assets/images/remove.svg";
import delivery from "../assets/images/delivery.svg";
import warnig from "../assets/images/warning.svg";

//? Redux
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  cartTotal,
  cartTotalPrice,
} from "../redux/slices/cartSlice";

//? Form hook
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

//? Yup
import * as yup from "yup";

//? Components
import Timer from "../components/Timer";

//? Translation
import { useTranslation } from "react-i18next";

//? React-toastify
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Basket = () => {
  //? Translation
  const { t } = useTranslation();

  //? Redux
  const cart = useSelector((state) => state.cartData.cart);
  const dispatch = useDispatch();

  //? Local states
  const [mobileNumber, setMobileNumber] = useState("+994");

  const handleMobileNumberChange = (e) => {
    const newValue = e.target.value;
    if (newValue.startsWith("+994")) {
      setMobileNumber("" + newValue);
    } else {
      setMobileNumber(newValue);
    }
  };

  //? Calc total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.minimumPrice * item.quantity,
    0
  );

  //? Yup schema
  const registerSchema = yup.object({
    name: yup.string().trim().required(t("name_empty")),
    surname: yup.string().trim().required(t("surname_empty")),
    email: yup.string().trim(t("email_empty")).required(t("email_empty")),
    mobile: yup
      .string()
      .trim()
      .required(t("phone_empty"))
      .matches(/^[0-9+]+$/, t("just_numbers")),
  });

  //? React hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data) => {
    toast.success(t("order_accepted"), {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    setTimeout(() => {
      window.location.reload();
    }, 2000);
    console.log(data);
  };

  return (
    <>
      <section className="basket">
        {/* //! ToastContainer  */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <div className="container">
          {cart.length === 0 ? (
            <div className="warnning">
              <h4 className="title">Səbət</h4>

              {/* //! Warnig   */}
              <div className="warnig">
                <img src={warnig} alt="warnig" />
                <h3>{t("No_events_found")}</h3>
              </div>
            </div>
          ) : (
            <div className="orders">
              <div className="eventTickets">
                <h4 className="title">Səbət</h4>
                {/* //! Timer  */}
                <Timer />

                {/* //! Events List  */}
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
                        <span className="cartTicketTitle">
                          {item.eventTitle}
                        </span>
                        <span className="cartTicketName">
                          {item.eventLocation}
                        </span>
                      </div>
                      <div className="cartTicketPrice">
                        <div className="cartPriceTicket">
                          <span className="cartPrice">
                            {item.minimumPrice} ₼
                          </span>
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

                {/* //! Delivery */}
                <div className="delivery">
                  <h4 className="title">Çatdırılma üsulunu seçin</h4>
                  <div className="onlineDelivery">
                    <img src={delivery} alt="delivery" />
                    <p className="text">Elektron bilet və ya vauçer</p>
                  </div>
                </div>
              </div>

              {/* //! Tickets Order */}
              <div className="ticketsOrder">
                <div className="ticketOrderTitle">
                  <h2>Çatdırılma üsulu</h2>
                  <p>Elektron bilet və ya vauçer (PDF formatında)</p>
                </div>
                <span className="personInfoforOrder">
                  İstifadəçi Məlumatları
                </span>
                <form className="orderForm" onSubmit={handleSubmit(onSubmit)}>
                  <input
                    type="text"
                    name="name"
                    {...register("name")}
                    placeholder={t("first_name")}
                    className={errors.name && "errorInp"}
                  />
                  {errors.name && (
                    <span className="errorInput">{errors.name.message}</span>
                  )}
                  <input
                    type="text"
                    placeholder={t("last_name")}
                    name="surname"
                    {...register("surname")}
                    className={errors.surname && "errorInp"}
                  />
                  {errors.surname && (
                    <span className="errorInput">{errors.surname.message}</span>
                  )}
                  <input
                    type="text"
                    name="mobile"
                    defaultValue={mobileNumber}
                    onChange={handleMobileNumberChange}
                    className={errors.mobile && "errorInp"}
                    placeholder={t("mobile")}
                    {...register("mobile")}
                  />
                  {errors.mobile && (
                    <span className="errorInput">{errors.mobile.message}</span>
                  )}
                  <input
                    type="email"
                    name="email"
                    placeholder={t("email")}
                    {...register("email")}
                    className={errors.email && "errorInp"}
                  />
                  {errors.email && (
                    <span className="errorInput">{errors.email.message}</span>
                  )}
                  <div className="orderTotalPrice">
                    <span className="orderPrice">Cəmi:</span>
                    <span className="orderPrice">{totalPrice} ₼</span>
                  </div>
                  <div className="rule">
                    <span className="form-group">
                      <input
                        type="checkbox"
                        id="checkbox"
                        className="checkBox"
                      />
                      <label htmlFor="checkbox">Şərtləri və qaydaları</label>
                      <br />
                      qəbul edirəm.
                    </span>
                  </div>

                  <button className="complete">Sifariş yarat</button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Basket;
