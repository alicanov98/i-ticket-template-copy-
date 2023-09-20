import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import Slider from "react-slider";

const MIN = 1.0;
const MAX = 500.0;
export const EventsFilter = ({ onSelectFilter }) => {
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

  const [selectedOption, setSelectedOption] = useState(null); 


  const handleSelectOption = (optionText) => {
    setSelectedOption(optionText);
    onSelectFilter(optionText);
  };

  return (
    <section className="events-filter">
      <div className="eventsFilter">
        <div className="row">
          <div className="filter" onClick={openDropdown}>
            <select
              placeholder="Məkan seçin"
              onChange={(e) => {
                onSelectFilter(e.target.value);
                handleSelectOption(e.target.options[e.target.selectedIndex].text);
              }}
            >
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
                <li
                    className={`filterItem ${selectedOption === "Bakı Olimpiya Stadionu" ? "selected" : ""}`}
                    onClick={() => handleSelectOption("Bakı Olimpiya Stadionu")}
                  >
                    Bakı Olimpiya Stadionu
                  </li>
                  <li
                    className={`filterItem ${selectedOption === "Heydər Əliyev Sarayı" ? "selected" : ""}`}
                    onClick={() => handleSelectOption("Heydər Əliyev Sarayı")}
                  >
                    Heydər Əliyev Sarayı
                  </li>
                  <li
                    className={`filterItem ${selectedOption === "Akademik Milli Dram Teatrı" ? "selected" : ""}`}
                    onClick={() => handleSelectOption("Akademik Milli Dram Teatrı")}
                  >
                    Akademik Milli Dram Teatrı
                  </li>
                  <li
                    className={`filterItem ${selectedOption === "Beynəlxalq Muğam Mərkəzi" ? "selected" : ""}`}
                    onClick={() => handleSelectOption("Beynəlxalq Muğam Mərkəzi")}
                  >
                    Beynəlxalq Muğam Mərkəzi
                  </li>
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
