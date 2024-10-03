import Link from "next/link";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdAdd } from "react-icons/md";
import Image from "next/image";
import PersonImage from "@/assets/abdullahi_image.png"
import { IoBagHandleOutline } from "react-icons/io5";
import { IoMdPeople } from "react-icons/io";
import { GrResources } from "react-icons/gr";
import { GiNotebook } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";


interface MenuBarProps {
    className?: string;
}

export default async function MenuBar({ className }: MenuBarProps) {


    return (
        <div className="sticky top-[5.25rem] hidden h-fit flex-none space-y-3 rounded-xl bg-white px-3 py-5 shadow-sm sm:block lg:px-5 xl:w-[280px]">
            <div className="flex items-start justify-between">
                <Image
                    src={PersonImage}
                    alt=""
                    className="hidden w-8 h-8 object-cover md:block"
                />
                <div className="flex flex-col items-start">
                    <h2 className="font-medium text-sm">Abubakar Abdullahi</h2>
                    <p className="text-[#6FA521] font-normal text-xs cursor-pointer underline">Edit profile</p>
                </div>
                <div className="rounded-full w-6 flex items-center cursor-pointer justify-center h-6 bg-[#6FA521] "><MdAdd size={20} className="text-white" /></div>
            </div>
            <div className="mt-20 flex gap-2 2xl:gap-6 flex-col">
                <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-50 hover:rounded-xl p-2">
                    <div className="w-7 h-7 items-center rounded-full justify-center bg-[#F9EDFF] flex"><IoBagHandleOutline /></div>
                    <p className="font-normal text-sm">Marketplace</p>
                </div>
                <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-50 hover:rounded-xl p-2">
                    <div className="w-7 h-7 items-center rounded-full justify-center bg-[#E2F8FF] flex"><IoMdPeople /></div>
                    <p className="font-normal text-sm">Experts</p>
                </div>
                <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-50 hover:rounded-xl p-2">
                    <div className="w-7 h-7 items-center rounded-full justify-center bg-[#E0FFDD] flex"><GrResources /></div>
                    <p className="font-normal text-sm">Resources</p>
                </div>
                <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-50 hover:rounded-xl p-2">
                    <div className="w-7 h-7 items-center rounded-full justify-center bg-[#DDFFFF] flex"><GiNotebook /></div>
                    <p className="font-normal text-sm">Prescription</p>

                </div>
                <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-50 hover:rounded-xl p-2">
                    <div className="w-7 h-7 items-center rounded-full justify-center bg-[#F9EDFF] flex"><IoBagHandleOutline /></div>
                    <p className="font-normal text-sm">Workshop & Webinars</p>
                </div>
                <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-50 hover:rounded-xl p-2">
                    <div className="w-7 h-7 items-center rounded-full justify-center bg-[#F8FFD8] flex"><CiHeart /></div>
                    <p className="font-normal text-sm">Saved</p>
                </div>
                <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-50 hover:rounded-xl p-2">
                    <div className="w-7 h-7 items-center rounded-full justify-center bg-[#F8FFD8] flex"><CiHeart /></div>
                    <p className="font-normal text-sm">Disease Diagnosis</p>
                </div>
                <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-50 hover:rounded-xl p-2">
                    <div className="w-7 h-7 items-center rounded-full justify-center bg-[#F8FFD8] flex"><CiHeart /></div>
                    <p className="font-normal text-sm">Groups</p>
                </div>
                <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-50 hover:rounded-xl p-2">
                    <div className="w-7 h-7 items-center rounded-full justify-center bg-[#F8FFD8] flex"><CiHeart /></div>
                    <p className="font-normal text-sm">Events</p>
                </div>
                <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-50 hover:rounded-xl p-2">
                    <div className="w-7 h-7 items-center rounded-full justify-center bg-[#F8FFD8] flex"><CiHeart /></div>
                    <p className="font-normal text-sm">Emergency</p>
                </div>
            </div>
        </div>
    );
}
