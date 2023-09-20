import { useEffect, useState } from "react";

//? Icons
import { AiOutlineSearch } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";

//? axsison
import axios from "axios";

//? i18n
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";



export const Search = ({ setOpen, open }) => {
  const [value, setValue] = useState("");
  const [searchEvents, setSearchEvents] = useState([]);
  const { t } = useTranslation();
  const inputValue = function (e) {
    setValue(e.target.value);
  };
  useEffect(() => {
    const allDAta = async () => {
      await axios
        .get(process.env.REACT_APP_ALL_EVENTS)
        .then((res) => {
          setSearchEvents(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    allDAta();
  }, []);

  const resultSearch = searchEvents.filter((item) =>
    item.eventTitle.toLowerCase().includes(value.toLowerCase())
  );

  const path = useLocation();

  return (
    <div className={`search ${open && "active"}`}>
      <div className="overlay" onClick={() => setOpen(false)}></div>
      <div className="formSearch">
        <AiOutlineSearch className="iconSerach" />
        <input
          type="text"
          className="searchInp"
          placeholder="Axtar"
          value={value}
          onChange={inputValue}
        />
        <button className="close" onClick={() => setOpen(false)}>
          <VscChromeClose className="icoClose" />
        </button>
        <ul className="searchList">
          
             {value===""? undefined :  resultSearch.map((searchItem) => (
           value===""? undefined :  <Link to={`/card-details/${searchItem.id}`} className="searchCard" onClick={() => {
              path.push(`/card-details/${searchItem.id}`);
              window.location.reload();
            }}>
              <li className="searchItem" key={searchItem.id}>
                <div className="cartTicketImg">
                  <img
                    src={`http://localhost:7000/${searchItem.cardImg}`}
                    alt="img"
                  />
                </div>
                <div className="cartTicketData">
                  <span className="cartTicketStartDate">
                    LTM / {searchItem.eventDates} - {searchItem.startTime}
                  </span>
                  <span className="cartTicketTitle">
                    {searchItem.eventTitle}
                  </span>
                  <span className="cartTicketName">
                    {searchItem.eventLocation}
                  </span>
                </div>
                <div className="cartTicketPrice">
                  <div className="cartPriceTicket">
                    <span className="cartPrice">
                      {t("from")} - {searchItem.minimumPrice} ₼
                    </span>
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};
