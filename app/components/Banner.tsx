import React from 'react'

export default function Banner() {
    return (
        <section className="container mx-auto bg-[#0052C6] rounded-[16px] px-6 sm:px-8 md:px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-10">
                {/* Text */}
                <p
                    className="text-white font-semibold text-center leading-[1.1em] sm:text-left text-[38px]">
                    Looking for garage doors?
                </p>

                {/* CTA Button */}
                <a
                    href="#"
                    className="group inline-flex items-center gap-1 bg-[#A5EBCD] text-blaxk font-semibold rounded-[8px] px-4 py-3 transition-colors duration-200 whitespace-nowrap shrink-0 text-[16px]">
                    See Garage Doors
                    <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M5 12h14M13 6l6 6-6 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </a>

        </section>
    );
}