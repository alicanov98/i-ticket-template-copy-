// Router
import { Link, useParams } from "react-router-dom";

// Icons
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

import { useEffect, useState } from "react";
//? axios
import axios from "axios";

//? redux
import {
  addToCart,
  adToFavori,
  cartTotal,
  cartTotalPrice,
  decrement,
  increment,
} from "../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

//?google-map
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const defaultProps = {
  center: {
    lat: 40.383702,
    lng: 49.8096241,
  },
  zoom: 16,
};

const CardDetails = () => {

  const dispatch = useDispatch();
  const { id } = useParams();

  const [cardData, setCardData] = useState({});
  const [activIcon, setActiveIcon] = useState(false);

  let checkDropdown = activIcon ? "active icon" : "favoriteIcon icon";
  useEffect(() => {
    const storedFavori = localStorage.getItem("activIcon");
    if (storedFavori === "true") {
      setActiveIcon(true);
    }
  }, []);

  const handleFavoriClick = () => {
    if (activIcon) {
      localStorage.setItem("activIcon", "false");
    } else {
      localStorage.setItem("activIcon", "true");
    }
    setActiveIcon(!activIcon);
  };

  useEffect(() => {
    const getSingleData = async () => {
      await axios
        .get(`${process.env.REACT_APP_EVENT_DETAILS}/${id}`)
        .then((res) => {
          setCardData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getSingleData();
  }, [id]);

  const count = useSelector((state) => state.cartData.counter);
  let totalPrice = Number(cardData.minimumPrice) * count;

  return (
    <>
      <section className="cardHerro">
        <div className="barnerImg">
          <img src={`http://localhost:7000/${cardData.bannerImg}`} alt="" />
        </div>
        <div className="info">
          <div className="container">
            <div className="btnsCard">
              <Link href="#icalendar" className="priceBtn" to="/">
                <span className="cardBtn">
                  <span className="price">{cardData.minimumPrice} ₼</span>-dan
                </span>
              </Link>
              <button
                className={checkDropdown}
                onClick={() => {
                  handleFavoriClick()
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
                  <p className="blockTitle blockTitlend">Yaş məhdudiyyəti</p>
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
            <Link to="#event-detail">
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
                    <span className="sessionLabel">Tarix</span>
                    <span className="value">
                      {cardData.eventDate} / {cardData.startTime} -{" "}
                      {cardData.endTime}
                    </span>
                  </div>
                  <div className="ticketPrice infoItems">
                    <span className="sessionLabel">Qiymət</span>

                    <span className="value priceValue">{cardData.minimumPrice} ₼</span>
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
                          <span className="buyerType">Qiymət</span>
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
                        <span className="available">Mövcuddur: 3000</span>
                        <button
                          className="add"
                          type="button"
                          onClick={() => {
                            dispatch(addToCart(cardData));
                            dispatch(cartTotal());
                            dispatch(cartTotalPrice());
                          }}
                        >
                          Əlavə edin
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
                    <Link>Tədbir haqqında</Link>
                  </Tab>
                  <Tab className="tab">
                    <Link>Yaş məhdudiyyəti</Link>
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
              <img src={`http://localhost:7000/${cardData.infoImg}`} alt="" />
            </div>
          </div>
          <div className="venue-detail">
            <hr />
            <h2 className="title">Məkan yeri</h2>
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
                      İstiqamət
                    </Link>
                  </div>
                </div>
                <img
                  src={`http://localhost:7000/${cardData.locationImg}`}
                  alt=""
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
