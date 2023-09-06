import React, { useEffect, useState } from "react";
import { EventsFilter } from "../components/EventsFilter";
import { Card } from "../components/Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AllEvnets = () => {
  const [eventCards, setEventCards] = useState([]);
  const navigate=useNavigate()
  const [loading,setLoading]=useState(false)
  
    useEffect(() => {
      const getSlide = async () => {
        setLoading(true)
        await axios
          .get(process.env.REACT_APP_ALL_EVENTS)
          .then((res) => {
            setEventCards(res.data);
            setLoading(false)
          })
          .catch((error) => {
            console.log(error);
            setLoading(false)
            navigate("/error")
          });
      };
      getSlide();
    },[navigate]);
    console.log(eventCards)
  return (
    <div className="container">
      <EventsFilter/>
      {loading && <div>LOADING</div>}
      <div className="cardBox">
       {eventCards.map((item)=>
        <Card data={item}/>
       )}
      
      </div>
    </div>
  );
};

export default AllEvnets;
