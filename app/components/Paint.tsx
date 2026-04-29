"use client";
import Image from "next/image";

const features = [
    {
        id: 1,
        title: "Durability & Weather Resistance",
        paragraphs: [
            "Exterior paint is formulated to withstand sunlight, rain, wind, temperature swings, and moisture. It contains additives that help it resist fading, cracking, mildew, and UV damage, which isn't necessary for most interior paints.",
        ],
        bold: null,
        highlight: true
    },
    {
        id: 2,
        title: "Chemical Composition",
        paragraphs: [
            "To help it withstand outdoor conditions, exterior paint contains additives and resins that can be stronger smelling and more irritating to breath around compared to interior paints when first applied.",
        ],
        bold: null,
    },
    {
        id: 3,
        title: "Finish & Appearance",
        paragraphs: [
            "Interior paint is usually better for aesthetics—scrub-ability, stain resistance, and a wide variety of finishes.",
        ],
        bold: "Exterior paint prioritizes protection over cosmetics, so its finishes are more limited and may not be as smooth or refined as interior options.",
    },
];

export default function Paint() {
    return (
        <section className="py-14 md:py-26 bg-white">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 justify-between items-start">

                    {/* ── Left: Text content ── */}
                    <div className="flex-2">
                        <h2 className="text-[38px] font-extrabold text-[#0052C6] mb-8 leading-tight font-['Avenir']">
                            How Exterior Paint Is Different
                        </h2>

                        <div className="flex flex-col gap-8">
                            {features.map((f) => (
                                <div key={f.id} className="flex">
                                    {/* Blue left border */}
                                    {f.highlight && (
                                        <div
                                            className="flex-shrink-0 mt-2.5 h-31.5 w-[6px] self-stretch"
                                            style={{ background: "#0052C6" }}
                                        />
                                    )}
                                    <div>
                                        <h3 className="ml-6 text-[24px] sm:text-[28px] lg:text-[32px] font-extrabold mb-2 font-['Avenir']">
                                            {f.title}
                                        </h3>
                                        {f.paragraphs.map((p, i) => (
                                            <p key={i} className="ml-6 text-[18px] font-light leading-relaxed mb-2">
                                                {p}
                                            </p>
                                        ))}
                                        {f.bold && (
                                            <p className="ml-6 text-[18px] font-bold leading-relaxed">
                                                {f.bold}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── Right: Image ── */}
                    <div className="w-full lg:w-[50%] flex-shrink-0">
                        <div className="overflow-hidden w-full">
                            <Image
                                src="/assets/jt/exterior-paint.png"
                                alt="Exterior Paint House"
                                width={520}
                                height={616}
                                className="w-full lg:w-[600px] h-full sm:h-[580px] lg:h-[630px] rounded-[16px] ml-auto lg:mr-15 xl:mr-20 object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}