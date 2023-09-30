/* eslint-disable array-callback-return */

// Router
import { Link } from "react-router-dom";


// import swiper 
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

//? Redux toolkit
import { useSelector } from "react-redux";

export const SwiperHomeHerro = ({data}) => {
  
const loading=useSelector(state=>state.events.loading)

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
          {data.map((item) => {
            if(item.sliderImg!==null){
              return (
                <SwiperSlide className="swiperItem" key={item.id}>
                <Link to={`/card-details/${item.id}`}>
                <img src={`http://localhost:7000/${ item?.sliderImg}`} alt={item.name} />
                </Link>
              </SwiperSlide>
              )
            }
          }
          )}
        </Swiper>
      </div>
    </div>
  );
};
