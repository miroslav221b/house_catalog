import React from "react";
import style from "./slider.module.scss"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
const Slider = ({images}) => {
    return(
        <Swiper
            modules={[Navigation, Pagination, A11y ]}
            className={style.swiper}
            centeredSlides
            loop
            spaceBetween={0}
            slidesPerView={1}
            navigation
            speed={650}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => {}}
            onSlideChange={() => {}}
      >
        {
            images.map((item)=>{
                return(
                    <SwiperSlide key={item}>
                        <div className={style.slide}>
                            <img src={item}/>
                        </div>
                    </SwiperSlide>
                )
            })
        }
      </Swiper>
    )
}
export default Slider