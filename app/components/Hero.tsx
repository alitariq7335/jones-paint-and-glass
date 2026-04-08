import React from "react";

export default function Hero() {
  return (
    <div className="h-147.5 relative bg-red-400 mt-17.5" id="hero">
      <div className="image absolute w-full">
        <img
          src="images/hero.jpg"
          className="h-147.5 object-cover w-full -z-10 relative"
        />
      </div>
      <div className="container mx-auto h-60 w-full relative top-1/2 right-0 -translate-y-1/2 ">
        <div className="text-box absolute top-1/2 right-0 h-102 w-157 bg-white text-[#0052C6] -translate-y-1/2 py-12 px-20 rounded-2xl">
          <div className="jp flex  ">
            <div className="p-2">
              <h3 className="text-xl font-extrabold">BEFORE YOU</h3>
              <h2 className="text-7xl font-extrabold -ml-1">DIY</h2>
            </div>
            <div className="   text-white ml-4 py-2 px-8   relative">
               <div className="round-shape bg-[#0052C6] rounded-xl -skew-x-12 w-full h-full absolute top-0 left-0 -z-1"></div>
              <h3 className="text-xl font-extrabold ml-6">MAKE SURE YOU</h3>
              <h2 className="text-7xl font-extrabold">JP&G</h2>
            </div>
          </div>
          <p className="my-6">
            That’s Jones Paint & Glass—your neighborhood experts on DIY projects
            involving paint, glass or doors. We help you get it right the first
            time.
          </p>
          <button className="border-[#0052C6] border-2 py-2 px-4 rounded">DIY Tips & Tricks</button>
        </div>
      </div>
    </div>
  );
}
