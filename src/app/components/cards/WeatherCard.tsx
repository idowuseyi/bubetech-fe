import Image from 'next/image'
import React from 'react'
import sun from "@/assets/Sun.png"

export default function WeatherCard() {
    return (
        <div className='p-4 md:p-0 block md:hidden'>
            <div className='flex  text-white weatherCard-gradient p-4 justify-between rounded-md'>
                <div className='flex flex-col gap-2'>
                    <h4>Nigeria</h4>
                    <h2>Sokoto</h2>
                    <p className='mt-2'>Mostly sunny</p>
                </div>
                <div className='flex flex-col items-end justify-between'>
                    <Image
                        src={sun}
                        alt=""
                        className="w-14 h-14 object-cover"
                    />
                    <p>6C</p>
                </div>
            </div>
        </div>
    )
}
