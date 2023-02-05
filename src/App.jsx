// Import Swiper React components
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import leaf from "../src/images/leaf.jpg";
import clouds from "../src/images/clouds.jpg";
import mountains from "../src/images/mountains.jpg";
import sunset from "../src/images/sunset.jpg";

// Import Swiper styles
import "swiper/css";
import "./App.css";

function App() {
  return (
    <Swiper spaceBetween={10} slidesPerView={1}>
      <SwiperSlide>
        <img src={leaf} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={sunset} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={mountains} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={clouds} alt="" />
      </SwiperSlide>
    </Swiper>
  );
}

export default App;
