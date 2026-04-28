"use client";
import Image from "next/image";

export default function Exteriorhero() {
    return (
        <section className="relative mt-20 w-full bg-white overflow-hidden">

            {/* Text — top left */}
            <div className="container mx-auto relative z-10 px-6 pt-15 pb-6 text-center md:text-start">
                <h1 className="text-[52px] md:text-[64px] font-extrabold leading-tight mb-4 font-['Avenir']">
                    Exterior Paint
                </h1>
                <p className="text-[24px] leading-relaxed max-w-2xl">
                    Not all paint is the same. Exterior paint has characteristics that make it better suited for outdoor environments and surfaces.
                </p>
            </div>

            {/* Image with fade-to-white on top and left */}
            <div className="relative w-full h-120 md:h-147.5">
                <Image
                    src="/assets/jt/exterior-hero.png"
                    alt="Exterior Paint"
                    fill
                    className="object-cover object-center"
                    priority
                />
            </div>

        </section>
    );
}