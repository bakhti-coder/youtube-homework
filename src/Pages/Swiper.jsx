import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Swiper.css";

import { GetVideosContext } from "../Context/GetVideosContext";
import { Navigation, Pagination, Autoplay } from "swiper";

const SwiperPage = () => {
  const { videos } = useContext(GetVideosContext);

  console.log(videos);

  return (
    <div
      style={{
        margin: "0 auto",
        width: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "15px",
      }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
          <img src="https://picsum.photos/seed/picsum/400/300" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/seed/picsum/400/300" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/seed/picsum/400/300" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/seed/picsum/400/300" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperPage;
