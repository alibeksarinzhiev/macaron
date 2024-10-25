import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import banner from '../Images/home-banner-1 1 (1).svg'
import './SwiperBanner.scss'

const SwiperBanner = () => {
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src={banner} alt='banner'/></SwiperSlide>
        <SwiperSlide><img src={banner} alt='banner'/></SwiperSlide>
        <SwiperSlide><img src={banner} alt='banner'/></SwiperSlide>
        
        </Swiper>
    );
};

export default SwiperBanner;