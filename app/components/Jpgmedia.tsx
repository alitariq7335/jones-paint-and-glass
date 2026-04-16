import Image from "next/image";

const mediaItems = [
  {
    id: 1,
    image: "/assets/jt/media-1.png",
    alt: "Paint",
    helpText: "Help Me With",
    title: "Paint",
    href: "#",
  },
  {
    id: 2,
    image: "/assets/jt/media-2.png",
    alt: "Glass",
    helpText: "Help Me With",
    title: "Glass",
    href: "#",
  },
  {
    id: 3,
    image: "/assets/jt/media-3.png",
    alt: "Doors",
    helpText: "Help Me With",
    title: "Doors",
    href: "#",
  },
];

export default function Jpgmedia() {
  return (
    <section className="container mx-auto w-full px-4 md:px-10 py-10 sm:py-12 md:py-16">

      {/* Heading */}
      <h2
        className="font-bold text-black mb-8 sm:mb-10"
        style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
      >
        JP&amp;G Media
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {mediaItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className="group bg-[#F8F9FC] rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-300"
          >
            {/* Image */}
            <div className="relative w-full h-[200px] sm:h-[220px] md:h-[260px] lg:h-[300px] overflow-hidden">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Footer */}
            <div className="px-5 py-4">
              <p
                className="text-gray-500 mb-1"
                style={{ fontSize: "clamp(12px, 1.2vw, 14px)" }}
              >
                {item.helpText}
              </p>
              <p
                className="font-semibold text-[#0052C6]"
                style={{ fontSize: "clamp(16px, 1.8vw, 22px)" }}
              >
                {item.title}
              </p>
            </div>
          </a>
        ))}
      </div>

    </section>
  );
}