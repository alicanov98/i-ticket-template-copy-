import { useEffect, useState } from "react";

//? Router
import { Link, useParams } from "react-router-dom";

//? Icons
import { MdFavoriteBorder } from "react-icons/md";
import { RiShareForwardLine } from "react-icons/ri";

//? Images
import venue from "../assets/images/venue.svg";
import date from "../assets/images/date.svg";
import local from "../assets/images/locale.svg";
import age from "../assets/images/age.svg";
import currency from "../assets/images/currency.svg";
import tickets from "../assets/images/tickets.svg";
import info from "../assets/images/info.svg";
import fullscreenImg from "../assets/images/fullscreens.svg";

//? React tabs
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

//? Axios
import axios from "axios";

//? Redux
import {
  addToCart,
  adToFavori,
  cartTotal,
  cartTotalPrice,
  decrement,
  increment,
} from "../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

//? Google-map
import GoogleMapReact from "google-map-react";

//? Translation
import { useTranslation } from "react-i18next";

import data from "../data.json"
//? Google map
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const defaultProps = {
  center: {
    lat: 40.383702,
    lng: 49.8096241,
  },
  zoom: 16,
};

const CardDetails = () => {
  //? Router
  const { id } = useParams();

  //? Translation
  const { t } = useTranslation();

  //? Scroll page to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [cardData, setCardData] = useState({
    bannerImg: "uploads/yuxumadaGelmeBarner.jpg",
    infoImg: "uploads/yuxumadaGelmeInfo.jpg",
    locationImg: "uploads/elektroEventHall.png",
  });

  //? Redux
  const dispatch = useDispatch();
  let favoriteList = useSelector((state) => state.cartData.favori);
  const count = useSelector((state) => state.cartData.counter);
  let totalPrice = Number(cardData.minimumPrice) * count;
  const isFavoriteEvent = favoriteList.find((event) => event.id === id);

  //? Get single data from api

  
  useEffect(() => {
    const eventData = data.data.find((event) => event.id === id);
    setCardData(eventData);

  }, [id]);


  return (
    <>
      <section className="cardHerro">
        <div className="barnerImg">
          <img src={`/${cardData?.bannerImg}`} alt="" />
        </div>
        <div className="info">
          <div className="container">
            <div className="btnsCard">
              <Link href="#icalendar" className="priceBtn" to="/">
                <span className="cardBtn">
                  <span className="price">
                    {t("from")}-{cardData.minimumPrice} ₼
                  </span>
                </span>
              </Link>
              <button
                className={
                  isFavoriteEvent ? "active icon" : "favoriteIcon icon"
                }
                onClick={() => {
                  dispatch(adToFavori(cardData));
                }}
              >
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
                  <p className="blockTitle">{t("venue")}</p>
                  <p className="blockTitle">{t("date")}</p>
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
                  <p className="blockTitle">{t("language")}</p>
                  <p className="blockTitle blockTitlend">
                    {t("age_restrictions")}
                  </p>
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
                  <p className="blockTitle">{t("price")}</p>
                  <p className="blockTitle">{t("ticket_info")}</p>
                </div>
              </div>
            </Link>
            <Link to="#event-detail">
              <div className="infoBlock">
                <span className="blockIconfirst">
                  <img src={info} alt="info" />
                </span>
                <div className="infoBlockTitle">
                  <p className="blockTitle">{t("about_event")}</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="ticketInfos">
            <div className="imapParent">
              <div className="ticketMap">
                <div className="imapInfo">
                  <div className="ticketLocation infoItems">
                    <span className="value">
                      {cardData.eventTitle} ({cardData.ageRestriction})
                    </span>
                    <span className="sessionLabel infoItems infoItemsLine">
                      {cardData.eventLocation}
                    </span>
                  </div>
                  <div className="ticketDate infoItems">
                    <span className="sessionLabel">{t("date")}</span>
                    <span className="value">
                      {cardData.eventDate} / {cardData.startTime} -{" "}
                      {cardData.endTime}
                    </span>
                  </div>
                  <div className="ticketPrice infoItems">
                    <span className="sessionLabel">{t("price")}</span>

                    <span className="value priceValue">
                      {cardData.minimumPrice} ₼
                    </span>
                  </div>
                </div>
              </div>
              <div className="map">
                <div className="imapContainer"></div>
                <div className="imapLoading"></div>
                <div className="imapViews">
                  <div className="scrollContent">
                    <div className="helper">
                      <div className="variation">
                        <span className="sector">{cardData.eventTitle}</span>
                        <div className="priceCategory">
                          <span className="buyerType">{t("price")}</span>
                          <div className="price">
                            <span>{totalPrice} </span>
                            <span>₼</span>
                          </div>
                        </div>
                        <div className="counter">
                          <button
                            className="decrease counterBtn"
                            type="button"
                            onClick={() => dispatch(decrement())}
                          >
                            -
                          </button>
                          <input
                            className="inpCounter"
                            type="text"
                            autoComplete="off"
                            readOnly
                            min="1"
                            max="10"
                            value={count}
                            step="1"
                          />
                          <button
                            className="increase counterBtn"
                            type="button"
                            onClick={() => dispatch(increment())}
                          >
                            +
                          </button>
                        </div>
                        <span className="available">
                          {t("available")}: 3000
                        </span>
                        <button
                          className="add"
                          type="button"
                          onClick={() => {
                            dispatch(addToCart(cardData));
                            dispatch(cartTotal());
                            dispatch(cartTotalPrice());
                          }}
                        >
                          {t("add")}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="imapFullscreen">
                  <button className="fullScreenBtn">
                    <img src={fullscreenImg} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div id="#event-detail" className="eventDetails">
            <div className="eventInfoTab">
              <Tabs className="tabs">
                <TabList className="tabList">
                  <Tab className="tab">
                    <Link>{t("about_event")}</Link>
                  </Tab>
                  <Tab className="tab">
                    <Link>{t("age_restrictions")}</Link>
                  </Tab>
                </TabList>
                <TabPanel className="tabMain">
                  <div className="tabContent">
                    <div className="tabText">
                      <p className="tabTxt">{cardData.eventInfo}</p>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel className="tabMain">
                  <div className="tabContent">
                    <div className="tabText">
                      <p className="tabTxt">{cardData.ageRestriction}</p>
                    </div>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
            <div className="eventDetailImg">
              <img src={`/${cardData?.infoImg}`} alt="" />
            </div>
          </div>
          <div className="venue-detail">
            <hr />
            <h2 className="title">{t("venue_location")}</h2>
            <div className="locationInfo">
              <div className="locationMap">
                <GoogleMapReact
                  bootstrapURLKeys={{ key: "" }}
                  defaultCenter={defaultProps.center}
                  defaultZoom={defaultProps.zoom}
                >
                  <AnyReactComponent lat={40.383702} lng={49.8096241} />
                </GoogleMapReact>
              </div>
              <div className="vanueCard">
                <div className="vanueCardCont">
                  <div className="vanueCardTxt">
                    <h3 className="venueName">{cardData.eventLocation}</h3>
                    <div className="venueLocation">
                      <Link to="https://iticket.az/venues/lahij-museum-of-local-history">
                        {cardData.venuelocation}
                      </Link>
                    </div>
                    <div className="venue-address"></div>
                    <div className="venue-phones">
                      <span>Mobil</span>
                      <Link to={`tel:${cardData.mobil}`}>{cardData.mobil}</Link>
                    </div>
                  </div>
                  <div className="venueBtn">
                    <Link to="https://www.google.com/maps?q=40.8451988,48.3832192">
                      {t("get_direction")}
                    </Link>
                  </div>
                </div>
                <img
                  src={`/${cardData?.locationImg}`}
                  alt={`/${cardData?.locationImg}`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardDetails;
