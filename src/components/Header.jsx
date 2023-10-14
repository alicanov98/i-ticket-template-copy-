import { useEffect, useState } from "react";

//? Router
import { NavLink, Link, useLocation } from "react-router-dom";

//? Images
import logo from "../assets/images/logo.svg";
import logo2 from "../assets/images/logo-dark.svg";
import cartIcon from "../assets/images/cart.svg";

//? Components
import MobileMenu from "./MobileMenu";
import LoginModal from "./LoginModal";
import { Cart } from "./Cart";
import { Search } from "./Search";

//? React Icons
import {
  IoHeartOutline,
  IoSearch,
  IoCart,
  IoPersonOutline,
} from "react-icons/io5";
import { FaEllipsis, FaBars } from "react-icons/fa6";
import { BiLogOutCircle } from "react-icons/bi";

//? Redux
import { useSelector } from "react-redux";

//? Axios
import axios from "axios";

//? Translation
import { useTranslation } from "react-i18next";

const Header = () => {
  //? Translation
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  //? Redux
  const carts = useSelector((state) => state.cartData.cart);
  const cartCount = carts.reduce((total, item) => total + item.quantity, 0);

  //? Router
  const path = useLocation();

  //? Local states
  const [user, setUser] = useState(null);
  const [openDropList, setOpenDrop] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [search, setSearch] = useState(false);
  const [cart, setCart] = useState(false);

  //? Responsive Header Change
  const [headerClassName, setHeaderClassName] = useState("header");
  const [logoSrc, setLogoSrc] = useState(logo);

  const openDropdown = () => {
    setOpenDrop((openDropList) => !openDropList);
  };

  const closeDropdown = () => {
    setOpenDrop(false);
  };

  useEffect(() => {
    closeDropdown();
  }, [path.pathname]);

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

  //? Login
  useEffect(() => {
    const checkUser = async () => {
      let token = JSON.parse(localStorage.getItem("token"));
      if (token) {
        const body = {
          token,
        };
        await axios
          .post(process.env.REACT_APP_CHECK_LOGIN, body)
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

  //? Logout
  const logOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
    setTimeout(() => {
      setUser(null);
    }, 1000);
  };

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
            <li className={openDropList ? "dropDown" : "active"}>
              <FaEllipsis onClick={openDropdown} className="dod" />
              <ul className="dropDownList">
                <li className="dropDownItem">
                  <NavLink to="/error-hayalkahvesi"> Hayal Kahvesi</NavLink>
                </li>
                <li className="dropDownItem">
                  <NavLink to="/error-sport">{t("sport")}</NavLink>
                </li>
                <li className="dropDownItem">
                  <NavLink to="/error-bakujazzfest">{t("baku_jazz_fest")}</NavLink>
                </li>
                <li className="dropDownItem">
                  <NavLink to="/error-museum">{t("museum")}</NavLink>
                </li>
                <li className="dropDownItem">
                  <NavLink to="/error-tourism">{t("tourism")}</NavLink>
                </li>
                <li className="dropDownItem">
                  <NavLink to="/error-seminar">{t("seminar")}</NavLink>
                </li>
                <li className="dropDownItem">
                  <NavLink to="/error-masterclass">{t("master_class")}</NavLink>
                </li>
                <li className="dropDownItem">
                  <NavLink to="/error-other">{t("other")}</NavLink>
                </li>
                <li className="dropDownItem">
                  <NavLink to="/error=products">{t("products")}</NavLink>
                </li>
                <li className="dropDownItem">
                  <NavLink to="/error-vr">{t("vr")}</NavLink>
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
          <Link className="carts" to={carts.length !== 0 ? "/basket" : "#"}>
            <IoCart className="icart" />
            <span className="count">{cartCount}</span>
          </Link>
          {!user ? (
            <div
              className="personOut"
              onClick={() => setLoginModal(!loginModal)}
            >
              <IoPersonOutline className="personOutLine" />
            </div>
          ) : (
            <span onClick={logOut} className="logOut">
              <BiLogOutCircle className="logOutIcon" />
            </span>
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
