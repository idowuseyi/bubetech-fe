"use client";
import React from 'react'
import { CaretLeft } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import seedHarvest from "@/assets/resources/seed-2.png";
import avatar from "@/assets/market-place/avatar.jpg"
import { BiLike, BiRepost } from 'react-icons/bi';
import { LuDot } from 'react-icons/lu';
import { CiHeart } from "react-icons/ci";
import { PiShareFatLight } from 'react-icons/pi';

export default function Page() {
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };
    return (
        <>
            <div className='flex items-center gap-2' onClick={handleGoBack}>
                <CaretLeft size={18} className='cursor-pointer' />
                <h2 className='text-[#323232] cursor-pointer text-xl 2xl:text-[32px] leading-[48px]font-medium'>Resource</h2>
            </div>
            <div className='flex flex-col gap-4 mt-8'>
                <div className='relative w-full h-[340px] rounded-lg'>
                    <Image src={seedHarvest} fill alt="resources-img" className="w-full h-full object-center object-cover rounded-lg" />
                </div>
                <div className='flex flex-col space-y-2'>
                    <div className='flex gap-3 items-center'>
                        <Image src={avatar} alt='avatar' className='w-6 h-6 rounded-full' />
                        <p className='font-medium text-base leading-[30px] text-[#737373]'>Mary-Jane Elvis</p>
                    </div>
                    <h2 className='font-medium text-2xl text-[#323232]'>The Journey from Seed to Harvest</h2>
                    <div className='flex gap-1 items-center font-normal text-sm text-[#6FA521] leading-[21px]'>
                        <p>Mary-Jane Elvis</p><p className='w-[6px] h-[6px] rounded-full bg-[#6FA521]'></p> <p>10min read</p>
                    </div>
                    <p className='font-normal text-base'>The journey of a crop from seed to harvest is not just a practical endeavor; it&rsquo;s a fascinating and rewarding process that embodies the very essence of agriculture. It all begins with the crucial step of selecting the right seeds, an intricate decision-making process that involves careful consideration of various factors such as the local climate, soil type, and the intended use of the crop. A farmer must weigh these factors to ensure that the seeds chosen are well-suited to the environment in which they will be grown, laying the foundation for a successful crop.

                        Once the seeds have been carefully selected and planted in the soil, the nurturing phase begins—a time that demands patience, dedication, and constant attention to detail. During this stage, the crop must receive consistent care, including proper watering to ensure hydration, fertilization to provide essential nutrients, and protection from a wide range of potential threats like pests and diseases. It is during this nurturing phase that the relationship between the farmer and the crop truly deepens, as each day brings new opportunities to monitor growth and respond to the plant&apos;s needs.

                        Regular monitoring plays a critical role in the crop&apos;s development, as it allows the farmer to assess the health of the plants and ensure they are progressing as expected. This includes checking for signs of nutrient deficiencies, managing weeds, and ensuring that the plants are receiving the right amount of sunlight and water. By staying vigilant, the farmer can catch and address any issues early, ensuring that the crop remains on track for a bountiful harvest.
                        As the months of hard work, dedication, and care draw to a close, the harvest marks the culmination of this intricate process. The timing of the harvest is essential, as crops must be collected at their peak of quality to ensure the best yield. This stage represents the reward for the farmer&rsquo;s efforts—where all the planning, nurturing, and problem-solving come together in the form of a successful and abundant crop.

                        However, the path from seed to harvest is not always straightforward. Farmers often face numerous challenges along the way, such as unpredictable weather conditions that can affect growth patterns, the ever-present threat of pests and diseases, and even soil-related issues that may require adjustments in fertilization or irrigation. These obstacles can, at times, seem overwhelming, but they also serve as opportunities for learning and growth. Each challenge encountered teaches valuable lessons, and over time, these lessons contribute to more resilient and adaptive farming practices.

                        By sharing personal experiences, insights, and the lessons learned from overcoming these challenges, farmers not only strengthen their own practices but also contribute to a collective knowledge base that can inspire and guide others. Farming, at its core, is a shared journey—a constant learning process that thrives on collaboration, innovation, and the pursuit of excellence in the fields.</p>
                    <div className='flex flex-col gap-4 px-2 py-1'>
                        <div className='flex items-start gap-4'>
                            <div className='flex gap-1 items-center'>
                                <div className='rounded-full w-8 h-8 bg-[#E6F0E8] cursor-pointer flex items-center justify-center'>
                                    <BiLike className='text-whie text-[#6FA521]' />
                                </div>
                                <p className='font-normal text-[#737373] text-sm'>32</p>
                                <div className='rounded-full w-8 h-8 bg-[#E6F0E8] cursor-pointer flex items-center justify-center'>
                                    <BiRepost className='text-whie text-[#6FA521]' />
                                </div>
                                <p className='font-normal text-[#737373] text-sm'>15</p>
                                <div className='rounded-full w-8 h-8 bg-[#E6F0E8] cursor-pointer flex items-center justify-center'>
                                    <PiShareFatLight className='text-whie text-[#6FA521]' />
                                </div>
                                <p className='font-normal text-[#737373] text-sm'>10</p>
                                <div className='rounded-full w-8 h-8 bg-[#E6F0E8] cursor-pointer flex items-center justify-center'>
                                    <CiHeart className='text-whie text-[#6FA521]' />
                                </div>
                                <p className='font-normal text-[#737373] text-sm'>8</p>
                            </div>

                        </div>
                        <div className='flex w-full gap-4 items-center pb-2'>
                            <div className='flex items-center cursor-pointer gap-1'>
                                <BiLike />
                                <p className='font-normal text-[#595959] text-sm'>Like</p>
                            </div>
                            <div className='flex items-center cursor-pointer gap-1'>
                                <BiRepost />
                                <p className='font-normal text-[#595959] text-sm'>Repost</p>
                            </div>
                            <div className='flex cursor-pointer items-center gap-1'>
                                <PiShareFatLight />
                                <p className='font-normal text-[#595959] text-sm'>Share</p>
                            </div>
                            <div className='flex cursor-pointer items-center gap-1'>
                                <CiHeart />
                                <p className='font-normal text-[#595959] text-sm'>Save</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
