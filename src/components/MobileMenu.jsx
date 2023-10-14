import { useEffect, useState } from "react";

//? Router
import { Link, NavLink, useLocation } from "react-router-dom";

//? Images
import logo from "../assets/images/logo.svg";

//? React Icons
import { AiOutlineSearch } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";

//? Translation
import { useTranslation } from "react-i18next";

//? Axios
import axios from "axios";

const MobileMenu = ({ open, setOpen }) => {
  //? Translation
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  //? Local states
  const [value, setValue] = useState("");
  const [searchEvents, setSearchEvents] = useState([]);

  const inputValue = function (e) {
    setValue(e.target.value);
  };

  let innWidth = window.innerWidth > 1255;

  //? Router
  const path = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [path.pathname, setOpen, innWidth]);

  //? Filter data
  useEffect(() => {
    const filterData = async () => {
      await axios
        .get(process.env.REACT_APP_ALL_EVENTS)
        .then((res) => {
          setSearchEvents(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    filterData();
  }, []);

  //? Event search
  const resultSearch = searchEvents.filter((item) =>
    item.eventTitle.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <div className={`mobileMenu ${open && "active"}`}>
      <div className="overlay" onClick={() => setOpen(false)}></div>
      <div className="row">
        <button className="close" onClick={() => setOpen(false)}>
          <VscChromeClose className="icoClose" />
        </button>
        <div className="menu">
          <div className="menuHeader">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="lng">
              <button
                className="btn"
                onClick={() => {
                  i18n.changeLanguage("en");
                  window.location.reload();
                }}
              >
                EN
              </button>
              <button
                className="btn"
                onClick={() => {
                  i18n.changeLanguage("az");
                  window.location.reload();
                }}
              >
                AZ
              </button>
            </div>
          </div>
          <div className="menuSearch">
            <input
              type="text"
              className="menuhInp"
              placeholder="Axtar"
              value={value}
              onChange={inputValue}
            />
            <AiOutlineSearch className="menuInpIcon" />
            {value === "" ? undefined : (
              <ul className="searchList">
                {resultSearch.map((searchItem) =>
                  value === "" ? undefined : (
                    <Link
                      to={`/card-details/${searchItem.id}`}
                      className="searchCard"
                      onClick={() => {
                        path.push(`/card-details/${searchItem.id}`);
                        window.location.reload();
                      }}
                    >
                      <li className="searchItem" key={searchItem.id}>
                        {" "}
                        {searchItem.eventTitle}
                      </li>
                    </Link>
                  )
                )}
              </ul>
            )}
          </div>
          <nav className="navBarz">
            <ul className="navList">
              <li className="navItem">
                <NavLink to="/all-events">{t("all_events")}</NavLink>
              </li>
              <li className="navItem">
                <NavLink to="/error-concert">{t("concert")}</NavLink>
              </li>
              <li className="navItem">
                <NavLink to="/error-theatre">{t("theatre")}</NavLink>
              </li>
              <li className="navItem">
                <NavLink to="/error-kids">{t("kids")}</NavLink>
              </li>
              <li className="navItem">
                <NavLink to="/error-hayalkahvesi">{t("hayal_kahvesi")}</NavLink>
              </li>
              <li className="navItem">
                <NavLink to="/error-sport">{t("sport")}</NavLink>
              </li>
              <li className="navItem">
                <NavLink to="/error-bakujazzfest">{t("baku_jazz_fest")}</NavLink>
              </li>
              <li className="navItem">
                <NavLink to="/error-museum">{t("museum")}</NavLink>
              </li>
              <li className="navItem">
                <NavLink to="/error-tourism">{t("tourism")}</NavLink>
              </li>
              <li className="navItem">
                <NavLink to="/error-seminar">{t("seminar")}</NavLink>
              </li>
              <li className="navItem">
                <NavLink to="/error-master-class">{t("master_class")}</NavLink>
              </li>
              <li className="navItem">
                <NavLink to="/error-other">{t("other")}</NavLink>
              </li>
              <li className="navItem">
                <NavLink to="/error-products">{t("products")}</NavLink>
              </li>
              <li className="navItem">
                <NavLink to="/error-vr">{t("vr")}</NavLink>
              </li>
            </ul>
          </nav>
          <div className="menuFooter">
            <Link to="/"> Biletlərin Satış Məntəqələri</Link>
            <Link to="/">Əlaqə</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
