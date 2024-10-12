import React from 'react';
import { Button } from "../../../components/ui/button";
import PersonImage from "@/assets/abdullahi_image.png"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "../../../components/ui/dialog";
import Image from 'next/image';
import { BsImage } from "react-icons/bs";
import { LiaUserTagSolid } from "react-icons/lia";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { MdOutlineEventNote } from "react-icons/md";
import { Input } from '@/components/ui/input';

interface CreatePostDialogProps {
    open: boolean;
    onClose: () => void;
}


export default function CreatePostDialog({ open, onClose }: CreatePostDialogProps) {
    return (
        <Dialog open={open}>
            <DialogContent className=''>
                <div className='absolute shadow-sm border-b w-full p-2 flex items-center justify-between top-1 left-0 bg-white'>
                    <p onClick={onClose} className='text-[#BEBEBE] cursor-pointer font-normal text-sm'>Cancel</p>
                    <h2 className='text-base font-medium text-[#323232]'>Create Post</h2>
                    <Button className='bg-[#6FA521] z-10 w-24 outline-none'>Post</Button>
                </div>

                <div className='flex items-center gap-4 mt-10'> <Image
                    src={PersonImage}
                    alt=""
                    className="w-8 h-8 object-cover"
                />
                    <input placeholder="Share your thoughts..." className='px-3 py-2.5 cursor-pointer outline-none w-full text-[#686868] font-normal text-sm' />
                </div>
                <div className='flex w-11/12 mx-auto mt-10 mb-32 justify-between items-center gap-8 font-normal text-[#686868] leading-[21px] text-sm'>
                    <div className='flex gap-2 items-center cursor-pointer'>
                        <BsImage size={24} className='text-[#9B51E0]' /> <p className="text-sm">Add photos</p>
                    </div>
                    <div className='flex gap-2 items-center cursor-pointer'>
                        <LiaUserTagSolid size={24} className='text-[#27AE60]' /> <p className="text-sm">Tag someone</p>
                    </div>
                    <div className='flex gap-2 items-center cursor-pointer'>
                        <BiSolidBarChartAlt2 size={24} className='text-[#2D9CDB]' /> <p className="text-sm">Create poll</p>
                    </div>
                    <div className='flex gap-2 items-center cursor-pointer'>
                        <MdOutlineEventNote size={24} className='text-[#A71F1F]' /> <p className="text-sm">Create Event</p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
