"use client";
import MarketPlaceCard from "../cards/MarketPlaceCard";
import tomato from "@/assets/market-place/tomato.jpg";
import fertilizer from "@/assets/market-place/fertilizer.png";
import rice from "@/assets/market-place/rice.jpg";
import chicken from "@/assets/market-place/chickens.png";
import potatoes from "@/assets/market-place/potatoes.png";
import tractor from "@/assets/market-place/tractor.jpg";
import avatar from "@/assets/market-place/avatar.jpg";

export default function MarketPlace() {
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
      amount: "100,000 /per day",
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

  return (
    <>
      <div className="md:grid md:grid-cols-2 w-full lg:grid-cols-3 gap-4 ">
        {marketData.map((item) => (
          <MarketPlaceCard
            key={item.id}
            id={item.id}
            product_name={item.product_name}
            product_img={item.product_img}
            amount={item.amount}
            place={item.location}
            product_owner={item.product_owner}
            owner_avatar={item.owner_avatar}
            category={item.category}

          />
        ))}

      </div>
    </>
  );
}
