// Router
import { NavLink, Link, useLocation } from "react-router-dom";

// Images
import logo from "../assets/images/logo.svg";
import logo2 from "../assets/images/logo-dark.svg";

// Components
import MobileMenu from "../components/MobileMenu";
import LoginModal from "../components/LoginModal";




// Icons
import {
  IoHeartOutline,
  IoSearch,
  IoCart,
  IoPersonOutline,
} from "react-icons/io5";

import { FaEllipsis, FaBars } from "react-icons/fa6";

// Hooks
import { useEffect, useState } from "react";
import { Search } from "./Search";

const Header = () => {
  const path = useLocation();


  // DropDown
  const [openDropList, setOpenDrop] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [search, setSearch] = useState(false);

  const openDropdown = () => {
    setOpenDrop((openDropList) => !openDropList);
  };

  let checkDropdown = openDropList ? "dropDown" : "active";
  const closeDropdown = () => {
    setOpenDrop(false);
  };

  useEffect(() => {
    closeDropdown();
  }, [path.pathname]);

  // Responsive Header Change

  const [headerClassName, setHeaderClassName] = useState("header");
  const [logoSrc, setLogoSrc] = useState(logo);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1255) {
        setHeaderClassName("header");
        setLogoSrc(logo);
      } else {
        setHeaderClassName(
          path.pathname === "/" ? "homeHeader header" : "header"
        );
        setLogoSrc(path.pathname === "/" ? logo2 : logo);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, [path.pathname]);


  return (
    <header className={headerClassName}>
      <div className="row">
        <div className="bars" onClick={() => setMobileMenu(!mobileMenu)}>
          <FaBars className="bar" />
        </div>
        <div className="logo">
          <Link to="/">
            <img src={logoSrc} alt="logo" />
          </Link>
        </div>
        <nav className="navBar">
          <div className="lng">
            <button className="btn">EN</button>
            <button className="btn">RU</button>
          </div>
          <ul className="navList">
            <li className="navItem">
              <NavLink to="/all-events">Bütün tədbirlər</NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/c">Konsert</NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/t">Tamaşa</NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/u">Uşaqlar</NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/h">Hayal Kahvesi</NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/sport">İdman</NavLink>
            </li>
            <li className={checkDropdown}>
              <FaEllipsis onClick={openDropdown} className="dod" />
              <ul className="dropDownList">
                <li className="dropDownItem">
                  <NavLink to="/a"> Hayal Kahvesi</NavLink>
                </li>
                <li className="dropDownItem">
                  <NavLink to="/a"> İdman</NavLink>
                </li>
                <li className="dropDownItem">
                  <NavLink to="/a"> Baku Jazz Fest '23</NavLink>
                </li>
                <li className="dropDownItem">
                  <NavLink to="/b">Muzey</NavLink>
                </li>
                <li className="dropDownItem">
                  <NavLink to="/f">Turizm</NavLink>
                </li>
                <li className="dropDownItem">
                  <NavLink to="/g">Seminar</NavLink>
                </li>
                <li className="dropDownItem">
                  <NavLink to="/x">Master Klass</NavLink>
                </li>
                <li className="dropDownItem">
                  <NavLink to="/m">Digər</NavLink>
                </li>
                <li className="dropDownItem">
                  <NavLink to="/m">Məhsullar</NavLink>
                </li>
                <li className="dropDownItem">
                  <NavLink to="/m">360°/VR</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="userArea">
          <IoHeartOutline className="heartIcon" />
          <IoSearch className="searchIcon" onClick={() => setSearch(!search)} />
          <div className="cart">
            <IoCart className="icart" />
            <span className="count">0</span>
          </div>
          <div className="personOut" onClick={() => setLoginModal(!loginModal)}>
            <IoPersonOutline className="personOutLine" />
          </div>
        </div>
        <MobileMenu open={mobileMenu} setOpen={setMobileMenu} />
        <LoginModal open={loginModal} setOpen={setLoginModal} />
        <Search open={search} setOpen={setSearch} />
      </div>
    </header>
  );
};

export default Header;
