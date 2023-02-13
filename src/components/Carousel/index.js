'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductItem from '../Product-item';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore, { Pagination } from 'swiper';

const Carousel = ({ ImgSliderData }) => {
  SwiperCore.use([Pagination]);
  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={4}
        pagination={{
          clickable: true,
        }}
      >
        {ImgSliderData.map((item) => (
          <SwiperSlide key={item.id}>
            <ProductItem id={item.id} image={item.src} title={item.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
