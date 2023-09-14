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

import cartIcon from "../assets/images/cart.svg";
import { FaEllipsis, FaBars } from "react-icons/fa6";

// Hooks
import { useEffect, useState } from "react";
import { Search } from "./Search";

// import { addToCart } from "../redux/slices/cartSlice";

import { Cart } from "./Cart";
import { useSelector } from "react-redux";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Header = () => {
  const path = useLocation();
  // const dispatch = useDispatch();

  const [user, setUser] = useState(null);

  // DropDown
  const [openDropList, setOpenDrop] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [search, setSearch] = useState(false);
  const [cart, setCart] = useState(false);
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
        if (path.pathname === "/") {
          setHeaderClassName("homeHeader header");
          setLogoSrc(logo2);
        } else if (path.pathname.startsWith("/card-details/")) {
          setHeaderClassName("homeHeader header");
          setLogoSrc(logo2);
        } else {
          setHeaderClassName("header");
          setLogoSrc(logo);
        }
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, [path.pathname]);

  const carts = useSelector((state) => state.cartData.cart);
  const cartCount = carts.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const checkUser = async () => {
      let token = JSON.parse(localStorage.getItem("token"));
      if (token) {
        const body = {
          token,
        };
        await axios
          .post("http://localhost:7000/iticket-api/check-login", body)
          .then((res) => {
            setUser(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    };
    checkUser();
  }, []);

const {i18n} =useTranslation()
const {t}=useTranslation()
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
            <button className="btn" onClick={()=> i18n.changeLanguage("en")}>EN</button>
            <button className="btn" onClick={()=>i18n.changeLanguage("az")}>AZ</button>
          </div>
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
                  <NavLink to="/a">{t("baku_jazz_fest")}</NavLink>
                </li>
                <li className="dropDownItem">
                  <NavLink to="/b">{t("museum")}</NavLink>
                </li>
                <li className="dropDownItem">
                  <NavLink to="/f">{t("tourism")}</NavLink>
                </li>
                <li className="dropDownItem">
                  <NavLink to="/g">{t("seminar")}</NavLink>
                </li>
                <li className="dropDownItem">
                  <NavLink to="/x">{t("master_class")}</NavLink>
                </li>
                <li className="dropDownItem">
                  <NavLink to="/m">{t("other")}</NavLink>
                </li>
                <li className="dropDownItem">
                  <NavLink to="/m">{t("products")}</NavLink>
                </li>
                <li className="dropDownItem">
                  <NavLink to="/m">{t("vr")}</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="userArea">
          <Link to="/favorites" className="favoIcon">
            {" "}
            <IoHeartOutline className="heartIcon" />
          </Link>
          <IoSearch className="searchIcon" onClick={() => setSearch(!search)} />
          <Link className="carts" to={carts.length!==0 ? "/basket" : "#"}>
            <IoCart className="icart" />
            {/* onClick={() => dispatch(addToCart())} */}
            <span className="count">{cartCount}</span>
          </Link>
          {!user && (
            <div
              className="personOut"
              onClick={() => setLoginModal(!loginModal)}
            >
              <IoPersonOutline className="personOutLine" />
            </div>
          )}
        </div>
        <MobileMenu open={mobileMenu} setOpen={setMobileMenu} />
        <LoginModal open={loginModal} setOpen={setLoginModal} />
        <Search open={search} setOpen={setSearch} />
      </div>
      <div className="cartBtnFixed">
        <button
          className="cartBtn"
          onClick={() => {
            if (carts.length === 0) {
              setCart(false);
            } else {
              setCart(true);
            }
          }}
        >
          <span className="cartBtnCount">{cartCount}</span>
          <img className="cartIcon" src={cartIcon} alt="icon" />
        </button>
      </div>
      <Cart open={cart} setOpen={setCart} />
    </header>
  );
};

export default Header;
