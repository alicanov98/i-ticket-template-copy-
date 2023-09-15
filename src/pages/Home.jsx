//? Swiper sections 
import { SwiperChildrean } from "../components/SwiperChildrean";
import { SwiperHomeHerro } from "../components/SwiperHomeHerro";
import { SwiperPerformances } from "../components/SwiperPerformances";
import { SwiperPopular } from "../components/SwiperPopular";
import { SwiperTourism } from "../components/SwiperTourism";
import { SwiperNewEvents } from "../components/SwiperNewEvents";
import { SwiperEventsWeekend } from "../components/SwiperEventsWeekend";

//? Image 
import ios from "../assets/images/ios.png";
import android from "../assets/images/android.png";
import mobilApp from "../assets/images/app-05-2023.png";

//? Router
import { Link } from "react-router-dom";

//? I18next
import { useTranslation } from "react-i18next";


const Home = () => {

  const {t}=useTranslation()
 
  return (
    <>
      <main>
        <SwiperHomeHerro />

        <section className="popularEvents">
          <div className="container">
            <h2 className="title">{t("populyar_events")}</h2>
          </div>

            <SwiperPopular />
        </section>

        <div className="advertising">
          <div className="container">
            <div className="row">
            <img
              src="https://cdn.iticket.az/images/banners/icard-banner-desktop-03-2023.gif"
              alt="advertising"
            />
            </div>
          </div>
        </div>

        <section className="tourismEvents">
          <div className="container">
            <h2 className="title">{t("tourism")}</h2>
          </div>
          <div className="row">
            <SwiperTourism />
          </div>
        </section>

        <div className="advertising">
          <div className="container">
            <div className="row">
            <img
              src="https://cdn.iticket.az/images/banners/epoint-january-2023-1250x122.gif"
              alt="advertising"
            />
          </div>
            </div>
        </div>

        <section className="performancesEvents">
          <div className="container">
            <h2 className="title">{t("theatre")}</h2>
          </div>
          <div className="row">
            <SwiperPerformances />
          </div>
        </section>

        <section className="childrenEvents">
          <div className="container">
            <h2 className="title">{t("kids")}</h2>
          </div>
          <div className="row">
            <SwiperChildrean />
          </div>
        </section>

        <section className="weekendEvenetsSwiper">
          <div className="container">
            <h2 className="title">{t("weekends")}</h2>
          </div>
          <div className="row">
            <SwiperEventsWeekend/>
          </div>
        </section>

        <section className="swiperNewEvents">
          <div className="container">
            <h2 className="title">{t("what_new")}</h2>
          </div>
          <div className="row">
            <SwiperNewEvents />
          </div>
        </section>

        <section className="advertisingApp">
          <div className="container">
            <div className="advertiCard">
              <div className="advertiContent">
                <h2 className="titleApp">{t("visual_journey")}</h2>
                <p className="text">
                {t("application")}
             
                </p>
                <div className="linksApp">
                  <Link className="linkApp">
                    <img src={android} alt="android" />
                  </Link>
                  <span className="linkLine"></span>
                  <Link className="linkApp">
                    <img src={ios} alt="ios" />
                  </Link>
                </div>
              </div>
              <div className="downloadInfo">
                <p className="downloadText">
                  {t("download_now")}
                </p>
              </div>
              <img src={mobilApp} alt="mobilApp" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
