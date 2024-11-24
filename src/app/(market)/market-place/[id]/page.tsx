"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import Description from '@/app/components/market-components/details/Description'
import Feedback from '@/app/components/market-components/details/Feedback'
import tomato from "@/assets/market-place/tomato.jpg";
import fertilizer from "@/assets/market-place/fertilizer.png";
import rice from "@/assets/market-place/rice.jpg";
import chicken from "@/assets/market-place/chickens.png";
import potatoes from "@/assets/market-place/potatoes.png";
import tractor from "@/assets/market-place/tractor.jpg";
import avatar from "@/assets/market-place/avatar.jpg";

const marketData = [
    {
        id: 0,
        product_name: "Tomatoes",
        product_img: tomato,
        amount: "32,000",
        product_owner: "Khadija Shehu",
        location: "Sokoto",
        owner_avatar: tomato,
        category: "sell"
    },
    {
        id: 1,
        product_name: "Fertilizer",
        product_img: fertilizer,
        amount: "72,000",
        product_owner: "Bube Tech Limited",
        location: "Sokoto",
        owner_avatar: avatar,
        category: "sell"
    },
    {
        id: 2,
        product_name: "Rice",
        product_img: rice,
        amount: "32,000",
        product_owner: "Khadija Shehu",
        location: "Sokoto",
        owner_avatar: avatar,
        category: "sell"
    },
    {
        id: 3,
        product_name: "Tractor",
        product_img: tractor,
        amount: "100,000",
        product_owner: "Yakubu Tukur LTD",
        location: "Sokoto",
        owner_avatar: avatar,
        category: "rent"
    },
    {
        id: 4,
        product_name: "Potatoes",
        product_img: potatoes,
        amount: "32,000",
        product_owner: "Khadija Shehu",
        location: "Sokoto",
        owner_avatar: avatar,
        category: "sell"
    },
    {
        id: 5,
        product_name: "Yam",
        product_img: chicken,
        amount: "32,000",
        product_owner: "Khadija Shehu",
        location: "Sokoto",
        owner_avatar: avatar,
        category: "sell"
    },
    {
        id: 6,
        product_name: "Yam",
        product_img: chicken,
        amount: "32,000",
        product_owner: "Khadija Shehu",
        location: "Sokoto",
        owner_avatar: avatar,
        category: "sell"
    },
    {
        id: 7,
        product_name: "Yam",
        product_img: chicken,
        amount: "32,000",
        product_owner: "Khadija Shehu",
        location: "Sokoto",
        owner_avatar: avatar,
        category: "sell"
    },
    {
        id: 8,
        product_name: "Yam",
        product_img: chicken,
        amount: "32,000",
        product_owner: "Khadija Shehu",
        location: "Sokoto",
        owner_avatar: avatar,
        category: "sell"
    },
    {
        id: 9,
        product_name: "Yam",
        product_img: chicken,
        amount: "32,000",
        product_owner: "Khadija Shehu",
        location: "Sokoto",
        owner_avatar: avatar,
        category: "sell"
    },
    {
        id: 10,
        product_name: "Yam",
        product_img: chicken,
        amount: "32,000",
        product_owner: "Khadija Shehu",
        location: "Sokoto",
        owner_avatar: avatar,
        category: "sell"
    },
    {
        id: 11,
        product_name: "Yam",
        product_img: chicken,
        amount: "32,000",
        product_owner: "Khadija Shehu",
        location: "Sokoto",
        owner_avatar: avatar,
        category: "sell"
    },
    {
        id: 12,
        product_name: "Yam",
        product_img: chicken,
        amount: "32,000",
        product_owner: "Khadija Shehu",
        location: "Sokoto",
        owner_avatar: avatar,
        category: "sell"
    },
    {
        id: 13,
        product_name: "Yam",
        product_img: chicken,
        amount: "32,000",
        product_owner: "Khadija Shehu",
        location: "Sokoto",
        owner_avatar: avatar,
        category: "sell"
    },
    {
        id: 14,
        product_name: "Yam",
        product_img: chicken,
        amount: "32,000",
        product_owner: "Khadija Shehu",
        location: "Sokoto",
        owner_avatar: avatar,
        category: "sell"
    },
    {
        id: 15,
        product_name: "Yam",
        product_img: chicken,
        amount: "32,000",
        product_owner: "Khadija Shehu",
        location: "Sokoto",
        owner_avatar: avatar,
        category: "sell"
    }
]

export default function Page() {
    const params = useParams()
    console.log(params)
    const selectedItem = marketData.filter((item) => item.id === Number(params.id))
    console.log("selectedItem", selectedItem)
    return (
        <div className='flex flex-col gap-4'>
            <Description selectedItem={selectedItem} />
            <Feedback />
        </div>
    )
}
