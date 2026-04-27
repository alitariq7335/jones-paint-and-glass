"use client";

export default function Contactbanner() {
    return (
        <section className="py-10 md:py-12 bg-[#0052C6]">
            <div className="container mx-auto px-4 lg:px-6">

                <div className="grid md:grid-cols-2 gap-10 items-start text-center md:text-start">

                    {/* Left */}
                    <div className="space-y-3">
                        <p className="text-[14px] md:text-[16px] font-bold text-[#A5EBCD] uppercase tracking-wider">
                            Contact Store
                        </p>

                        <a
                            href="tel:+18017565282"
                            className="text-white text-[24px] font-bold md:text-[32px]"
                        >
                            801-756-5282
                        </a>

                        <address className="not-italic text-white font-extralight text-[18px] md:text-[24px] leading-8 md:leading-10">
                            65 South 500 East <br />
                            American Fork, UT 84003
                        </address>
                    </div>

                    {/* Right */}
                    <div className="space-y-5 flex flex-col justify-center md:justify-start items-center md:items-start text-center md:text-start">
                        <p className="text-[14px] md:text-[16px] font-bold text-[#A5EBCD] uppercase tracking-wider">
                            Store Hours
                        </p>

                        <div className="flex flex-wrap gap-6 md:gap-10 text-center md:text-start">
                            <div className="md:w-auto w-full">
                                <p className="text-white text-[18px] uppercase mb-1">
                                    Mon - Fri
                                </p>
                                <p className="text-white text-[18px]">
                                    7:30 AM - 5:30 PM
                                </p>
                            </div>

                            <div className="md:w-auto w-full">
                                <p className="text-white text-[18px] uppercase mb-1">
                                    Sat
                                </p>
                                <p className="text-white text-[18px]">
                                    8:00 AM - 12:00 PM
                                </p>
                            </div>

                            <div className="md:w-auto w-full">
                                <p className="text-white text-[18px] uppercase mb-1">
                                    Sun
                                </p>
                                <p className="text-white text-[18px]">
                                    Closed
                                </p>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <a
                                href="#"
                                className="group inline-flex items-center gap-2 rounded-[8px] bg-[#A5EBCD] hover:bg-[#8edbb8] px-5 py-3 text-[16px] font-bold text-black transition"
                            >
                                Contact Us
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>

                            <a
                                href="#"
                                className="group inline-flex items-center gap-2 rounded-[8px] border border-white px-5 py-3 text-[16px] font-bold text-white transition"
                            >
                                Get Directions
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}