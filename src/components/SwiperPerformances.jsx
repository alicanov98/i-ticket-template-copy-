//? Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
//? Card
import { Card } from "./Card";


export const SwiperPerformances = ({data}) => {

  return (
    <div className="cardBox">
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
         1255:{
           slidesPerView:3.5,
           spaceBetween:30
         }
       }}
      className="mySwiper "
    >
      {data
      .filter((item)=>item.status==="concert")
      .map((filterItem) => (
        <SwiperSlide key={filterItem.id} className="slideCard">
         <Card data={filterItem} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  )
}
