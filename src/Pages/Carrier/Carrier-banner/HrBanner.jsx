import React from 'react';
import './HrBanner.scss'
import { Navigation } from 'swiper/modules';
import banner from '../imgs/hr-banner.png'
import { Swiper, SwiperSlide } from 'swiper/react';


const HrBanner = () => {
    return (
        <section className='c-banner'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><img src={banner} alt='banner'/></SwiperSlide>
                <SwiperSlide><img src={banner} alt='banner'/></SwiperSlide>
                <SwiperSlide><img src={banner} alt='banner'/></SwiperSlide>
                <SwiperSlide><img src={banner} alt='banner'/></SwiperSlide>
            </Swiper>
        </section>
    );
};

export default HrBanner;