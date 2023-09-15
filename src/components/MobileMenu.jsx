// Router
import { Link, NavLink, useLocation } from "react-router-dom";

// img
import logo from "../assets/images/logo.svg";
// Icons
import { AiOutlineSearch } from "react-icons/ai";
import {VscChromeClose} from "react-icons/vsc"

import { useEffect } from "react";

// i18n
import { useTranslation } from "react-i18next";


const MobileMenu = ({ open, setOpen }) => {

  const path=useLocation()
  useEffect(()=>{
   setOpen(false)
  },[path.pathname,setOpen])


  const {i18n} =useTranslation()
const {t}=useTranslation()
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
              <button className="btn" onClick={()=>{
                i18n.changeLanguage("en");
                window.location.reload();
              }}>EN</button>
              <button className="btn" onClick={()=>{
                i18n.changeLanguage("az");
                window.location.reload();
              }}>AZ</button>
            </div>
          </div>
          <div className="menuSearch">
            <input type="text" className="menuhInp" placeholder="Axtar" />
            <AiOutlineSearch className="menuInpIcon" />
          </div>
            <nav className="navBarz">
              <ul className="navList">
              <li className="navItem">
              <NavLink to="/all-events">{t("all_events")}</NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/c">{t("concert")}</NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/t">{t("theatre")}</NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/u">{t("kids")}</NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/h">{t("hayal_kahvesi")}</NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/sport">{t("sport")}</NavLink>
            </li>
            <li className="navItem">
                  <NavLink to="/a">{t("baku_jazz_fest")}</NavLink>
                </li>
                <li className="navItem">
                  <NavLink to="/b">{t("museum")}</NavLink>
                </li>
                <li className="navItem">
                  <NavLink to="/f">{t("tourism")}</NavLink>
                </li>
                <li className="navItem">
                  <NavLink to="/g">{t("seminar")}</NavLink>
                </li>
                <li className="navItem">
                  <NavLink to="/x">{t("master_class")}</NavLink>
                </li>
                <li className="navItem">
                  <NavLink to="/m">{t("other")}</NavLink>
                </li>
                <li className="navItem">
                  <NavLink to="/m">{t("products")}</NavLink>
                </li>
                <li className="navItem">
                  <NavLink to="/m">{t("vr")}</NavLink>
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
