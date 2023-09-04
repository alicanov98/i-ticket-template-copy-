import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Card } from "./Card";

// axios
import axios from "axios";

export const SwiperPopular = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    swiperPopular();
  }, []);

  const swiperPopular = async () => {
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
        slidesPerView={3.2}
        centeredSlides={true}
        initialSlide={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {events.map((item) => (
          <SwiperSlide key={item.id} className="swiperSlide">
            <Card data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
