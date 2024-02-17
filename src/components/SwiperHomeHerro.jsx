//? Router
import { Link } from "react-router-dom";

//? Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

//? Redux
import { useSelector } from "react-redux";

export const SwiperHomeHerro = ({ data }) => {
  //? Redux
  const loading = useSelector((state) => state.events.loading);

  return (
    <div className="swiperHome">
      {loading && <div>LOADING...</div>}
      <div className="swiper-container">
        <Swiper
          spaceBetween={30}
          navigation={true}
          modules={[Pagination, Navigation]}
          loop={true}
          autoplay={true}
          className="mySwiper swiperList"
        >
          {data.map(
            (item) =>
              item.sliderImg !== null && (
                <SwiperSlide className="swiperItem" key={item.id}>
                  <Link to={`/card-details/${item.id}`}>
                    <img
                      src={`${item?.sliderImg}`}
                      alt={item.name}
                    />
                  </Link>
                </SwiperSlide>
              )
          )}
        </Swiper>
      </div>
    </div>
  );
};
