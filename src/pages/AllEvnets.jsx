import React, { useEffect, useState } from "react";
import { EventsFilter } from "../components/EventsFilter";
import { Card } from "../components/Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AllEvnets = () => {
  const [eventCards, setEventCards] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [originalEventCards, setOriginalEventCards] = useState([]);

  useEffect(() => {
    const getSlide = async () => {
      setLoading(true);
      await axios
        .get(process.env.REACT_APP_ALL_EVENTS)
        .then((res) => {
          const eventData = res.data;
          setEventCards(eventData);
          setOriginalEventCards(eventData); 
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
          navigate("/error");
        });
    };
    getSlide();
  }, [navigate]);

    const handleFilter = (selectedValue) => {
      const filteredCards = originalEventCards.filter((item) => item.eventLocation === selectedValue);
      setEventCards(filteredCards);
    };
const handleFilterPrice=(num)=>{
  const filteredPrice=originalEventCards.filter((item)=>item.minimumPrice===num.toString())
  setEventCards(filteredPrice);
}
  
  return (
    <div className="container">
      <EventsFilter onSelectFilter={(selectedValue) => handleFilter(selectedValue)} selectedPrice={(item) => handleFilterPrice(item)}  />
      {loading && <div>LOADING</div>}
      <div className="cardBox">
       {eventCards.map((item)=>
        <Card data={item} key={item.id}/>
       )}
      
      </div>
    </div>
  );
};

export default AllEvnets;
