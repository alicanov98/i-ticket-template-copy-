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
import fullscreenImg from "../assets/images/fullscreens.svg";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

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
                      Lahıc Tarix-Diyarşünaslıq Muzeyi (0+)
                    </span>
                    <span className="sessionLabel infoItems">
                      Lahıc Tarix-Diyarşünaslıq Muzeyi
                    </span>
                  </div>
                  <div className="ticketDate infoItems">
                    <span className="sessionLabel">Tarix</span>
                    <span className="value">B. 3.09.2023 10:00 - 20:00</span>
                  </div>
                  <div className="ticketPrice infoItems">
                    <span className="sessionLabel">Qiymət</span>
                    <span className="value">2 - 3 ₼</span>
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
                        <span className="sector">
                          Lahıc Tarix-Diyarşünaslıq Muzeyi
                        </span>
                        <div className="priceCategory">
                          <span className="buyerType">Tələbə</span>
                          <div className="price">
                            <span>1 </span>
                            <span>₼</span>
                          </div>
                        </div>
                        <div className="counter">
                          <button
                            className="decrease counterBtn"
                            type="button"
                            disabled
                          >
                            -
                          </button>
                          <input
                            className="inpCounter"
                            type="text"
                            autocomplete="off"
                            readonly
                            min="1"
                            max="10"
                            value="1"
                            step="1"
                          />
                          <button className="increase counterBtn" type="button">
                            +
                          </button>
                        </div>
                        <span className="available">Mövcuddur: 3000</span>
                        <button className="add" type="button">
                          Əlavə edin
                        </button>
                      </div>
                      <div className="variation">
                        <span className="sector">
                          Lahıc Tarix-Diyarşünaslıq Muzeyi
                        </span>
                        <div className="priceCategory">
                          <span className="buyerType">Xarici vətəndaşlar.</span>
                          <div className="price">
                            <span>3 </span>
                            <span>₼</span>
                          </div>
                        </div>
                        <div className="counter">
                          <button
                            className="decrease counterBtn"
                            type="button"
                            disabled
                          >
                            -
                          </button>
                          <input
                            className="inpCounter"
                            type="text"
                            autocomplete="off"
                            readonly
                            min="1"
                            max="10"
                            value="1"
                            step="1"
                          />
                          <button className="increase counterBtn" type="button">
                            +
                          </button>
                        </div>
                        <span className="available">Mövcuddur: 3000</span>
                        <button className="add" type="button">
                          Əlavə edin
                        </button>
                      </div>
                      <div className="variation">
                        <span className="sector">
                          Lahıc Tarix-Diyarşünaslıq Muzeyi
                        </span>
                        <div className="priceCategory">
                          <span className="buyerType">Yerli vətəndaşlar.</span>
                          <div className="price">
                            <span>2 </span>
                            <span>₼</span>
                          </div>
                        </div>
                        <div className="counter">
                          <button
                            className="decrease counterBtn"
                            type="button"
                            disabled
                          >
                            -
                          </button>
                          <input
                            className="inpCounter"
                            type="text"
                            autocomplete="off"
                            readonly
                            min="1"
                            max="10"
                            value="1"
                            step="1"
                          />
                          <button className="increase counterBtn" type="button">
                            +
                          </button>
                        </div>
                        <span className="available">Mövcuddur: 3000</span>
                        <button className="add" type="button">
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
                      <p className="tabTxt">
                        1985-ci ildə yaradılmış Lahıc Tarix-Diyarşünaslıq
                        Muzeyinin fondunda 700-dən çox maddi-mədəniyyət nümunəsi
                        mühafizə olunur. 5 zaldan ibarət ekspozisiyada Lahıcın
                        orta əsrlər dövrünü xarakterizə edən maddi-mədəniyyət
                        nümunələri nümayiş olunur. Məzmun və forma zənginliyinə
                        görə seçilən bu eksponatlar arxeoloji, etnoqrafik,
                        numizimatik, dekorativ-tətbiqi sənəti nümunələrindən
                        ibarətdir. Muzeydə xüsusilə Lahıc ustalarının mürəkkəb
                        və incə naxışlarla bəzədikləri misgərlik sənəti
                        nümunələri, dəmirçilik sənətinə aid əmək alətləri və s.
                        sərgilənir.
                      </p>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel className="tabMain">
                  <div className="tabContent">
                    <div className="tabText">
                      <p className="tabTxt">0+</p>
                    </div>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
            <div className="eventDetailImg">
              <img
                src="https://cdn.iticket.az/event/artist/aFpGxyIdcS4OmYTbVVdmCjbqbxSEb9GNGHNVx3Eg.png"
                alt=""
              />
            </div>
          </div>
          <div className="venue-detail">
            <hr />
            <h2 className="title">Məkan yeri</h2>
            <div className="locationInfo">
              <div className="locationMap">
                <iframe
                  src="https://maps.google.com/maps?q=40.8451988,48.3832192&z=16&output=embed"
                  frameborder="0"
                ></iframe>
              </div>
              <div className="vanueCard">
                <div className="vanueCardCont">
                  <div className="vanueCardTxt">
                    <div className="venue-name">
                      <Link to="https://iticket.az/venues/lahij-museum-of-local-history">
                        Lahıc Tarix-Diyarşünaslıq Muzeyi
                      </Link>
                    </div>
                    <div className="venue-address"></div>
                    <div className="venue-phones">
                      <span>Mobil</span>
                      <Link to="tel:(+994 20) 287-75-79">
                        (+994 20) 287-75-79
                      </Link>
                    </div>
                  </div>
                  <div className="venueBtn">
                    <Link to="https://www.google.com/maps?q=40.8451988,48.3832192">
                      İstiqamət
                    </Link>
                  </div>
                </div>
                <img
                  src="https://cdn.iticket.az/venue/icon/RpETSDGyZcwunN6rR03A4MHC5lrveO1C.png"
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
