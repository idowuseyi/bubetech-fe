import React from 'react'
import Image from 'next/image'
import seedHarvest from "@/assets/resources/harvest-seed.png";
import { CiHeart } from "react-icons/ci";
import Link from 'next/link';


export default function ResourceCard() {
    return (
        <div className='flex gap-4'>
            <div className='w-[95px] h-[82px] rounded-lg'>
                <Image src={seedHarvest} alt="image" className="w-full h-full object-center object-cover" />
            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex justify-center'>
                    <Link href={`/resources/${1}`}>
                        <h2 className='font-medium text-sm md:text-base text-[#323232]'>The Journey from Seed to Harvest</h2>

                    </Link>
                    <div className='font-normal text-sm min-w-24 text-[#A1A1A1]'>Aug 4, 2024</div>
                </div>
                <div className="flex items-center justify-between md:mb-2">
                    <div className='flex gap-1 items-center font-normal text-sm text-[#A1A1A1] leading-[21px]'>
                        <p>Mary-Jane Elvis</p><p className='w-[6px] h-[6px] rounded-full bg-[#737373]'></p> <p>10min read</p>
                    </div>
                    <div className='rounded-full flex items-center justify-center w-5 h-5 lg:w-9 lg:h-9 bg-white'>
                        <CiHeart className='w-3 h-3 text-[#6FA521] lg:w-5 lg:h-5' />
                    </div>
                </div>
            </div>

        </div>
    )
}
