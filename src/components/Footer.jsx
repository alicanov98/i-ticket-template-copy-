import React from "react";
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
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footerCard">
            <Link className="footerLogo" to="/">
              <img src={logo} alt="" />
            </Link>
            <div className="footerCardCont">
              <p>Dəstək xidməti</p>
              <Link className="tel" to="tel:+994 12 424 24 24">
                +994 12 424 24 24
              </Link>
            </div>
          </div>
          <div className="footerCard">
            <h3 className="footerCardTitle">Məlumat</h3>
            <ul className="infoList">
              <li className="infoItem">
                <Link to="/">Ən çox verilən suallar</Link>
              </li>
              <li className="infoItem">
                <Link to="/">Dəstək</Link>
              </li>
              <li className="infoItem">
                <Link to="/">Şərtlər və Qaydalar</Link>
              </li>
              <li className="infoItem">
                <Link to="/">Elektron bilet</Link>
              </li>
              <li className="infoItem">
                <Link to="/">Biletin qaytarılması və dəyişdirilməsi</Link>
              </li>
              <li className="infoItem">
                <Link to="/">Məxfilik</Link>
              </li>
            </ul>
          </div>
          <div className="footerCard">
            <h3 className="footerCardTitle">iTicket</h3>
            <ul className="infoList">
              <li className="infoItem">
                <Link to="/">Haqqımızda</Link>
              </li>
              <li className="infoItem">
                <Link to="/">Məkanlar</Link>
              </li>
              <li className="infoItem">
                <Link to="/">Biletlərin Satış Məntəqələri</Link>
              </li>
              <li className="infoItem">
                <Link to="/">Qarabağ Dirçəliş Fondu</Link>
              </li>
              <li className="infoItem">
                <Link to="/">Əlaqə</Link>
              </li>
            </ul>
          </div>
          <div className="footerCard">
            <h3 className="footerCardTitle">Təhlükəsizlik</h3>
            <p className="footerText">
              Bütün ödənişlər Visa, Visa Electron, Maestro və MasterCard-dan 3D
              Secure ilə qorunur.
            </p>
            <img src={pay} alt="" />
          </div>
        </div>
        <div className="footerBottom">
          <div className="row">
            <p className="copyRight">
              ITICKET®, «İTİCKET» MMC-nin qeydə alınmış əmtəə nişanıdır.
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
