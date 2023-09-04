import React, { useEffect, useState } from "react";

// Router
import { useNavigate } from "react-router-dom";
import axios from "axios";

// import swiper 
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export const SwiperHomeHerro = () => {
  const [eventImg, setEventImg] = useState([]);
const navigate=useNavigate()
const [loading,setLoading]=useState(false)

  useEffect(() => {
    const getSlide = async () => {
      setLoading(true)
      await axios
        .get(process.env.REACT_APP_ALL_SLIDES)
        .then((res) => {
          setEventImg(res.data);
          
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



  return (
    <div className="swiperHome">
      {loading && <div>LOADING</div>}
      <div className="swiper-container">
        <Swiper
          spaceBetween={30}
          navigation={true}
          modules={[Pagination, Navigation]}
          loop={true}
          autoplay={true}
          className="mySwiper swiperList"
        >
          {eventImg.map((item) =>(
            <SwiperSlide className="swiperItem" key={item.id}>
              <img src={`http://localhost:7000/${ item.slideImg}`} alt={item.name} />
            </SwiperSlide>
          )
          )}
        </Swiper>
      </div>
    </div>
  );
};
