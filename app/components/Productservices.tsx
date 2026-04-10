'use client'

import { useState } from 'react'
import Image from 'next/image'

const services = [
    {
        id: 1,
        title: 'Paint',
        image: '/assets/jt/paint.png',
        href: '#',
    },
    {
        id: 2,
        title: 'Windows & Glass',
        image: '/assets/jt/win-glass.png',
        href: '#',
    },
    {
        id: 3,
        title: 'Doors',
        image: '/assets/jt/door.png',
        href: '#',
    },
    {
        id: 4,
        title: 'Garage Doors',
        image: '/assets/jt/gar-door.png',
        href: '#',
    },
]
export default function Productservices() {

    return (
        <section className="pt-16 md:pt-24 relative">
            <div
                className="absolute sm:bottom-[-160px] left-0 w-full pointer-events-none z-2" id="service-element"
                style={{
                    backgroundImage: 'url(/assets/jt/elements/paint-1.png)',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'bottom left',
                    height: '100%',
                    transform: 'rotate(0deg)',
                    transformOrigin: 'bottom left',
                }}
            />
            <div
                className="absolute top-[-200px] left-0 w-full pointer-events-none z-2" id="service-element-2"
                style={{
                    backgroundImage: 'url(/assets/jt/elements/paint-1.png)',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'top left',
                    height: '100%',
                    transform: 'rotate(45deg)',
                    transformOrigin: 'top left',
                }}
            />
            <div className="mx-auto container px-0 lg:px-6">
                <div className="flex flex-col xl:flex-row gap-8 md:gap-10 xl:gap-12">

                    {/* Left: Heading + Buttons */}
                    <div className="relative z-2 flex-1 lg:w-full xl:w-80 shrink-0 xl:text-start text-center">
                        <h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-bold text-black mb-4 leading-tight font-['Avenir']">
                            Products & Services
                        </h2>
                        <p className="w-[100%] xl:w-[65%] text-[16px] text-gray-500 leading-relaxed mb-8 xl:px-0 md:px-10 px-2">
                            Paint and glass are in our name, but our offerings expand beyond just that. We also do both commercial and residential doors and garage doors.
                        </p>
                        <div className="relative z-2 flex flex-wrap justify-center xl:justify-start gap-3">
                            <a
                                href="#"
                                className="group inline-flex items-center gap-2 rounded-[8px] bg-[#A5EBCD] px-5 py-3 text-[16px] font-semibold text-black transition-colors"
                            >
                                Get a Quote
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

                    {/* Right: Cards */}
                    <div className="relative z-2 flex-1 w-full">
                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-7 sm:gap-5 xl:gap-7" id='service-cards'>
                            {services.map((service) => (
                                <a
                                    key={service.id}
                                    href={service.href}
                                    className="group bg-[#F0F4FF] rounded-2xl overflow-hidden p-6"
                                >
                                    {/* Image */}
                                    <div className="h-44 md:h-52 overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover rounded-md"
                                        />
                                    </div>

                                    {/* Caption */}
                                    <div className="py-4">
                                        <p className="text-[20px] font-bold text-gray-900 mb-1">{service.title}</p>
                                        <span className="inline-flex items-center gap-1.5 text-[16px] font-bold text-black">
                                            See Options
                                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none">
                                                <path
                                                    d="M5 12h14M13 6l6 6-6 6"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}