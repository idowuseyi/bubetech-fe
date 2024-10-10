import React from 'react';
import Image from 'next/image';
import slider_one from "@/assets/splash-img-1.png";
import slider_two from "@/assets/splash-img-2.png";
import slider_three from "@/assets/splash-img-3.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Slider = () => {
    return (
        <div className='mt-8 w-[530px] relative'>
            <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                autoplay={{ delay: 1000 }}
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <Image src={slider_one} alt="Slide 1" className='w-full max-w-[545px] max-h-[300px]' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={slider_two} alt="Slide 2" className='w-full max-w-[545px] max-h-[300px]' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={slider_three} alt="Slide 3" className='w-full max-w-[545px] max-h-[300px]' />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
