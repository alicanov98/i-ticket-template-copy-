import React from "react";

// I18n
import { useTranslation } from "react-i18next";


import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg"
import pay from "../assets/images/cards.svg"
import {
  FaFacebookF,
  FaTiktok,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {

const {t}=useTranslation()

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footerCard">
            <Link className="footerLogo" to="/">
              <img src={logo} alt="" />
            </Link>
            <div className="footerCardCont">
              <p>{t("support_service")}</p>
              <Link className="tel" to="tel:+994 12 424 24 24">
                +994 12 424 24 24
              </Link>
            </div>
          </div>
          <div className="footerCard">
            <h3 className="footerCardTitle">{t("information")}</h3>
            <ul className="infoList">
              <li className="infoItem">
                <Link to="/">{t("faq")}</Link>
              </li>
              <li className="infoItem">
                <Link to="/">{t("support")}</Link>
              </li>
              <li className="infoItem">
                <Link to="/">{t("terms_conditions")}</Link>
              </li>
              <li className="infoItem">
                <Link to="/">{t("e_ticket")}</Link>
              </li>
              <li className="infoItem">
                <Link to="/">{t("refund_or_change")}</Link>
              </li>
              <li className="infoItem">
                <Link to="/">{t("pirvaciy_policy")}</Link>
              </li>
            </ul>
          </div>
          <div className="footerCard">
            <h3 className="footerCardTitle">iTicket</h3>
            <ul className="infoList">
              <li className="infoItem">
                <Link to="/">{t("about_us")}</Link>
              </li>
              <li className="infoItem">
                <Link to="/">{t("venues")}</Link>
              </li>
              <li className="infoItem">
                <Link to="/">{t("point_sales")}</Link>
              </li>
              <li className="infoItem">
                <Link to="/">{t("karabagh")}</Link>
              </li>
              <li className="infoItem">
                <Link to="/">{t("contacts")}</Link>
              </li>
            </ul>
          </div>
          <div className="footerCard">
            <h3 className="footerCardTitle">{t("security")}</h3>
            <p className="footerText">
              {t("protected")}
            </p>
            <img src={pay} alt="" />
          </div>
        </div>
        <div className="footerBottom">
          <div className="row">
            <p className="copyRight">
               {t("trademark")}
            </p>
            <ul className="socialList">
              <li className="socialItem">
                <Link className="social" to="/">
                  <FaFacebookF className="icon" />
                </Link>
              </li>
              <li className="socialItem">
                <Link className="social" to="/">
                  <AiFillInstagram className="icon" />
                </Link>
              </li>
              <li className="socialItem">
                <Link className="social" to="/">
                  <FaTiktok className="icon" />
                </Link>
              </li>
              <li className="socialItem">
                <Link className="social" to="/">
                  <FaTwitter className="icon" />
                </Link>
              </li>
              <li className="socialItem">
                <Link className="social" to="/">
                  <FaLinkedinIn className="icon" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
