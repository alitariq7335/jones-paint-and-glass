'use client'

import Image from 'next/image'

const locations = [
    {
        id: 1,
        city: 'American Fork',
        highlight: null,
        services: 'Paint, Glass, Doors',
        image: '/assets/jt/diy-5.png',
        href: '#',
    },
    {
        id: 2,
        city: 'Cedar City',
        highlight: null,
        services: 'Paint, Glass, Doors, Garage Doors',
        image: '/assets/jt/diy-5.png',
        href: '#',
    },
    {
        id: 3,
        city: 'Payson',
        highlight: null,
        services: 'Paint, Glass, Doors',
        image: '/assets/jt/diy-5.png',
        href: '#',
    },
    {
        id: 4,
        city: 'Provo',
        highlight: 'Paint',
        services: 'Paint, Auto Paint',
        image: '/assets/jt/diy-5.png',
        href: '#',
    },
    {
        id: 5,
        city: 'Provo',
        highlight: 'Glass',
        services: 'Glass, Doors',
        image: '/assets/jt/diy-5.png',
        href: '#',
    },
    {
        id: 6,
        city: 'Roosevelt',
        highlight: null,
        services: 'Paint, Glass, Auto Glass, Doors, Garage Doors',
        image: '/assets/jt/diy-5.png',
        href: '#',
    },
    {
        id: 7,
        city: 'St. George',
        highlight: null,
        services: 'Paint, Auto Paint, Glass, Auto Glass, Doors, Garage Doors',
        image: '/assets/jt/diy-5.png',
        href: '#',
    },
    {
        id: 8,
        city: 'Vernal',
        highlight: null,
        services: 'Paint, Glass, Auto Glass, Doors, Garage Doors',
        image: '/assets/jt/diy-5.png',
        href: '#',
    },
]

export default function Aboutlocation() {
    return (
        <section className="relative py-16 md:py-24 bg-white overflow-hidden">

            {/* Paint splash — top left */}
            <div
                className="absolute md:top-[-150px] left-0 w-full pointer-events-none z-2"
                style={{
                    backgroundImage: "url(/assets/jt/elements/paint-11.png)",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top left",
                    height: "70%",
                    transform: "rotate(0deg)",
                    transformOrigin: "top left",
                }}
            />

            <div className="container mx-auto px-4 lg:px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-[32px] md:text-[44px] font-extrabold text-gray-900 mb-3 font-['Avenir']">
                        JP&amp;G Locations
                    </h2>
                    <p className="text-gray-500 text-[14px] md:text-[16px] max-w-md mx-auto leading-relaxed">
                        We have stores scattered throughout Utah. Check out the products and information for the store nearest you!
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {locations.map((loc) => (
                        <div
                            key={loc.id}
                            className="bg-[#F8F9FC] rounded-[16px] overflow-hidden flex flex-col p-5"
                            style={{ boxShadow: '0 2px 12px rgba(0,82,198,0.06)' }}
                        >
                            {/* Store image */}
                            <div className="relative w-full h-[225px] bg-blue-50 overflow-hidden rounded-[8px]">
                                <Image
                                    src={loc.image}
                                    alt={`${loc.city} ${loc.highlight ?? ''} store`}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Card body */}
                            <div className="flex flex-col gap-1 flex-1 pt-4 text-center lg:text-start">
                                {/* City name — highlight word in blue */}
                                <h3 className="text-[16px] md:text-[20px] font-bold text-gray-900">
                                    {loc.highlight ? (
                                        <>
                                            {loc.city}{' '}
                                            <span style={{ color: '#0052C6' }}>{loc.highlight}</span>
                                        </>
                                    ) : (
                                        loc.city
                                    )}
                                </h3>

                                {/* Services */}
                                <p className="text-[14px] text-black leading-snug font-bold flex-1 pr-2 lg:pr-6 xl:pr-15">
                                    {loc.services}
                                </p>

                                {/* Store Info link */}
                                <a
                                    href={loc.href}
                                    className="group inline-flex items-center gap-1 text-[16px] font-semibold text-gray-800 mt-3 mx-auto lg:mx-0"
                                >
                                    Store Info
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
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}