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
                    <p className='cursor-pointer text-[#686868] font-normal text-sm' >Share your thoughts...</p>
                </div>
            </DialogContent>
        </Dialog>
    )
}
