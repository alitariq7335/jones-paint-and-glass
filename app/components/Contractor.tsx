'use client'

import { useState } from 'react'
import Image from 'next/image'

const faqs = [
    {
        id: 1,
        question: 'What services do you provide for contractors?',
        answer:
            'Our team handles special product requests, commercial paint, glass and doors, and making sure you get your products where you need them to be, without ever having to come into one of our stores.',
        highlight: 'We pretty much do it all!',
    },
    {
        id: 2,
        question: 'What types of contractors do you work with?',
        answer:
            'We work with general contractors, painters, glaziers, builders, and a wide range of trade professionals across the region.',
    },
    {
        id: 3,
        question: 'What brands / projects have you served?',
        answer:
            'We have served hundreds of commercial and residential projects, partnering with top brands in paint, glass, and building materials.',
    },
    {
        id: 4,
        question: 'Can I customize ordering to my project or business needs?',
        answer:
            'Absolutely. We offer custom ordering, bulk pricing, and dedicated account managers to make sure your project runs smoothly.',
    },
]

const images = {
    large: '/assets/jt/ser-1.jpg',
    topRow: [
        {
            src: '/assets/jt/ser-2.jpg',
            hoverSrc: '/assets/jt/ser-2.jpg',
            desc: "Dining Room"
        },
        {
            src: '/assets/jt/ser-4.jpg',
            hoverSrc: '/assets/jt/ser-4.jpg',
            desc: "Open Floor Plan with Mountain View"
        },
        {
            src: '/assets/jt/ser-5.jpg',
            hoverSrc: '/assets/jt/ser-5.jpg',
            desc: "Open Floor Plan with Mountain View"
        },
    ],
    bottomLeft: {
        src: '/assets/jt/ser-3.jpg',
        hoverSrc: '/assets/jt/ser-3.jpg',
        desc: "Open Floor Plan with Mountain View"
    },
    bottomRight: {
        src: '/assets/jt/ser-6.jpg',
        hoverSrc: '/assets/jt/ser-6.jpg',
        desc: "Open Floor Plan with Mountain View"
    },
}

function AccordionItem({
    index,
    question,
    answer,
    highlight,
    isOpen,
    onToggle,
}: {
    index: number
    question: string
    answer: string
    highlight?: string
    isOpen: boolean
    onToggle: () => void
}) {
    return (
        <div className="border-b border-[#A5EBCD]">
            <button
                onClick={onToggle}
                className="flex w-full items-center justify-between gap-4 py-5 text-left cursor-pointer"
            >
                <div className="flex items-center gap-4">
                    <span className="md:text-[20px] text-[18px] font-semibold text-black mt-0.5 shrink-0">
                        {String(index).padStart(2, '0')}
                    </span>
                    <h3 className="md:text-[20px] text-[18px] font-bold text-black font-['Avenir']">{question}</h3>
                </div>
                <span className="shrink-0 text-[#0052C6] text-xl font-light leading-none">
                    {isOpen ? '−' : '+'}
                </span>
            </button>

            <div
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
            >
                <div className="overflow-hidden">
                    <div className="pb-5 pl-10 md:pr-[10%] pr-0 text-md leading-relaxed text-gray-600">
                        {highlight && (
                            <p className="text-[14px] font-semibold text-gray-800 mb-1 font-['Avenir']">{highlight}</p>
                        )}
                        <p className="text-[14px] text-gray-600 font-[Avenir]">{answer}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Contractor() {
    const [openId, setOpenId] = useState<number | null>(1)

    const toggle = (id: number) => {
        setOpenId((prev) => (prev === id ? null : id))
    }

    return (
        <section className="relative z-1 bg-white py-16 md:py-24 overflow-hidden">
            <div
                className="absolute bottom-0 right-0 w-full pointer-events-none" id='contract-element'
                style={{
                    backgroundImage: 'url(/assets/jt/elements/paint-2.png)',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'bottom right',
                    height: '35%',
                    transform: 'rotate(0deg)',
                    transformOrigin: 'bottom right',
                }}
            />
            <div className="mx-auto container px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-10 lg:gap-12">

                    {/* Left: Heading + Buttons */}
                    <div className="lg:w-[40%] w-full text-center lg:text-start">
                        <h2 className="text-[28px] md:text-[34px] lg:text-[48px] font-bold text-black mb-4 leading-tight font-['Avenir']">
                            Contractor Services
                        </h2>
                        <p className="text-[16px] text-gray-500 leading-relaxed mb-8 lg:pr-[20%] pr-0 font-['Avenir']">
                            We’re DIY pros, but we also provide products and services to contractors throughout Utah.
                        </p>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                            <a
                                href="#"
                                className="group inline-flex items-center gap-2 rounded-md bg-[#0052C6] px-5 py-3 text-sm font-semibold text-white hover:bg-black transition-colors"
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
                            <a
                                href="#"
                                className="group inline-flex items-center gap-2 rounded-md border border-2 border-[#0052C6] px-5 py-3 text-sm font-semibold text-[#0052C6] hover:border-black hover:bg-transparent transition-colors"
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

                    {/* Right: Accordion */}
                    <div className="lg:w-[60%] w-full">
                        {faqs.map((faq, i) => (
                            <AccordionItem
                                key={faq.id}
                                index={i + 1}
                                question={faq.question}
                                answer={faq.answer}
                                highlight={faq.highlight}
                                isOpen={openId === faq.id}
                                onToggle={() => toggle(faq.id)}
                            />
                        ))}
                    </div>

                </div>

            </div>
            <div className="bg-white pt-12 px-4 md:px-6">
                <div className="container mx-auto ">
                    <div className="w-full mb-10 sm:mb-20">
                        <h1 className="text-[28px] md:text-[30px] lg:text-[32px] text-center md:text-start font-bold font-['Avenir'] title-font text-black lg:mb-0 mb-4">See What Our Contractors Have Done</h1>
                    </div>
                    {/* Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-4 sm:gap-7 h-fit lg:h-[600px]">

                        {/* Left large image — spans 2 rows */}
                        <div className="relative col-span-1 row-span-2 rounded-2xl overflow-hidden">
                            <img
                                src={images.large}
                                alt="Jones Vinyl Windows"
                                className="w-full h-full object-cover"
                            />
                            {/* Caption overlay */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/80 to-transparent px-2 sm:px-4 pb-5 pt-30 rounded-b-2xl">
                                <div className="mx-auto w-full sm:w-[80%] flex flex-col font-['Avenir']">
                                    <p className="text-black text-[14px] font-bold leading-tight">Jones Vinyl Windows</p>
                                    <p className="text-black/80 text-[14px] mt-0.5">Journey's End: 2024 Parade of Homes</p>
                                </div>
                            </div>
                        </div>

                        {/* Top row — 3 images */}
                        {images.topRow.map((item, i) => (
                            <div key={i} className="relative rounded-2xl overflow-hidden group cursor-pointer">

                                {/* Default image */}
                                <img
                                    src={item.src}
                                    alt={`Gallery image ${i + 2}`}
                                    className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0 absolute inset-0"
                                />
                                {/* Hover image */}
                                <img
                                    src={item.hoverSrc}
                                    alt={`Gallery image ${i + 2} hover`}
                                    className="w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                                />

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end p-4">
                                    <p className="text-black/80 text-[14px] leading-tight mx-auto w-full sm:w-[80%]">{images.bottomRight.desc}</p>
                                </div>
                            </div>
                        ))}

                        {/* Bottom left small image */}
                        <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
                            <img
                                src={images.bottomLeft.src}
                                alt="Gallery image 5"
                                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0 absolute inset-0"
                            />
                            <img
                                src={images.bottomLeft.hoverSrc}
                                alt="Gallery image 5 hover"
                                className="w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end p-4">
                                <p className="text-black/80 text-sm mt-0.5 mx-auto w-full sm:w-[80%]">{images.bottomLeft.desc}</p>
                            </div>
                        </div>

                        {/* Bottom right large image — spans 2 columns */}
                        <div className="relative col-span-2 rounded-2xl overflow-hidden group cursor-pointer">
                            <img
                                src={images.bottomRight.src}
                                alt="Gallery image 6"
                                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0 absolute inset-0"
                            />
                            <img
                                src={images.bottomRight.hoverSrc}
                                alt="Gallery image 6 hover"
                                className="w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end p-4">
                                <p className="text-black/80 text-sm mt-0.5 mx-auto w-full sm:w-[80%]">{images.bottomRight.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}