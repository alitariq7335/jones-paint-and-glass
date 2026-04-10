'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';

type Location = {
  id?: string
  name: string
  image: {
    url: string
    alt?: string
  }
  storeInfoLink: string
}

type ImageSliderBlockProps = {
  heading?: string
  description?: string
  locations?: Location[]
}

export default function ImageSlider({
  heading = 'JP&G Locations',
  description = 'We have stores scattered throughout Utah. Check out the products and information for the store nearest you!',
  locations = [],
}: ImageSliderBlockProps) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const handleBeforeInit = (swiper: SwiperType) => {
    if (typeof swiper.params.navigation === 'object' && swiper.params.navigation) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
    }
  };

  return (
    <section className="mt-[-100px] pr-[10%] pt-40 pb-20 overflow-hidden bg-gradient-to-b from-[#0052C6] to-[#002559]" id='jp-slider'>

      {/* GRID CONTAINER */}
      <div className="grid grid-cols-12 items-end bg-white py-10 rounded-r-3xl gap-6">

        {/* LEFT SIDE */}
        <div className="col-span-12 lg:col-span-5 pl-6 lg:pl-10 pr-6 lg:pr-0">
          <h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-bold text-black mb-4 leading-tight font-['Avenir']">
            {heading}
          </h2>

          <p className="text-[16px] text-gray-500 leading-relaxed mb-8 lg:pr-[20%] font-['Avenir']">
            {description}
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
            modules={[Navigation, Autoplay]}
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
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {locations.map((loc, index) => (
              <SwiperSlide key={loc.id || index}>
                <div className="relative rounded-xl overflow-hidden border border-gray-100 bg-white">

                  {/* IMAGE */}
                  <div className="relative w-full h-[350px] md:h-[380px] lg:h-[420px]">
                    <Image
                      src={loc.image?.url ?? '/assets/jt/location-1.png'}
                      alt={loc.image?.alt ?? loc.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* FOOTER */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white/95 rounded-xl px-5 py-4 w-[90%] mx-auto mb-4 shadow-sm">
                    <h3 className="font-bold text-gray-900 text-[20px] mb-1">
                      {loc.name}
                    </h3>
                    <a
                      href={loc.storeInfoLink}
                      className="text-[16px] text-gray-500 hover:text-gray-700 transition-colors"
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