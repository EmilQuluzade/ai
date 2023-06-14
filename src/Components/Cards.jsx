import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from './Card'
import "swiper/swiper.min.css";
import './Cards.css'
import infos from './Cards.json'
import { Autoplay } from "swiper";
import SwiperCore, { Navigation } from 'swiper';

SwiperCore.use([Autoplay, Navigation]);

const Cards = () => {
  return (
    <>
      <Swiper
        breakpoints={{
            360: {
              slidesPerView: 1,
              spaceBetween: 8
            },
            850: {
              slidesPerView: 2,
              spaceBetween: 8
            },
            1100: {
              slidesPerView: 3,
              spaceBetween: 8
            },
            1500: {
              slidesPerView: 4,
              spaceBetween: 8
            },
            1800: {
              slidesPerView: 5,
              spaceBetween: 8
            },

            
            
          }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        className="mySwiper2"
      >
        <div className="cardsstyle">
          {infos.map((data, index) => (
            <SwiperSlide key={index}>
              <Card
                pic={data.pic}
                heading={data.heading}
                paragraph={data.paragraph}
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
}

export default Cards;
