import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { AiOutlineSearch } from "react-icons/ai";
import {VscChromeClose} from "react-icons/vsc"
import { useEffect } from "react";
const MobileMenu = ({ open, setOpen }) => {
  const path=useLocation()
  useEffect(()=>{
   setOpen(false)
  },[path.pathname,setOpen])
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
              <button className="btn">EN</button>
              <button className="btn">RU</button>
            </div>
          </div>
          <div className="menuSearch">
            <input type="text" className="menuhInp" placeholder="Axtar" />
            <AiOutlineSearch className="menuInpIcon" />
          </div>
            <nav className="navBarz">
              <ul className="navList">
                <li className="navItem">
                  <NavLink to="/allevent">Bütün tədbirlər</NavLink>
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
                  <NavLink to="/a"> Hayal Kahvesi</NavLink>
                </li>
                <li className="navItem">
                  <NavLink to="/a"> İdman</NavLink>
                </li>
                <li className="navItem">
                  <NavLink to="/a"> Baku Jazz Fest '23</NavLink>
                </li>
                <li className="navItem">
                  <NavLink to="/b">Muzey</NavLink>
                </li>
                <li className="navItem">
                  <NavLink to="/f">Turizm</NavLink>
                </li>
                <li className="navItem">
                  <NavLink to="/g">Seminar</NavLink>
                </li>
                <li className="navItem">
                  <NavLink to="/x">Master Klass</NavLink>
                </li>
                <li className="navItem">
                  <NavLink to="/m">Digər</NavLink>
                </li>
                <li className="navItem">
                  <NavLink to="/m">Məhsullar</NavLink>
                </li>
                <li className="navItem">
                  <NavLink to="/m">360°/VR</NavLink>
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
