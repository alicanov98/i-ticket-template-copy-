import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Card } from "./Card";

// axios
import axios from "axios";


export const SwiperPerformances = () => {
    const [event, setEvents] = useState([]);
    console.log(event);
    useEffect(() => {
      eventData();
    }, []);
  
    const eventData = async () => {
      await axios
        .get(process.env.REACT_APP_ALL_EVENTS)
        .then((res) => {
          setEvents(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  return (
    <div className="cardBox">
    <Swiper
      slidesPerView={3.5}
      centeredSlides={true}
      initialSlide={2}
      spaceBetween={40}
      //   loop={true}
      pagination={{
        clickable: true,
      }}
      className="mySwiper "
    >
      {event.map((item) => (
        <SwiperSlide key={item.id} className="slideCard">
          <Card
            key={item.id}
            image={`http://localhost:7000/${item.cardImg}`}
            price={item.minimumPrice}
            name={item.eventTitle}
            date={item.eventDate}
            location={item.eventLocation}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  )
}
