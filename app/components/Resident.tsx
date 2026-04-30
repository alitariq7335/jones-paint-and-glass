"use client";
import Image from "next/image";

const residential = [
    {
        id: 1,
        type: "Type",
        image: "/assets/jt/media-paint.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius elementum tristique. Duis cursus, mi quis viverra ut commodo diam libero vitae erat. Consectetur adipiscing elit.",
    },
    {
        id: 2,
        type: "Type",
        image: "/assets/jt/media-paint.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius elementum tristique. Duis cursus, mi quis viverra ut commodo diam libero vitae erat. Consectetur adipiscing elit.",
    },

];

function TypeCard({ item }: { item: typeof residential[0] }) {
    return (
        <div className="overflow-hidden rounded-b-[16px] flex flex-col bg-[#F8F9FC]">
            {/* Image area */}
            <div className="w-full rounded-t-[16px] overflow-hidden">
                <Image
                    src={item.image}
                    alt={item.type}
                    width={400}
                    height={225}
                    className="w-full h-auto md:h-[250px] lg:h-[400px] object-top object-cover"
                />
            </div>
            {/* Text */}
            <div className="p-6">
                <p className="font-bold text-[18px] mb-5">{item.type}</p>
                <p className="text-[16px] leading-relaxed">{item.desc}</p>
            </div>
        </div>
    );
}

export default function Resident() {
    const count = residential.length;

    const gridClass =
        count === 3
            ? "grid grid-cols-1 md:grid-cols-3 gap-5"
            : count === 2
            ? "grid grid-cols-1 md:grid-cols-2 gap-5"
            : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5";

    return (
        <section className="py-16 md:py-26">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="mb-14">
                    <h2 className="text-[48px] font-extrabold mb-5 font-['Avenir']">
                        Residential
                    </h2>
                    <p className="text-[32px] font-semibold mb-10">
                        Types of Residential Windows
                    </p>
                    <div className={gridClass}>
                        {residential.map((item) => (
                            <TypeCard key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}