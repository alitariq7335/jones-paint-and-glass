'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';

import 'swiper/css';

const locations = [
  { id: 1, name: 'St George',     img: '/assets/jt/location-1.png' },
  { id: 2, name: 'American Fork', img: '/assets/jt/location-2.png' },
  { id: 3, name: 'Payson',        img: '/assets/jt/location-3.png' },
  { id: 4, name: 'American Fork', img: '/assets/jt/location-2.png' },
  { id: 5, name: 'Payson',        img: '/assets/jt/location-3.png' },
  { id: 6, name: 'St George',     img: '/assets/jt/location-1.png' },
  { id: 7, name: 'Payson',        img: '/assets/jt/location-3.png' },
];

export default function ImageSlider() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const handleBeforeInit = (swiper: SwiperType) => {
    if (typeof swiper.params.navigation === 'object' && swiper.params.navigation) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
    }
  };

  return (
    <section className="mt-[-100px] pr-[10%] pt-40 pb-20 overflow-hidden bg-gradient-to-b from-[#0052C6] to-[#002559]">

      <div className="flex items-end justify-center bg-white py-10 rounded-r-3xl gap-2">

        {/* Left Side */}
        <div className="w-[60%] pl-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight font-['Avenir']">
            JP&amp;G Locations
          </h2>
          <p className="text-md text-gray-500 leading-relaxed mb-8 pr-[30%]">
            We have stores scattered throughout Utah. Check out
            the products and information for the store nearest you!
          </p>
          <div className="flex gap-3">
            <button
              ref={prevRef}
              className="w-11 h-11 rounded-full bg-[#6dcab3] hover:bg-[#4aaa93] 
                         flex items-center justify-center transition-colors cursor-pointer"
            >
              <svg className="w-8 h-8 stroke-black fill-none" strokeWidth={1.2} viewBox="0 0 24 24">
                <polyline points="15 18 9 12 15 6" /> 
              </svg>
            </button>
            <button
              ref={nextRef}
              className="w-11 h-11 rounded-full bg-[#6dcab3] hover:bg-[#4aaa93] 
                         flex items-center justify-center transition-colors cursor-pointer"
            >
              <svg className="w-8 h-8 stroke-black fill-none" strokeWidth={1.2} viewBox="0 0 24 24">
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Side: Swiper */}
        <div className="w-full overflow-hidden">
          <Swiper
            modules={[Navigation]}
            loop={true}
            onBeforeInit={handleBeforeInit}
            slidesPerView={2.3}
            spaceBetween={16}
            breakpoints={{
              640:  { slidesPerView: 1.5 },
              768:  { slidesPerView: 2.3 },
              1024: { slidesPerView: 2 },
              1200: { slidesPerView: 2.5 },
              1300: { slidesPerView: 2.8 },
              1450: { slidesPerView: 3},
            }}
          >
            {locations.map((loc) => (
              <SwiperSlide key={loc.id}>
                <div className="relative rounded-xl overflow-hidden border border-gray-100 bg-white">
                  
                  {/* Image */}
                  <div className="relative w-full h-[450px] lg:h-[400px] md:h-[380px]">
                    <Image
                      src={loc.img}
                      alt={loc.name}
                      fill
                      className="object-center object-fill"
                    />
                  </div>

                  {/* Card Footer */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white/95 rounded-xl px-5 py-4 w-[90%] mx-auto mb-4">
                    <h3 className="font-bold text-gray-900 text-lg mb-1">
                      {loc.name}
                    </h3>
                    <a href="#" className="text-sm text-gray-500 hover:text-[#4aaa93] transition-colors">
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