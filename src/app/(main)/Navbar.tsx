// import Image from "next/image";
import Link from "next/link";
import logoImage from "@/assets/BUBETECH_LOGO.png"
import { IoBagHandleOutline } from "react-icons/io5";
import { IoAddCircleOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";

import { BsChatLeftText } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

import { CgProfile } from "react-icons/cg";

import { IoIosNotificationsOutline } from "react-icons/io";
import Image from "next/image";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-10 bg-white shadow-sm">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-5 py-3">
                <div className="flex items-center gap-2">
                    <Image
                        src={logoImage}
                        alt=""
                        className="hidden w-8 h-8 object-cover md:block"
                    />
                    <div>Search</div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center gap- cursor-pointer">
                        <GoHome size={18} />
                        <p className="font-normal text-sm leading-6 text-[#828282]">Home</p>
                    </div>
                    <div className="flex flex-col items-center cursor-pointer">

                        <IoAddCircleOutline size={18} />
                        <p className="font-normal text-sm leading-6 text-[#828282]">Post</p>
                    </div>
                    <div className="flex flex-col items-center cursor-pointer">
                        <IoBagHandleOutline size={18} />
                        <p className="font-normal text-sm leading-6 text-[#828282]">Market</p>
                    </div>
                    <div className="flex flex-col items-center cursor-pointer">
                        <BsChatLeftText size={18} />
                        <p className="font-normal text-sm leading-6 text-[#828282]">Chat</p>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <div className="flex flex-col items-center cursor-pointer">
                        <IoIosNotificationsOutline size={18} />
                        <p className="font-normal text-sm leading-6 text-[#828282]">Notification</p>
                    </div>
                    <div className="flex flex-col items-center cursor-pointer">
                        <AiOutlineMenu size={18} />
                        <p className="font-normal text-sm leading-6 text-[#828282]">Menu</p>
                    </div>
                    <div className="flex flex-col items-center cursor-pointer">
                        <CgProfile size={18} />
                        <p className="font-normal text-sm leading-6 text-[#828282]">Profile</p>
                    </div>
                </div>
            </div>
        </header>
    );
}
