import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import Slider from "react-slider";

const MIN = 1.0;
const MAX = 14300.0;
export const EventsFilter = () => {
  const path = useLocation();
  const [openDropList, setOpenDrop] = useState(false);
  const [values, setValues] = useState({ initialState: [MIN, MAX] });

  const openDropdown = () => {
    setOpenDrop((openDropList) => !openDropList);
  };

  let checkDropdown = openDropList ? "filterDropdown active" : "filterDropdown";
  const closeDropdown = () => {
    setOpenDrop(false);
  };

  useEffect(() => {
    closeDropdown();
  }, [path.pathname]);

  return (
    <section className="events-filter">
      <div className="eventsFilter">
        <div className="row">
          <div className="filter" onClick={openDropdown}>
            <select name="" id="" placeholder="Məkan seçin">
              <option value="1">Bakı Olimpiya Stadionu</option>
              <option value="2">Heydər Əliyev Sarayı</option>
              <option value="3">Akademik Milli Dram Teatrı</option>
              <option value="4">Beynəlxalq Muğam Mərkəzi</option>
              <option value="5">
                Azərbaycan Dövlət Akademik Filarmoniyası
              </option>
            </select>
            <div className="controlFilterInp">
              <div className="filterControl">
                <input type="select-one" placeholder="Məkan seçin" disabled />
                <FaAngleDown className="downIcon" />
              </div>
              <div className={checkDropdown}>
                <ul className="filterList">
                  <li className="filterItem">Bakı Olimpiya Stadionu</li>
                  <li className="filterItem">Heydər Əliyev Sarayı</li>
                  <li className="filterItem">Akademik Milli Dram Teatrı</li>
                  <li className="filterItem">Beynəlxalq Muğam Mərkəzi</li>
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
                onChange={setValues}
                thumbClassName="example-thumb"
                trackClassName="example-track"
                defaultValue={[1, 14300]}
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
