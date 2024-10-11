"use client"
import React, { useState } from 'react'
import { CONNECT_WITH, GROUPS_YOU_CAN_JOIN } from '../../../../constant'
import Image from 'next/image'
import stack from "@/assets/stack-image.png"
import { Button } from '../../../components/ui/button'
import { IoMdClose } from "react-icons/io";


const Connect = () => {
    const [connectWithList, setConnectWithList] = useState(CONNECT_WITH);

    const handleDelete = (id: number) => {
        const updatedList = connectWithList.filter((item) => item.id !== id);
        setConnectWithList(updatedList);
    };
    return (
        <div className='md:bg-white rounded-md shadow-sm p-3 h-fit pb-5'>
            <div className='flex flex-col w-full gap-5'>
                <div className='flex justify-between items-start text-xs'>
                    <p className='font-medium'>Farmers you can
                        connect with</p>
                    <p className='font-normal text-xs text-[#6FA521] cursor-pointer w-24'>See more</p>
                </div>
                <div className='flex flex-row md:flex-col overflow-x-auto scrollbar-hide w-full gap-2 md:gap-3'>
                    {connectWithList.map((item) => {
                        return (
                            <div key={item.id} className='flex min-w-36 max-w-48 md:max-w-full flex-row relative bg-white md:bg-transparent items-start justify-between'>
                                <div className='flex flex-col md:flex-row gap-2 items-start mb-2 md:md-0'>
                                    <Image
                                        src={item.img}
                                        alt=""
                                        className="w-full h-24 md:w-9 md:h-9 object-cover rounded-md md:rounded-full"
                                    />
                                    <div className='flex flex-col gap-1 px-2 w-full'>
                                        <h2 className='font-medium text-xs text-[#323232]'>{item.name}</h2>
                                        <p className='text-[#737373] font-normal text-[10px] leading-[15px]'>{item.profession}</p>
                                        <div className='flex gap-1 items-center'>
                                            <Image
                                                src={stack}
                                                alt=""
                                                className="w-7 h-5 object-cover rounded-full"
                                            />

                                            <p className='text-[#737373] font-normal text-[10px] leading-[15px]'>{item.friends} {""}mutual friends</p>
                                        </div>
                                        <Button className='bg-[#6FA521] w-full md:w-3/4 text-white rounded-sm'>connect</Button>
                                    </div>
                                </div>
                                <div className='absolute right-2 top-2 w-4 h-4 rounded-full bg-[#E1E1E1] flex items-center cursor-pointer justify-center' onClick={() => handleDelete(item.id)}>
                                    <IoMdClose className='text-black w-[11.8px] h-[11.8px]' />
                                </div>
                            </div>)
                    })}
                </div>


            </div>
            <div className='flex flex-col gap-5 border-t mt-5 border-[#D9D9D9]'>
                <div className='flex justify-between items-start text-xs mt-5'>
                    <p className='font-medium'>Groups you can Join</p>
                    <p className='font-normal text-xs text-[#6FA521] cursor-pointer w-'>See more</p>
                </div>
                <div className='flex flex-row md:flex-col overflow-x-auto scrollbar-hide w-full gap-2 md:gap-3'>
                    {GROUPS_YOU_CAN_JOIN.map((item) => {
                        return (
                            <div key={item.id} className='flex min-w-36 max-w-48 md:max-w-full flex-row relative bg-white md:bg-transparent items-start justify-between'>
                                <div className='flex flex-col md:flex-row gap-2 items-start'>
                                    <Image
                                        src={item.img}
                                        alt=""
                                        className="w-full h-24 md:w-9 md:h-9 object-cover rounded-md md:rounded-full"
                                    />
                                    <div className='flex flex-col gap-1 px-2 w-full mb-2 md:mb-0'>
                                        <h2 className='font-medium text-xs text-[#323232]'>{item.name}</h2>
                                        <p className='text-[#737373] font-normal text-[10px] leading-[15px]'>{item.branch}</p>
                                        <Button className='bg-transparent border border-[#6FA521] rounded w-full md:w-3/4 hover:bg-[#6FA521] hover:text-white text-[#6FA521] '>Join</Button>
                                    </div>
                                </div>
                            </div>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default Connect