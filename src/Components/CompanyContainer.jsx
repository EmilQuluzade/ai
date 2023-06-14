import React, { useRef, useState } from "react";
import './CompanyContainer.css';
import logos from './Company.json';
import Company from './Company.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';   
import "swiper/css/navigation";
import {Autoplay} from "swiper";

const CompanyContainer = () => {
  return (
    <div className="comcon">
      <Swiper
        breakpoints={{
          960: {
            slidesPerView: 4,
            spaceBetween: 8
          },
          720: {
            slidesPerView: 3,
            spaceBetween: 6
          },
          540: {
            slidesPerView: 2,
            spaceBetween: 4
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 2
          },
        }}
        
        autoplay={{
          
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {logos.map((picture) => (
          <SwiperSlide key={picture.id}>
            <Company logos={picture.pic} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CompanyContainer;
