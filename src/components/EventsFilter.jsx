import { useEffect, useState } from "react";

//? React Icons
import { FaAngleDown } from "react-icons/fa";

//? Router
import { useLocation } from "react-router-dom";

//? React slider
import Slider from "react-slider";

//? ------------------
export const EventsFilter = ({ onSelectFilter, selectedPrice, text }) => {
  //? Router
  const path = useLocation();

  //? Price filter min & max
  const MIN = 1.0;
  const MAX = 500.0;
  const [values, setValues] = useState({ initialState: [MIN, MAX] });

  //? Local states
  const [openDropList, setOpenDropList] = useState(false);
  const closeDropdown = () => {
    setOpenDropList(false);
  };

  useEffect(() => {
    closeDropdown();
  }, [path.pathname]);

  //? Price filter
  const handleFilterPrice = (price) => {
    selectedPrice(price);
  };

  return (
    <section className="events-filter">
      <div className="eventsFilter">
        <div className="row">
          <div className="filter">
            <div
              className="controlFilterInp"
              onClick={() => setOpenDropList(!openDropList)}
            >
              <div className="filterControl">
                <input type="select-one" placeholder="Məkan seçin" disabled />
                <FaAngleDown className="downIcon" />
              </div>
              <div
                className={
                  openDropList ? "filterDropdown active" : "filterDropdown"
                }
              >
                <ul className="filterList">
                  {Array.isArray(text)
                    ? text.map((item) => (
                        <li
                          className="filterItem"
                          onClick={() => onSelectFilter(item)}
                        >
                          {item}
                        </li>
                      ))
                    : undefined}
                </ul>
              </div>
            </div>
          </div>
          <div className="filter">
            <input
              type="text"
              className="dateInp"
              placeholder="Tarix aralığını seçin"
              readOnly
            />
          </div>
          <div className="filter">
            <div className={"priceRangeView"}>
              Qiymət {values[0]}.00 ₼-dan {values[1]}.00 ₼-dək
              <Slider
                className="slider"
                onChange={(newValue) => {
                  setValues(newValue);
                  handleFilterPrice(newValue[0]);
                }}
                thumbClassName="example-thumb"
                trackClassName="example-track"
                defaultValue={[1, 500]}
                priceRangeView={values}
                min={MIN}
                max={MAX}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
