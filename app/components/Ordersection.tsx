'use client'

import Image from 'next/image'

const cards = [
    {
        id: 1,
        image: '/assets/jt/diy-5.png',
        title: 'Custom Solutions',
        desc: "When you have a custom DIY project, you can't always find what you're looking for with pre-stocked items. Let us know what you need, and we'll get it made.",
    },
    {
        id: 2,
        image: '/assets/jt/diy-5.png',
        title: 'Expert Knowledge',
        desc: "Let our experience save you time, energy and frustration. Even if you know what you're doing, we can point you right to the products you're looking for and get you the best deal.",
    },
    {
        id: 3,
        image: '/assets/jt/diy-5.png',
        title: 'Local Business',
        desc: "We live and operate where you do. That means we know the climate, location, and people where we do business. Come chat with people who want the best for our community.",
    },
]

export default function Ordersection() {
    return (
        <section
            className="relative overflow-hidden py-14 md:py-20 bg-gradient-to-t from-[#002559] to-[#0052C6]" >
            {/* Paint splash — top right */}
            <div
                className="pointer-events-none absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 z-0"
                style={{
                    backgroundImage: 'url(/assets/jt/elements/paint-blue-light.png)',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'top right',
                    opacity: 0.4,
                }}
            />

            <div className="container mx-auto px-4 lg:px-6 relative z-10">

                {/* Heading */}
                <h2 className="text-[28px] md:text-[36px] lg:text-[48px] font-extrabold text-white leading-tight font-['Avenir']">
                    Online Ease vs. In-Store Expertise
                </h2>

                {/* Subtitle */}
                <p className="text-white/80 text-[18px] lg:text-[24px] leading-relaxed py-10 md:py-16">
                    Ordering online is fast, but it leads to lots of redo’s when you don’t know quite what you need. We sell our products in-store. It takes a bit more time, but a chat with our friendly experts will actually save you time in the long run!
                </p>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className="bg-white rounded-[16px] overflow-hidden flex flex-col p-5"
                        >
                            {/* Image */}
                            <div className="w-full rounded-[8px] aspect-video bg-blue-50 overflow-hidden">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    width={400}
                                    height={180}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Text */}
                            <div className="flex flex-col gap-2 pt-4 text-center lg:text-start">
                                <h3 className="text-[16px] md:text-[18px] lg:text-[24px] font-bold text-gray-900">
                                    {card.title}
                                </h3>
                                <p className="text-[14px] text-gray-500 leading-relaxed">
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}