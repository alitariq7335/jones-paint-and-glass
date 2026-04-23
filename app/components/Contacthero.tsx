'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';

const locations = [
  { id: 1, name: 'St George', img: '/assets/jt/location-1.png' },
  { id: 2, name: 'American Fork', img: '/assets/jt/location-2.png' },
  { id: 3, name: 'Payson', img: '/assets/jt/location-3.png' },
  { id: 4, name: 'American Fork', img: '/assets/jt/location-2.png' },
  { id: 5, name: 'Payson', img: '/assets/jt/location-3.png' },
  { id: 6, name: 'St George', img: '/assets/jt/location-1.png' },
  { id: 7, name: 'Payson', img: '/assets/jt/location-3.png' },
];

export default function Contacthero() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const handleBeforeInit = (swiper: SwiperType) => {
    if (typeof swiper.params.navigation === 'object' && swiper.params.navigation) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
    }
  };

  return (
    <section className="relative py-30 overflow-hidden bg-gradient-to-b from-[#0052C6] to-[#002559]" id='Contact-slider'>
      <div
        className="absolute top-[0px] lg:top-[80px] left-0 w-full pointer-events-none mix-blend-multiply z-2"
        style={{
          backgroundImage: "url(/assets/jt/elements/paint-8.png)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top left",
          height: "50%",
          transform: "rotate(0deg)",
          transformOrigin: "top left",
        }}
      />

      <div className="mx-auto container px-0 lg:px-6 pb-20 flex flex-col gap-4 md:gap-6 xl:gap-8 justify-center items-center text-center">

        <p className="text-[16px] text-[#A5EBCD] font-bold uppercase leading-relaxed tracking-widest xl:px-0 md:px-10 px-2">
          Jones Paint & Glass
        </p>
        <h2 className="text-[28px] md:text-[48px] lg:text-[56px] font-bold text-white -mt-4 mb-4 leading-tight font-['Avenir']">
          Contact Us
        </h2>
        <div className="relative z-2 flex flex-wrap justify-center gap-3">
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-[8px] bg-[#A5EBCD] px-5 py-3 text-[16px] font-bold text-black transition-colors"
          >
            Request Quote
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#"
            className=" inline-flex items-center gap-2 rounded-[8px] bg-transparent border border-white px-5 py-3 text-[16px] font-semibold text-white transition-colors"
          >
            General Inquiries

          </a>
        </div>

      </div>


      {/* GRID CONTAINER */}
      <div className="grid grid-cols-12 items-end bg-white py-10 rounded-r-3xl gap-6 mr-[10%] relative z-3 lg:z-1">

        {/* LEFT SIDE */}
        <div className="col-span-12 lg:col-span-5 pl-6 lg:pl-10 pr-6 lg:pr-0">
          <h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-bold text-black mb-4 leading-tight font-['Avenir']">
            JP&amp;G Locations
          </h2>

          <p className="text-[16px] text-gray-500 leading-relaxed mb-8 lg:pr-[20%]">
            We have stores scattered throughout Utah. Check out
            the products and information for the store nearest you!
          </p>

          <div className="flex gap-3">
            {/* PREV BUTTON */}
            <button
              ref={prevRef}
              className="w-11 h-11 rounded-full bg-[#D9FDED] hover:bg-[#A5EBCD]
                         flex items-center justify-center transition-colors cursor-pointer"
            >
              <svg className="w-8 h-8 stroke-black fill-none" strokeWidth={1.2} viewBox="0 0 24 24">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* NEXT BUTTON */}
            <button
              ref={nextRef}
              className="w-11 h-11 rounded-full bg-[#D9FDED] hover:bg-[#A5EBCD]
                         flex items-center justify-center transition-colors cursor-pointer"
            >
              <svg className="w-8 h-8 stroke-black fill-none" strokeWidth={1.2} viewBox="0 0 24 24">
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </button>
          </div>
        </div>

        {/* RIGHT SIDE (SWIPER) */}
        <div className="col-span-12 lg:col-span-7 overflow-hidden">
          <Swiper
            modules={[Navigation]}
            loop={true}
            onBeforeInit={handleBeforeInit}
            slidesPerView={1.1}
            spaceBetween={16}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2.2 },
              1200: { slidesPerView: 2.5 },
              1400: { slidesPerView: 3 },
            }}
          >
            {locations.map((loc) => (
              <SwiperSlide key={loc.id}>
                <div className="relative rounded-xl overflow-hidden border border-gray-100 bg-white">

                  {/* IMAGE */}
                  <div className="relative w-full h-[350px] md:h-[380px] lg:h-[420px]">
                    <Image
                      src={loc.img}
                      alt={loc.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* FOOTER */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white/95 rounded-xl px-5 py-4 w-[90%] mx-auto mb-4 shadow-sm">
                    <h3 className="font-bold text-gray-900 text-lg mb-1">
                      {loc.name}
                    </h3>
                    <a
                      href="#"
                      className="text-sm text-gray-500 hover:text-[#4aaa93] transition-colors"
                    >
                      Store Info
                    </a>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}