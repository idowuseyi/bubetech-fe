import Link from "next/link";
import logoImage from "@/assets/BUBETECH_LOGO.png";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoAddCircleOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { BsChatLeftText } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoIosNotificationsOutline } from "react-icons/io";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";

export default function Navbar() {
    return (
        <header className=" sticky top-0 z-10 bg-white shadow-sm">
            <div className="hidden mx-auto md:flex max-w-7xl flex-wrap items-center justify-between gap-5 px-5 py-3">
                <div className="flex items-center gap-2">
                    <Image src={logoImage} alt="" className="w-8 h-8 object-cover" />
                    <div className="flex items-center gap-4 bg-[#F6F6F6] w-[335px] rounded-[20px] px-5 py-2">
                        <FiSearch size={19} className="text-[#858585]" />
                        <input
                            placeholder="Search"
                            className="outline-none placeholder:text-sm text-[#858585] font-normal bg-transparent"
                        />
                    </div>
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
                    <Link href="/market-place" className="flex flex-col items-center cursor-pointer">
                        <IoBagHandleOutline size={18} />
                        <p className="font-normal text-sm leading-6 text-[#828282]">
                            Market
                        </p>
                    </Link>
                    <div className="flex flex-col items-center cursor-pointer">
                        <BsChatLeftText size={18} />
                        <p className="font-normal text-sm leading-6 text-[#828282]">Chat</p>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <div className="flex flex-col items-center cursor-pointer">
                        <IoIosNotificationsOutline size={18} />
                        <p className="font-normal text-sm leading-6 text-[#828282]">
                            Notification
                        </p>
                    </div>
                    <div className="flex flex-col items-center cursor-pointer">
                        <AiOutlineMenu size={18} />
                        <p className="font-normal text-sm leading-6 text-[#828282]">Menu</p>
                    </div>
                    <Link href="/profile" className="flex flex-col items-center cursor-pointer">
                        <CgProfile size={18} />
                        <p className="font-normal text-sm leading-6 text-[#828282]">
                            Profile
                        </p>
                    </Link>
                </div>
            </div>
            {/* MOBILE NAVBAR */}
            <div className="w-full px-4 py-3 flex items-center justify-between md:hidden">
                <div>
                    <Image src={logoImage} alt="" className="w-8 h-8 object-cover" />
                </div>
                <div className="flex gap-2 items-center">
                    <FiSearch size={24} className="text-[#858585]" />
                    <IoIosNotificationsOutline size={24} />
                    <CgProfile size={24} />
                </div>
            </div>
        </header>
    );
}
