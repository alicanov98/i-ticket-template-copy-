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
        {event.
        filter((item)=>item.status==="usaqlar")
        .map((filterItem) => (
          <SwiperSlide key={filterItem.id} className="slideCard">
            <Card data={filterItem} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
