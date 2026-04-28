"use client";
import Image from "next/image";

const products = [
    {
        id: 1,
        tag: "PREP",
        title: "Prep & Repair Supplies",
        subtitle: "Good prep is the secret to getting the best result.",
        image: "/assets/jt/exterior-ser-1.png",
        imageLeft: true,
        items: [
            "Caulk & Sealants",
            "Patch Products",
            "Cleaners",
            "Tape & Drop Cloths",
            "Putty & Scrapers",
        ],
    },
    {
        id: 2,
        tag: "PREP",
        title: "Primers & Sealers",
        subtitle: "Some exterior paints come with primer mixed in, while others need a separate layer.",
        image: "/assets/jt/exterior-ser-2.png",
        imageLeft: false,
        items: [
            "Stain-Blocking",
            "Masonry/Stucco",
            "Rust Resistance",
            "Wood Sealant",
        ],
    },
    {
        id: 3,
        tag: "PAINT",
        title: "Exterior Paint",
        subtitle: "We've got the perfect color and style for your project.",
        image: "/assets/jt/exterior-ser-3.png",
        imageLeft: true,
        items: [
            "Siding & Trim",
            "Masonry & Stucco",
            "Barn & Outbuilding",
            "Metal",
            "Spray-Ready",
            "Deck & Fence",
        ],
    },
    {
        id: 4,
        tag: "Application",
        title: "Tools & Applicators",
        subtitle: "All you need to get your paint where you need it to go.",
        image: "/assets/jt/exterior-ser-4.png",
        imageLeft: false,
        items: [
            "Brushes",
            "Rollers",
            "Trays & Liners",
            "Paint Mixers",
        ],
    },
    {
        id: 5,
        tag: "Finish",
        title: "Stains & Specialty Coatings",
        subtitle: "The finishing touches to complete your project.",
        image: "/assets/jt/exterior-ser-5.png",
        imageLeft: true,
        items: [
            "Weatherproofing & Protection",
            "Waterproofing & Sealants",
            "UV-Protection",
            "Wood Stains",
            "Energy-Saving",
            "Garage Floor Coating",
        ],

    },
];

export default function Exteriorservices() {
    return (
        <section className="relative py-14 md:py-20 bg-white overflow-hidden">

            {/* Paint splash — top right */}
            <div
                className="pointer-events-none absolute top-60 lg:top-10 right-0 w-full h-56 lg:h-120 z-0"
                style={{
                    backgroundImage: "url(/assets/jt/elements/paint-17.png)",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top right",
                }}
            />

            <div className="container mx-auto px-4 lg:px-6 relative z-10">

                {/* Header */}
                <div className="mb-20 text-center lg:text-start">
                    <p className="text-[16px] font-bold tracking-[0.18em] text-[#0052C6] uppercase mb-2">
                        Exterior Paint
                    </p>
                    <h2 className="text-[36px] md:text-[48px] font-extrabold mb-3 font-['Avenir']">
                        Products &amp; Services
                    </h2>
                    <p className="text-[18px] leading-relaxed mx-auto lg:mx-0 max-w-xl mb-5">
                        Whether you know exactly what you're looking for or need a little guidance, Jones Paint &amp; Glass has what you need.
                    </p>
                    <a
                        href="#"
                        className="group inline-flex items-center gap-2 bg-[#0052C6] transition-colors text-white font-bold text-[16px] px-5 py-3 rounded-[8px]"
                    >
                        Get a Quote
                        <svg
                            className="w-4 h-4 transition-transform duration-300 text-white group-hover:translate-x-1"
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
                </div>

                {/* Product rows */}
                <div className="flex flex-col gap-6">
                    {products.map((p) => (
                        <div
                            key={p.id}
                            className={`flex flex-col ${p.imageLeft ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 overflow-hidden`}>
                            {/* Image */}
                            <div className="w-full lg:w-[48%] flex-shrink-0">
                                <div className="w-full h-full bg-[#EEF4FB] overflow-hidden">
                                    <Image
                                        src={p.image}
                                        alt={p.title}
                                        width={600}
                                        height={400}
                                        className="w-full h-full object-cover rounded-[16px]"
                                    />
                                </div>
                            </div>

                            {/* Text */}
                            <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                                <p className="text-[16px] font-bold tracking-[0.18em] text-[#0052C6] uppercase mb-2">
                                    {p.tag}
                                </p>
                                <h3 className="text-[38px] font-extrabold mb-2 font-['Avenir']">
                                    {p.title}
                                </h3>
                                <p className="text-[#0052C6] text-[24px] leading-relaxed mb-4 w-[80%]">
                                    {p.subtitle}
                                </p>
                                <ul className="list-disc pl-6 space-y-1">
                                    {p.items.map((item, i) => (
                                        <li key={i} className="text-[18px] leading-relaxed">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}