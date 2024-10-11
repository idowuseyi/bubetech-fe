import React from 'react'
import Image from 'next/image';
import PersonImage from "@/assets/abdullahi_image.png"
import { BsImage } from "react-icons/bs";
import { LiaUserTagSolid } from "react-icons/lia";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { MdOutlineEventNote } from "react-icons/md";

interface CreatePostProps {
    handleShowCreateDialog: () => void
}


const CreatePost = ({ handleShowCreateDialog }: CreatePostProps) => {
    return (
        <div className='hidden bg-white rounded-md md:flex flex-col gap-10 p-3 w-full'>
            <div className='flex items-center gap-4'> <Image
                src={PersonImage}
                alt=""
                className="w-8 h-8 object-cover"
            />
                <p className='cursor-pointer text-[#686868] font-normal text-sm' onClick={handleShowCreateDialog}>Share your thoughts...</p>
            </div>
            <div className='flex items-center gap-8 font-normal text-[#686868] leading-[21px] text-sm'>
                <div className='flex gap-2 items-center cursor-pointer'>
                    <BsImage size={24} className='text-[#9B51E0]' /> <p>Add photos</p>
                </div>
                <div className='flex gap-2 items-center cursor-pointer'>
                    <LiaUserTagSolid size={24} className='text-[#27AE60]' /> <p>Tag someone</p>
                </div>
                <div className='flex gap-2 items-center cursor-pointer'>
                    <BiSolidBarChartAlt2 size={24} className='text-[#2D9CDB]' /> <p>Create poll</p>
                </div>
                <div className='flex gap-2 items-center cursor-pointer'>
                    <MdOutlineEventNote size={24} className='text-[#A71F1F]' /> <p>Create Event</p>
                </div>
            </div>
        </div>
    )
}

export default CreatePost