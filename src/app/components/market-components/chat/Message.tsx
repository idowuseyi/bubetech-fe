"use client"
import React from 'react';
import Image from 'next/image';
import avatar from "../../../../assets/market-place/avatar.jpg"
import { ChatCenteredDots, LinkSimple, Microphone, PaperPlaneTilt, Phone, Smiley, TextT } from '@phosphor-icons/react';

export default function Message() {

    return (
        <div className='bg-[#FFFFFF] relative  h-full rounded-[20px] flex-1 w-full max-w-[852px] md:flex-[7]'>

            <div className='h-full flex flex-col justify-between min-h-[600px] rounded-[20px]'>
                <div className='bg-[#F0F0F0] sticky top-0 left-0 flex items-center justify-between px-6 py-3 rounded-t-[20px]'>
                    <div className="flex items-center w-full gap-3">
                        <div className='relative'>
                            <Image
                                src={avatar}
                                width={100}
                                height={100}
                                alt="owner avatar image"
                                className="w-[32px] h-[32px] rounded-full"

                            />
                            <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full border-2 border-gray-2 bg-[#6FA521]"></span>
                        </div>
                        <div className="text-[#737373] ">
                            <p className='text-base font-medium'>Olaleye Sunday</p>
                            <p className='text-sm'>Online</p>
                        </div>
                    </div>
                    <div className='flex w-fit gap-2 max-w-24'>
                        <div className='bg-[#F5F5F5] rounded-full text-[#6FA521] w-10 h-10 flex items-center justify-center cursor-pointer'>
                            <Phone size={24} />

                        </div>
                        <div className='bg-[#F5F5F5] rounded-full text-[#6FA521] w-10 h-10 flex items-center justify-center cursor-pointer'>
                            <ChatCenteredDots size={24} />

                        </div>
                    </div>
                </div>
                <div className="flex flex-col h-full  -mt-10 overflow-auto w-full space-y-3.5 no-scrollbar px-6">
                    <div className="max-w-125 ml-auto">
                        <div className="text-white rounded-[10px] bg-[#6FA521] p-2 flex items-end justify-between gap-5">
                            <div className='w-fit'>
                                <p className="font-medium text-base">
                                    N30,000
                                </p>
                                <p className='text-sm font-normal leading-[18px] text-[#D7D5D5]'>1 basket of tomatoes</p>
                            </div>
                            <div className='text-sm font-normal leading-[18px] text-[#D7D5D5] flex items-center justify-between'>
                                <p className="text-sm mt-1">1:57pm</p>
                            </div>
                        </div>
                        <span className='flex justify-end text-xs leading-[18px] text-[#323232]'>Sent</span>
                    </div>
                </div>
                <div className="sticky left-0 bottom-0 flex gap-4 items-start w-full bg-white rounded-b-[20px] px-6 py-4">
                    <Image
                        src={avatar}
                        width={100}
                        height={100}
                        alt="owner avatar image"
                        className="w-[32px] h-[32px] rounded-full"

                    />
                    <form className="flex flex-col space-x-4.5 w-full border border-[#949494] rounded-[20px] p-4">
                        <div className="relative w-full">
                            <textarea
                                rows={4}
                                placeholder="Type your message"
                                className="w-full h-13 rounded-md outline-none border-stroke bg-gray  text-black"
                            ></textarea>

                        </div>
                        <div className='flex justify-between items-center'>
                            <div className="flex items-center justify-end text-[#737373] space-x-2">
                                <button className="hover:text-primary">
                                    <Smiley size={20} />
                                </button>

                                <button className="hover:text-primary">
                                    <TextT size={20} />
                                </button>
                                <button className="hover:text-primary">
                                    <Microphone size={20} />
                                </button>
                                <button className="hover:text-primary">
                                    <LinkSimple size={20} />
                                </button>
                            </div>
                            <button className="flex items-center justify-center h-13 max-w-13 rounded-xl bg-[#6FA521] py-[14px] px-10 text-white hover:bg-opacity-90">
                                Send
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}
