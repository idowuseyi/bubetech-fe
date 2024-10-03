import React from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import Image from 'next/image';
import slider_one from "@/assets/splash-img-1.png";
import slider_two from "@/assets/splash-img-2.png";
import slider_three from "@/assets/splash-img-3.png";
import '@splidejs/react-splide/css/core';

const Slider = () => {
    const options = {
        type: 'loop',
        perPage: 1,
        gap: '1rem',
        autoplay: true,
        pauseOnHover: false,
        resetProgress: false,
        // height: '50%', // You can adjust height as necessary
        width: '100%',   // Added width for proper horizontal layout
    };

    return (
        <div className='mt-8'>
            <Splide
                options={options}
                aria-labelledby="autoplay-example-heading"
                hasTrack={false}
            >
                <div style={{ position: 'relative' }}>
                    <SplideTrack>
                        <SplideSlide>
                            <Image src={slider_one} alt="img" style={{ width: '100%', height: '300px' }} />
                        </SplideSlide>
                        <SplideSlide>
                            <Image src={slider_two} alt="img" style={{ width: '100%', height: '300px' }} />
                        </SplideSlide>
                        <SplideSlide>
                            <Image src={slider_three} alt="img" style={{ width: '100%', height: '300px' }} />
                        </SplideSlide>
                    </SplideTrack>
                </div>

                {/* <div className="splide__progress">
                    <div className="splide__progress__bar" />
                </div> */}

                {/* <button className="splide__toggle">
                    <span className="splide__toggle__play">Play</span>
                    <span className="splide__toggle__pause">Pause</span>
                </button> */}
            </Splide>
        </div>
    );
};

export default Slider;
