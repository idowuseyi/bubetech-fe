import React from 'react'
import { POST } from '../../../../constant'
import Image from 'next/image'
import { BsThreeDots } from "react-icons/bs";
import { IoMdClose } from 'react-icons/io';
import { BiLike } from "react-icons/bi";
import { LuDot } from "react-icons/lu";
import { PiShareFatLight } from "react-icons/pi";
import { BiRepost } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";


const Post = () => {
    return (
        <div className='md:rounded-md md:bg-white flex flex-col gap-2'>
            {POST.map((item) => {
                return (<div key={item.id} className='flex flex-col gap-3 md:shadow-md'>
                    <div className='flex items-start justify-between p-3'>
                        <div className='flex gap-2 items-start'>
                            <Image
                                src={item.img}
                                alt=""
                                className="w-9 h-9 object-cover rounded-full"
                            />
                            <div className='flex flex-col gap-1'>
                                <h2 className='font-medium text-xs text-[#323232]'>{item.name}</h2>
                                <p className='text-[#737373] font-normal text-[10px] leading-[15px]'>{item.profession}</p>
                                <p className='text-[#737373] font-normal text-[10px] leading-[15px]'>{item.time}</p>

                            </div>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <BsThreeDots className='cursor-pointer' />
                            <IoMdClose className='text-black cursor-pointer' />
                        </div>
                    </div>
                    <p className='font-normal text-sm leading-[21px] px-3'>{item.post}</p>
                    <div>
                        <Image
                            src={item.postImage}
                            alt=""
                            className="w-full h-[220px] object-cover rounded"
                        />
                    </div>
                    <div className='flex flex-col gap-4 px-2 py-1'>
                        <div className='flex items-start justify-between'>
                            <div className='flex gap-1 items-center'>
                                <div className='rounded-full cursor-pointer bg-[#6FA521] flex items-center justify-center'>
                                    <BiLike className='text-white' />
                                </div>
                                <p className='font-normal text-[#737373] text-sm'>525</p>
                            </div>
                            <div className='flex gap-[2px] items-center font-normal text-[#737373] text-xs'>
                                <p className='cursor-pointer'>12 comments</p>
                                <LuDot />
                                <p className='cursor-pointer'>3 responses</p>
                            </div>
                        </div>
                        <div className='flex w-full gap-4 items-center pb-2'>
                            <div className='flex items-center cursor-pointer gap-1'>
                                <BiLike />
                                <p className='font-normal text-[#595959] text-sm'>Like</p>
                            </div>
                            <div className='flex items-center cursor-pointer gap-1'>
                                <FaRegComment />
                                <p className='font-normal text-[#595959] text-sm'>Comments</p>
                            </div>
                            <div className='flex items-center cursor-pointer gap-1'>
                                <BiRepost />
                                <p className='font-normal text-[#595959] text-sm'>Repost</p>
                            </div>
                            <div className='flex cursor-pointer items-center gap-1'>
                                <PiShareFatLight />
                                <p className='font-normal text-[#595959] text-sm'>Share</p>
                            </div>
                        </div>
                    </div>
                </div>)
            })}
        </div>
    )
}

export default Post