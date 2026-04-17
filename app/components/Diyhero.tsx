import React from "react";

export default function Diyhero() {
    return (
        <section className="container mx-auto w-full px-4 sm:px-6 md:px-10 lg:px-16 py-10 sm:py-12 md:py-16">

            {/* Top Two Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-4 sm:mb-5 md:mb-6">

                {/* Card 1 — Blue */}
                <div className="bg-[#0052C6] rounded-2xl px-6 sm:px-8 md:px-10 py-8 sm:py-10 md:py-12">
                    <h2
                        className="text-white font-extrabold leading-tight mb-3 sm:mb-4 font-[Avenir]"
                        style={{ fontSize: "clamp(28px, 3.5vw, 56px)" }}
                    >
                        The Drive to DIY
                    </h2>
                    <p
                        className="w-full lg:w-2/3 text-white/80 leading-relaxed font-[Avenir]"
                        style={{ fontSize: "clamp(16px, 1.4vw, 18px)" }}
                    >
                        There are lots of fantastic reasons to Do-It-Yourself.
                        There are also lots of ways to mess it up...
                    </p>
                </div>

                {/* Card 2 — Black */}
                <div className="bg-[#111111] rounded-2xl px-6 sm:px-8 md:px-10 py-8 sm:py-10 md:py-12">
                    <h2
                        className="text-white font-extrabold leading-tight mb-3 sm:mb-4 font-[Avenir]"
                        style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}
                    >
                        The Team to Help You Do It
                    </h2>
                    <p
                        className="w-full lg:w-2/3 text-white/80 leading-relaxed font-[Avenir]"
                        style={{ fontSize: "clamp(14px, 1.4vw, 18px)" }}
                    >
                        You can do it—we help you get it right the first time.
                        Before you DIY, make sure to JP&G!
                    </p>
                </div>

            </div>

            {/* Bottom Banner */}
            <div className="relative w-full rounded-2xl overflow-hidden min-h-[220px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[360px]">

                {/* Background Image */}
                <img
                    src="/assets/jt/hero-2.png"
                    alt="DIY Banner"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                {/* Gradient Overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(90deg, rgba(255, 255, 243, 0) 28.12%, rgba(211, 191, 150, 0.29) 50.4%, rgba(255, 232, 184, 0.29) 71.88%, rgba(211, 191, 150, 0.29) 100%)",
                    }}
                />
                {/* Dark overlay — subtle */}
                <div className="absolute inset-0 bg-black/10" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-end justify-center sm:justify-end gap-6 sm:gap-8 px-6 sm:px-10 md:px-16 lg:px-20 py-8 sm:py-10 md:py-12">

                    {/* Heading: BEFORE YOU DIY / MAKE SURE YOU JP&G */}
                    <div className="flex items-center gap-3 sm:gap-4">
                        {/* Left: BEFORE YOU DIY */}
                        <div className="text-white">
                            <p className="font-extrabold leading-none" style={{ fontSize: "clamp(11px, 1.5vw, 16px)" }}>
                                BEFORE YOU
                            </p>
                            <p className="font-extrabold leading-none" style={{ fontSize: "clamp(44px, 7vw, 88px)" }}>
                                DIY
                            </p>
                        </div>

                        {/* Right: MAKE SURE YOU JP&G — outlined box */}
                        <div className="flex flex-col items-start gap-2">
                            <div className="text-white ml-4 py-2 px-8 relative">
                                <div className="round-shape bg-white text-white/80 rounded-xl -skew-x-12 w-full h-full absolute top-0 left-0 -z-1"></div>
                                <h3 className="text-xl font-extrabold ml-6">MAKE SURE YOU</h3>
                                <h2 className="text-7xl font-extrabold">JP&G</h2>
                            </div>
                        </div>
                    </div>

                    {/* Buttons Row — below heading */}
                    <div className="flex items-center gap-3 sm:gap-4">
                        {["Get a Quote", "Get a Quote", "Get a Quote"].map((label, i) => (
                            <button
                                key={i}
                                className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded-md transition-colors"
                                style={{ fontSize: "clamp(12px, 1.1vw, 15px)" }}
                            >
                                {label} <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none">
                                                <path
                                                    d="M5 12h14M13 6l6 6-6 6"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                            </button>
                        ))}
                    </div>

                </div>
            </div>


        </section>
    );
}