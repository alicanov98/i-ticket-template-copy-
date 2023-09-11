import { Link } from "react-router-dom";
import { SwiperChildrean } from "../components/SwiperChildrean";
import { SwiperHomeHerro } from "../components/SwiperHomeHerro";
import { SwiperPerformances } from "../components/SwiperPerformances";
import { SwiperPopular } from "../components/SwiperPopular";
import { SwiperTourism } from "../components/SwiperTourism";
// images
import ios from "../assets/images/ios.png";
import android from "../assets/images/android.png";
import mobilApp from "../assets/images/app-05-2023.png";
import { SwiperNewEvents } from "../components/SwiperNewEvents";
import { SwiperEventsWeekend } from "../components/SwiperEventsWeekend";
const Home = () => {
  return (
    <>
      <main>
        <SwiperHomeHerro />

        <section className="popularEvents">
          <div className="container">
            <h2 className="title">Populyar tədbirlər</h2>
          </div>

            <SwiperPopular />
        </section>
{/* 
        <div className="advertising">
          <div className="container">
            <img
              src="https://cdn.iticket.az/images/banners/icard-banner-desktop-03-2023.gif"
              alt="advertising"
            />
          </div>
        </div>

        <section className="tourismEvents">
          <div className="container">
            <h2 className="title">Turizm</h2>
          </div>
          <div className="row">
            <SwiperTourism />
          </div>
        </section>

        <div className="advertising">
          <div className="container">
            <img
              src="https://cdn.iticket.az/images/banners/epoint-january-2023-1250x122.gif"
              alt="advertising"
            />
          </div>
        </div>

        <section className="performancesEvents">
          <div className="container">
            <h2 className="title">Tamaşalar</h2>
          </div>
          <div className="row">
            <SwiperPerformances />
          </div>
        </section>

        <section className="childrenEvents">
          <div className="container">
            <h2 className="title">Uşaqlar</h2>
          </div>
          <div className="row">
            <SwiperChildrean />
          </div>
        </section>

        <section className="weekendEvenetsSwiper">
          <div className="container">
            <h2 className="title">Həftəsonları</h2>
          </div>
          <div className="row">
            <SwiperEventsWeekend/>
          </div>
        </section>

        <section className="swiperNewEvents">
          <div className="container">
            <h2 className="title">Yenilik</h2>
          </div>
          <div className="row">
            <SwiperNewEvents />
          </div>
        </section>

        <section className="advertisingApp">
          <div className="container">
            <div className="advertiCard">
              <div className="advertiContent">
                <h2 className="titleApp">NÖVBƏTİ VİZUAL SƏYAHƏTİNİZİ TAPIN</h2>
                <p className="text">
                 
                  iTicket.AZ tətbiqi bütün növ tədbirlərə (teatr, idman,
                  konsertlər, sərgilər və s.) biletləri əldə etməyi asan və
                  sürətli edir.
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
                  İNDİ YÜKLƏ İNDİ YÜKLƏ İNDİ YÜKLƏ İNDİ YÜKLƏ İNDİ YÜKLƏ{" "}
                </p>
              </div>
              <img src={mobilApp} alt="mobilApp" />
            </div>
          </div>
        </section> */}
      </main>
    </>
  );
};

export default Home;
