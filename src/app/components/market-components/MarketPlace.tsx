"use client";

import MarketPlaceCard from "../cards/MarketPlaceCard";

export default function MarketPlace() {
  return (
    <>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        <MarketPlaceCard />
        <MarketPlaceCard />
        <MarketPlaceCard />
        <MarketPlaceCard />
        <MarketPlaceCard />
        <MarketPlaceCard />
      </div>
    </>
  );
}
