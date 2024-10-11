import { AlignJustify } from 'lucide-react'
import React from 'react'
import { BsChatLeftText } from 'react-icons/bs'
import { GoHome } from 'react-icons/go'
import { IoAddCircleOutline, IoBagHandleOutline } from 'react-icons/io5'

export default function BottomNavbar() {
    return (
        <div className='sticky bottom-0 left-0 w-full flex items-center justify-between bg-white px-4 py-3 md:hidden'>

            <div className="flex flex-col items-center gap- cursor-pointer">
                <GoHome size={24} />
                <p className="font-normal text-sm leading-6 text-[#828282]">Home</p>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
                <IoAddCircleOutline size={24} />
                <p className="font-normal txt-sm leading-6 text-[#828282]">Post</p>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
                <IoBagHandleOutline size={24} />
                <p className="font-normal text-sm leading-6 text-[#828282]">
                    Market
                </p>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
                <BsChatLeftText size={24} />
                <p className="font-normal text-sm leading-6 text-[#828282]">Chat</p>
            </div>
            <div className="flex flex-col items-center cursor-pointer">
                <AlignJustify size={24} />
                <p className="font-normal text-sm leading-6 text-[#828282]">Menu</p>
            </div>
        </div>
    )
}
