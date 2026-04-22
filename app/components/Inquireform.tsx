'use client'

import { useState } from 'react'
import Image from 'next/image'
import { text } from 'stream/consumers';

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
export default function Inquireform() {
    const [agreed, setAgreed] = useState(false);
    const [country, setCountry] = useState("US");

    return (
        <section className="py-16 md:py-28 relative overflow-hidden">
            <div
                className="absolute -bottom -[100px] md:-bottom-[150px] left-0 w-full pointer-events-none z-2" id="service-element-9"
                style={{
                    backgroundImage: 'url(/assets/jt/elements/paint-9.png)',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'bottom left',
                    height: '70%',
                    transform: 'rotate(0deg)',
                    transformOrigin: 'bottom left',
                }}
            />
            <div className="mx-auto container px-0 lg:px-6 pb-20">
                <div className="flex flex-col xl:flex-row gap-8 md:gap-10 xl:gap-12">

                    {/* Left: Heading + Buttons */}
                    <div className="relative z-2 flex-1 lg:w-full xl:w-80 shrink-0 xl:text-start text-center">
                        <h2 className="text-[28px] md:text-[34px] lg:text-[48px] font-bold text-black mb-4 leading-tight font-['Avenir']">
                            General Inquiries
                        </h2>
                        <p className="w-[100%] xl:w-[80%] text-[16px] text-gray-500 leading-relaxed mb-8 xl:px-0 md:px-10 px-2">
                            We’d love to hear from you. If you have any questions about our products or services, fill out this form and we’ll get back to you ASAP.
                        </p>
                        <p className="w-[100%] xl:w-[80%] text-[16px] text-gray-500 leading-relaxed mb-8 xl:px-0 md:px-10 px-2">
                            If you have questions regarding a specific project quote, please fill out our <a href="#" style={{ color: '#0052C6', textDecoration: 'underline', }}>Request a Quote </a>form, or visit your local Jones Paint & Glass store.
                        </p>
                        <div className="relative z-2 flex flex-col flex-wrap justify-center xl:justify-start gap-3">
                            <h2 className="text-[28px] md:text-[30px] lg:text-[32px] font-bold text-black mb-4 leading-tight font-['Avenir']">
                                Contact Corporate Office
                            </h2>
                            <a
                                href="tel:8013746711"
                                className="block text-[24px] font-extralight"
                                style={{ color: '#0052C6' }}
                            >
                                801-374-6711
                            </a>
                            <a
                                href="mailto:info@jonespaint.com"
                                className="block text-[24px] font-extralight"
                                style={{ color: '#0052C6' }}
                            >
                                Email
                            </a>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="relative z-2 flex flex-1 w-full px-2 justify-center xl:justify-start" id='inquire-form'>
                        <div
                            className="relative z-10 w-full max-w-2xl rounded-2xl p-6 md:px-15 md:py-10 bg-black">
                            {/* First + Last name */}
                            <div className="flex gap-6 mb-5">
                                <div className="flex-1">
                                    <label className="block text-white text-[18px] font-extralight mb-2">First name</label>
                                    <input
                                        type="text"
                                        // placeholder="First name"
                                        className="w-full bg-white rounded-lg px-3 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-300"
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-white text-[18px] font-extralight mb-2">Last name</label>
                                    <input
                                        type="text"
                                        // placeholder="Last name"
                                        className="w-full bg-white rounded-lg px-3 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-300"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="mb-5">
                                <label className="block text-white text-[18px] font-extralight mb-2">Email</label>
                                <input
                                    type="email"
                                    // placeholder="you@company.com"
                                    className="w-full bg-white rounded-lg px-3 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-300"
                                />
                            </div>

                            {/* Phone */}
                            <div className="mb-5">
                                <label className="block text-white text-[18px] font-extralight mb-2">Phone number (optional)</label>
                                <div className="flex gap-2">
                                    <input
                                        type="tel"
                                        // placeholder="+1 (555) 000-0000"
                                        className="flex-1 bg-white rounded-lg px-3 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-300"
                                    />
                                </div>
                            </div>

                            {/* Location / Store */}
                            <div className="mb-5">
                                <label className="block text-white text-[18px] font-extralight mb-2">Where are you located?</label>
                                <select className="w-full bg-white rounded-lg px-3 py-3 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-blue-300 appearance-none">
                                    <option value="">Select a store</option>
                                    <option value="store1">Store 1 — Downtown</option>
                                    <option value="store2">Store 2 — Uptown</option>
                                    <option value="store3">Store 3 — Eastside</option>
                                </select>
                            </div>

                            {/* Message */}
                            <div className="mb-5">
                                <label className="block text-white text-[18px] font-extralight mb-2">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-white rounded-lg px-3 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-300 resize-none"
                                />
                            </div>

                            {/* Checkbox */}
                            <label className="flex items-center gap-2 mb-10 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={agreed}
                                    onChange={() => setAgreed(!agreed)}
                                    className="w-4 h-4 rounded accent-blue-400 cursor-pointer"
                                />
                                <span className="text-white text-[18px]">
                                    You agree to our friendly{" "}
                                    <a href="#" className="underline hover:text-blue-200 transition-colors">
                                        privacy policy
                                    </a>
                                    .
                                </span>
                            </label>

                            {/* Submit */}
                            <button
                                // disabled={!agreed}
                                className="group w-full bg-white text-black font-semibold text-sm py-3 rounded-[8px] hover:bg-blue-50 transition-colors disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                            >
                                Get Quote
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M5 12h14M13 6l6 6-6 6"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}