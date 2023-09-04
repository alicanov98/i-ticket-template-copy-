import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Card } from "./Card";

// axios
import axios from "axios";

export const SwiperChildrean = () => {
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
            <Card data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
