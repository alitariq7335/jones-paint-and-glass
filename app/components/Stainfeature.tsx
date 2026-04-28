"use client";
import Image from "next/image";

export default function Stainfeature() {
    return (
        <section className="relative py-14 md:py-20 bg-white overflow-hidden">

            {/* Paint splash — left */}
            <div
                className="pointer-events-none absolute top-20 md:-top-30 left-0 w-full h-64 md:h-200 z-0"
                style={{
                    backgroundImage: "url(/assets/jt/elements/paint-18.png)",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top left",
                }}
            />

            <div className="container mx-auto px-4 lg:px-6 relative z-10">

                {/* Header — centered */}
                <div className="text-center mb-8">
                    <p className="text-[16px] font-bold tracking-[0.18em] text-[#0052C6] uppercase mb-3">
                        Featured Brand
                    </p>
                    <h2 className="text-[36px] md:text-[48px] font-extrabold font-['Avenir']">
                        Meoded Paint &amp; Plaster
                    </h2>
                </div>

                {/* Card — centered, max width */}
                <div className="mx-auto max-w-2xl">
                    <div
                        className="rounded-[16px] overflow-hidden bg-[#F8F9FC] p-6 flex flex-col gap-5">
                        {/* Brand image / logo area */}
                        <div className="w-full overflow-hidden flex items-center justify-center">
                            <Image
                                src="/assets/jt/finishes.png"
                                alt="Meoded Paint & Plaster"
                                width={400}
                                height={225}
                                className="w-full h-full object-cover rounded-[16px] "
                            />
                        </div>

                        {/* Description */}
                        <p className="text-[16px] md:text-[18px] leading-relaxed">
                            Handcrafted with the utmost care, using premium ingredients to enhance spaces with sophisticated depth and texture. These architectural finishes provide the perfect stage for your own story.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}