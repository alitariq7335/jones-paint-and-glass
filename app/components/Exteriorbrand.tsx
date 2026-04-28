"use client";
import Image from "next/image";

const brands = [
    {
        id: 1,
        name: "Benjamin Moore",
        image: "/assets/jt/finishes.png",
        href: "#",
    },
    {
        id: 2,
        name: "PPG Industrial",
        image: "/assets/jt/finishes.png",
        href: "#",
    },
    {
        id: 3,
        name: "Pittsburgh Paint Company",
        image: "/assets/jt/finishes.png",
        href: "#",
    },
    {
        id: 4,
        name: "Dunn Edwards Paints",
        image: "/assets/jt/finishes.png",
        href: "#",
    },
];

export default function Exteriorbrand() {
    return (
        <section className="py-14 md:py-20 bg-white">
            <div className="container mx-auto px-4 lg:px-6">

                {/* Header */}
                <p className="text-[16px] font-bold tracking-[0.18em] text-[#0052C6] uppercase mb-3">
                    Exterior Paint
                </p>
                <h2 className="text-[32px] md:text-[48px] font-extrabold mb-10 font-['Avenir']">
                    Brands We Sell
                </h2>

                {/* Brand cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                    {brands.map((brand) => (
                        <a
                            key={brand.id}
                            href={brand.href}
                            className="flex flex-col gap-3 group rounded-[16px] bg-[#F8F9FC] p-5"
                        >
                            {/* Card image */}
                            <div
                                className="w-full rounded-[16px] overflow-hidden">
                                <Image
                                    src={brand.image}
                                    alt={brand.name}
                                    width={262}
                                    height={348}
                                    className="w-full h-full md:h-[348px] object-cover"
                                />
                            </div>
                            {/* Brand name */}
                            <p className="font-semibold text-[18px] group-hover:text-[#0052C6] transition-colors">
                                {brand.name}
                            </p>
                        </a>
                    ))}
                </div>

                {/* Footnote */}
                <p className="text-center text-[16px] mt-15">
                    *Our Cedar City store does not offer Benjamin Moore paints
                </p>

            </div>
        </section>
    );
}