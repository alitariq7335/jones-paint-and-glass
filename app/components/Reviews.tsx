"use client";
import { useState, useRef, useEffect } from "react";

const reviews = [
    {
        id: 1,
        quote: '"Working with this team was an absolute pleasure.Their expertise and commitment to excellence helped us achieve results beyond our expectations.Highly recommended!"',
        name: "John Doe",
    },
    {
        id: 2,
        quote: '“Their innovative approach and attention to detail have made a significant impact on our business. We’ve seen remarkable growth since implementing their solutions.”',
        name: "Jane Smith",
    },
    {
        id: 3,
        quote: '“Their solutions are not only effective but also easy to implement. Our team has benefitted greatly from their expertise and guidance.”',
        name: "Sarah Johnson",
    },
    {
        id: 4,
        quote: '"Absolutely outstanding service. Every detail was handled with care and professionalism. I would not hesitate to recommend them to anyone."',
        name: "Mike Davis",
    },
    {
        id: 5,
        quote: '"From start to finish, the experience was seamless. The team went above and beyond to ensure we were completely satisfied with the results."',
        name: "Emily Clark",
    },
];

export default function Reviews() {
    const [visible, setVisible] = useState(3);
    const [current, setCurrent] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const max = Math.max(0, reviews.length - visible);

    // Responsive visible count
    useEffect(() => {
        const update = () => {
            if (window.innerWidth >= 1024) setVisible(3);       // lg+
            else if (window.innerWidth >= 768) setVisible(2);   // md
            else setVisible(1);                                  // mobile
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    // Reset current if out of bounds on resize
    useEffect(() => {
        if (current > max) setCurrent(0);
    }, [visible, max]);

    const startAutoPlay = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setCurrent((p) => (p >= max ? 0 : p + 1));
        }, 4000);
    };

    useEffect(() => {
        startAutoPlay();
        return () => clearInterval(intervalRef.current!);
    }, [max]);

    const goTo = (index: number) => {
        setCurrent(index);
        startAutoPlay();
    };

    const prev = () => goTo(current === 0 ? max : current - 1);
    const next = () => goTo(current >= max ? 0 : current + 1);

    const cardWidth = `calc(${100 / visible}% - ${(20 * (visible - 1)) / visible}px)`;

    return (
        <section className="py-14 md:py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 lg:px-6">

                {/* Header row */}
                <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-start md:justify-between gap-6 mb-15">
                    <div>
                        <p className="text-[16px] font-bold tracking-[0.18em] text-[#0052C6] uppercase mb-3">
                            Reviews
                        </p>
                        <h2 className="text-[28px] md:text-[38px] font-extrabold mb-3 font-['Avenir']">
                            Hear What Others Have to Say
                        </h2>
                        <p className="text-[#0052C6] text-[18px] md:text-[24px] leading-relaxed max-w-lg">
                            We are proud to serve our neighbors and help bring their DIY and contractor projects to life!
                        </p>
                    </div>

                    {/* Prev/Next buttons */}
                    <div className="flex items-center gap-3 md:mt-2 flex-shrink-0">
                        <button
                            onClick={prev}
                            className="w-11 h-11 rounded-full flex items-center justify-center transition-colors cursor-pointer"
                            style={{ background: "#A5EBCD" }}
                        >
                            <svg
                                className="w-8 h-8 stroke-black fill-none"
                                strokeWidth={1.2}
                                viewBox="0 0 24 24"
                            >
                                <polyline points="15 18 9 12 15 6" />
                            </svg>
                        </button>
                        <button
                            onClick={next}
                            className="w-11 h-11 rounded-full flex items-center justify-center transition-colors cursor-pointer"
                            style={{ background: "#A5EBCD" }}
                        >
                            <svg
                                className="w-8 h-8 stroke-black fill-none"
                                strokeWidth={1.2}
                                viewBox="0 0 24 24"
                            >
                                <polyline points="9 6 15 12 9 18" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Slider track */}
                <div className="overflow-hidden">
                    <div
                        className="flex gap-5 transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(calc(-${current} * (${100 / visible}%) - ${(current * 20) / visible}px))`,
                        }}
                    >
                        {reviews.map((r) => (
                            <div
                                key={r.id}
                                className="flex-shrink-0 flex flex-col justify-between p-6 rounded-2xl"
                                style={{
                                    width: cardWidth,
                                    background: "#F8F9FC",
                                    minHeight: "320px",
                                }}
                            >
                                <p className="text-[24px] leading-relaxed mb-6 text-center md:text-start">
                                    {r.quote}
                                </p>
                                <div className="flex items-center gap-3 pt-4">
                                    <div className="w-12 h-12 rounded-full bg-[#E2EFFE] flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
                                        </svg>
                                    </div>
                                    <p className="font-normal text-[18px]">{r.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}