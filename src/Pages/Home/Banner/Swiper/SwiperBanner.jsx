import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import banner from '../image/banner-img.png'

const SwiperBanner = () => {
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src={banner} alt='banner'/></SwiperSlide>
        <SwiperSlide><img src={banner} alt='banner'/></SwiperSlide>
        <SwiperSlide><img src={banner} alt='banner'/></SwiperSlide>
        <SwiperSlide><img src={banner} alt='banner'/></SwiperSlide>
      
      
      </Swiper>
    );
};

export default SwiperBanner;