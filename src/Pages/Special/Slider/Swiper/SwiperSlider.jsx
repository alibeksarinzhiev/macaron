import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import slider from '../img/special-banner-1 2.png'

const SwiperSlider = () => {
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                 <SwiperSlide><img src={slider} alt='slider'/></SwiperSlide>
                 <SwiperSlide><img src={slider} alt='slider'/></SwiperSlide>
                 <SwiperSlide><img src={slider} alt='slider'/></SwiperSlide>
                 <SwiperSlide><img src={slider} alt='slider'/></SwiperSlide>
        </Swiper>
        
    );
};

export default SwiperSlider;
