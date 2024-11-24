"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import tomato from "../../../../assets/market-place/tomato.jpg"
import avatar from "../../../../assets/market-place/avatar.jpg"
import { CaretLeft, ChatCenteredDots, Minus, Phone, Plus, Star } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'
import CreateOffer from '../dialog/CreateOffer';
import Link from 'next/link';

export default function Description({ selectedItem }: any) {
    const router = useRouter();
    const [openCreateOfferDialog, setOpenCreateOfferDialog] = useState(false)
    const [openSuccessDialog, setOpenSuccessDialog] = useState(false)

    const handleGoBack = () => {
        router.back();
    };
    return (
        <>
            <div className='flex items-center gap-2' onClick={handleGoBack}>
                <CaretLeft size={18} className='cursor-pointer' />
                <h2 className='text-[#323232] cursor-pointer text-xl 2xl:text-[32px] leading-[48px]font-medium'>Description</h2>
            </div>
            {selectedItem.map((i: any) => {
                return (<div key={i.id} className='flex flex-col md:flex-row w-full gap-4 my-4'>
                    <div className='w-full flex-1 lg:flex-[5] xl:max-w-[872px] h-[375px]'>
                        <Image src={i.product_img} className='w-full h-full rounded-[8px] object-cover object-center' alt="product-img" />
                    </div>
                    <div className='rounded-[20px] flex-1 lg:flex-[2] flex flex-col justify-between min-h-full grow shadow-sm p-4 bg-white'>
                        <div className='flex justify-between'>
                            <div className='flex flex-col gap-1'>
                                <h2 className='text-xl 2xl:text-3xl text-[#343F42] font-medium'>{i.product_name}</h2>
                                <div className="flex items-center gap-1">
                                    <Star color="#F4B400" className="" size={16} />
                                    <Star color="#F4B400" className="" size={16} />
                                    <Star color="#F4B400" className="" size={16} />
                                    <Star color="#F4B400" className="" size={16} />
                                </div>
                                <div className='flex items-center gap-3 my-2'>
                                    <div className='cursor-pointer w-7 h-7 border border-[#B8B8B8] rounded-full flex items-center justify-center'>
                                        <Minus className='' />

                                    </div>
                                    <p>1</p>
                                    <div className='cursor-pointer w-7 h-7 border border-[#B8B8B8] rounded-full flex items-center justify-center'>
                                        <Plus className='' />

                                    </div>
                                </div>

                            </div>
                            {i.category === "rent" ? (<h2 className='text-[#6FA521] font-normal text-xl 2xl:text-[32px] 2xl:leading-9'>{`N ${i.amount}`}/<span className='text-[#737373] font-medium text-base'>per day</span></h2>) : (<h2 className='text-[#6FA521] font-normal text-xl 2xl:text-[32px] 2xl:leading-9'>{`N ${i.amount}`}</h2>)}

                        </div>
                        <div className='flex flex-col h-3/4  justify-between'>
                            <div className='flex items-center mt-3 justify-between '>
                                <div className="flex w-full gap-3">
                                    <div className=''>
                                        <Image
                                            src={i.owner_avatar}
                                            width={100}
                                            height={100}
                                            alt="owner avatar image"
                                            className="mb-3 w-[32px] h-[32px] rounded-full"
                                        />
                                    </div>
                                    <div className="text-[#737373] text-xs">
                                        <p>{i.product_owner}</p>
                                        <p className='text-[#6FA521]'>Connect</p>
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
                            <div className='flex flex-col grow'>
                            </div>
                            {i.category === "rent" ? (<div className='mb-6 flex items-center gap-2'>
                                <Link href={"/market-place/checkout?rent"}>
                                    <button className='border border-[#6FA521] mt-5 font-medium text-sm rounded-[10px] p-4 text-center text-[#6FA521]'>Rent as an individual</button>
                                </Link>
                                <Link href="/market-place/checkout?group-rent">
                                    <button className='bg-[#6FA521] mt-5 font-medium text-sm rounded-[10px] p-4 text-center text-white' >Rent as a group</button>
                                </Link>
                            </div>) : (<button className='bg-[#6FA521] mt-5 font-medium text-sm rounded-[10px] p-4 text-center text-white' onClick={() => setOpenCreateOfferDialog(true)}>Make an Offer</button>)}
                        </div>
                    </div>
                </div>)
            })}

            <div className='flex flex-col md:flex-row bg-[#FFFFFF] rounded-[20px] shadow-sm p-2'>
                <div className='flex-1 w-full border-b md:border-b-0 md:border-r p-2 border-[#BCBCBC]'>
                    <p className='font-normal text-base text-[#323232]'>Enjoy the taste of farm-fresh goodness with our basket of handpicked, organic tomatoes. Grown sustainably and harvested at peak ripeness, these tomatoes are perfect for all your culinary needs, from salads and sauces to soups and sandwiches.

                        Packed with essential nutrients, antioxidants, and vitamins, these tomatoes are not just a treat for your taste buds but also a wholesome addition to your diet. Sourced from local farms, every basket is a commitment to quality, supporting healthy eating and environmentally friendly practices. </p>
                </div>
                <div className='flex-1 p-2'>
                    <h4 className='font-medium text-xl leading-[30px] text-[#323232]'>Key Features</h4>
                    <div className='font-normal text-base text-[#323232]'>
                        <p>Fresh</p>
                        <p>Organic and Non-GMO</p>
                        <p>Farm-to-Table</p>
                        <p>Nutrient-Rich</p>
                        <p>Versatile Usage</p>
                    </div>

                </div>

            </div>
            <CreateOffer open={openCreateOfferDialog}
                setOpenSuccessDialog={setOpenSuccessDialog}
                onClose={() => setOpenCreateOfferDialog(false)} />
        </>
    )
}
