import React, { useEffect, useState } from "react";

import { FaAngleDown } from "react-icons/fa";

import { useLocation } from "react-router-dom";

import Slider from "react-slider";

const MIN = 1.0;
const MAX = 500.0;

export const EventsFilter = ({ onSelectFilter,selectedPrice  }) => {

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

  const [selectedOption, setSelectedOption] = useState(""); 
  
  const handleSelectOption = (optionTexts) => {
    setSelectedOption(optionTexts)
    onSelectFilter(optionTexts);
  };

  const handleFilterPrice = (price) => {
    selectedPrice(price); 
  }

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
              <option value="1">Şuşa Dövlət Musiqili Dram Teatrı</option>
              <option value="2">Heydər Əliyev Sarayı</option>
              <option value="3">Akademik Milli Dram Teatrı</option>
              <option value="4">Bakı Konqres Mərkəzi</option>
              <option value="5">
              Elektra Events Hall
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
                    className={`filterItem ${selectedOption === "Şuşa Dövlət Musiqili Dram Teatrı" ? "selected" : ""}`}
                    onClick={() => handleSelectOption("Şuşa Dövlət Musiqili Dram Teatrı")}
                  >
                    Şuşa Dövlət Musiqili Dram Teatrı
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
                    className={`filterItem ${selectedOption === "Bakı Konqres Mərkəzi" ? "selected" : ""}`}
                    onClick={() => handleSelectOption("Bakı Konqres Mərkəzi")}
                  >
                    Bakı Konqres Mərkəzi
                  </li>
                  <li
                    className={`filterItem ${selectedOption === "Elektra Events Hall" ? "selected" : ""}`}
                    onClick={() => handleSelectOption("Elektra Events Hall")}
                  >
                    Elektra Events Hall
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
                onChange={(newValue)=>{setValues(newValue)
                  handleFilterPrice(newValue[0])}}
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
