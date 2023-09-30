//? Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//? Import Swiper styles
import "swiper/css";


import { Card } from "./Card";

export const SwiperPopular = ({data}) => {
  return (
    <Swiper
      centeredSlides={true}
      initialSlide={2}
      pagination={{
        clickable: true,
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
        1255: {
          slidesPerView: 3.5,
          spaceBetween: 30,
        },
      }}
      className="mySwiper"
    >
      {data
        .filter((item) => item.status === "popular")
        .map((filteredItem) => (
          <SwiperSlide key={filteredItem.id} className="swiperSlide">
            <Card data={filteredItem} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};
