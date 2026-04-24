'use client'

import Image from 'next/image'

export default function Paintabouthero() {
  return (
    <section className="relative py-16 md:py-24 bg-white">

      {/* Paint splash — bottom right */}
      <div
        className="hidden lg:block absolute lg:-bottom-[220px] left-0 w-full pointer-events-none mix-blend-multiply z-2"
        style={{
          backgroundImage: "url(/assets/jt/elements/paint-10.png)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom right",
          height: "60%",
          transform: "rotate(0deg)",
          transformOrigin: "bottom right",
        }}
      />

      <div
        className="block lg:hidden absolute bottom-[450px] md:bottom-[300px] left-0 w-full pointer-events-none mix-blend-multiply z-2"
        style={{
          backgroundImage: "url(/assets/jt/elements/paint-10.png)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom right",
          height: "30%",
          transform: "rotate(0deg)",
          transformOrigin: "bottom right",
        }}
      />

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-15">

          {/* ── Left: Image ── */}
          <div className="w-full lg:w-[50%] relative h-[300px] md:h-[400px] lg:h-[500px]">
            <Image
              src="/assets/jt/hero-3.png"
              alt="Paint brush on paint can"
              fill
              className="object-cover object-center rounded-xl"
              priority
            />
          </div>

          {/* ── Right: Text ── */}
          <div className="flex-1 max-w-xl">
            <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-extrabold text-black mb-6 leading-tight font-['Avenir']">
              Our Story
            </h2>

            <p className="text-[16px] md:text-[18px] text-gray-600 leading-relaxed mb-5">
              From a shoestring vision in 1938 to a trusted regional home improvement authority,
              Jones Paint & Glass was born when Harold Jones's parents put their own furniture
              up as collateral for a loan so he could chase an idea—a company built on grit,
              service, and quality that outlasted the Great Depression and every competitor who underestimated it.
            </p>

            <p className="text-[16px] md:text-[18px] text-gray-600 leading-relaxed">
              Across four generations of the Jones family and over 85 years in business, the company
              hasn't just grown—it's become a trusted partner in every project big and small,
              turning first-time customers into lifelong advocates with quality you can see,
              service you can count on, and a reputation that resonates every time glass breaks
              or walls need a fresh start.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}