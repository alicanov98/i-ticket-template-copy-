import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Card } from "./Card";

// axios
import axios from "axios";

export const SwiperTourism = () => {
  const [event, setEvents] = useState([]);
 
  useEffect(() => {
    eventData();
  }, []);

  const eventData = async () => {
    await axios
      .get(process.env.REACT_APP_ALL_EVENTS)
      .then((res) => {
        setEvents(res.data);
  
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="cardBox">
      <Swiper
       centeredSlides={true}
       initialSlide={2}
       pagination={{
         clickable: true,
       }}
       loop={true}
       autoplay={{
         delay: 1500,
         disableOnInteraction: false,
       }}
       breakpoints={{
         560: {
           slidesPerView: 2,
           spaceBetween: 10,
         },
         768: {
           slidesPerView: 3,
           spaceBetween: 20,
         },
         1024: {
           slidesPerView: 3.2,
           spaceBetween: 30,
         },
         1255:{
           slidesPerView:3.5,
           spaceBetween:30
         }
       }}
        className="mySwiper "
      >
        {event
        .filter((item)=>item.status==="turizm")
        .map((filterItem) => (
          <SwiperSlide key={filterItem.id} className="slideCard">
            <Card data={filterItem} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
