import Image from "next/image";
import { Star } from "lucide-react";

export default function MarketPlaceCard({ place, product_img, product_name, product_owner, owner_avatar, amount }: any) {
  return (
    <>
      <div className="max-w-[300px] border-[1.3px] border-gray-200 rounded-lg">
        <div className="grid grid-rows-2 h-[300px]">
          <div className=" rounded-lg">
            <Image
              src={product_img}
              width={100}
              height={100}
              alt="tomato image"
              className="w-full h-full rounded-lg object-fit object-center"
            />
          </div>
          <div className="px-4 py-4">
            <p className="text-base font-bold">{product_name}</p>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star color="#F4B400" className="" size={16} />
                <Star color="#F4B400" className="" size={16} />
                <Star color="#F4B400" className="" size={16} />
                <Star color="#F4B400" className="" size={16} />
              </div>
              <span>4.0</span>
            </div>
            <p className="text-[#6FA521] text-sm my-1.5">N {amount}</p>
            <div className="flex gap-3">
              <div>
                <Image
                  src={owner_avatar}
                  width={100}
                  height={100}
                  alt="owner avatar image"
                  className="mb-3 w-[32px] h-[32px] rounded-full"
                />
              </div>
              <div className="text-[#737373] text-xs">
                <p>{product_owner}</p>
                <p>{place}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
