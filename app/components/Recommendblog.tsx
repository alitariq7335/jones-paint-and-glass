"use client";
import Image from "next/image";

const posts = [
    {
        id: 1,
        keyword: "Keyword",
        readTime: "5 min read",
        title: "Blog Title",
        summary: "Summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius elementum tristique. Duis cursus, mi quis viverra ut commodo diam libero vitae erat.",
        image: "/assets/jt/blog-img.png",
        href: "#",
    },
    {
        id: 2,
        keyword: "Keyword",
        readTime: "5 min read",
        title: "Blog Title",
        summary: "Summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius elementum tristique. Duis cursus, mi quis viverra ut commodo diam libero vitae erat.",
        image: "/assets/jt/blog-img.png",
        href: "#",
    },
    {
        id: 3,
        keyword: "Keyword",
        readTime: "5 min read",
        title: "Blog Title",
        summary: "Summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius elementum tristique. Duis cursus, mi quis viverra ut commodo diam libero vitae erat.",
        image: "/assets/jt/blog-img.png",
        href: "#",
    },
];

export default function Recommendblog() {
    return (
        <section className="relative py-14 md:py-20 bg-white">
            <div className="container mx-auto px-4 lg:px-6">

                {/* Header */}
                <p className="text-[16px] font-extrabold tracking-[0.12em] text-[#0052C6] uppercase mb-2 font-['Avenir']">
                    Read More
                </p>
                <h2 className="text-[32px] md:text-[44px] font-extrabold mb-10 font-['Avenir']">
                    Recommended for You
                </h2>

                {/* Cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                    {posts.map((post) => (
                        <div key={post.id} className="flex flex-col gap-3">

                            {/* Image */}
                            <div className="w-full h-[250px] aspect-video rounded-[8px] overflow-hidden bg-[#EEF4FB] mb-3">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    width={400}
                                    height={225}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Keyword + read time */}
                            <div className="flex items-center gap-4 mb-3">
                                <span className="text-[16px] font-semibold bg-gray-100 px-2.5 py-1">
                                    {post.keyword}
                                </span>
                                <span className="text-[16px] font-semibold text-black">{post.readTime}</span>
                            </div>

                            {/* Title */}
                            <h3 className="text-[24px] font-extrabold font-['Avenir']">
                                {post.title}
                            </h3>

                            {/* Summary */}
                            <p className="text-[16px] leading-relaxed mb-2">
                                {post.summary}
                            </p>

                            {/* Read On link */}

                            <a href={post.href}
                                className="inline-flex items-center gap-1.5 text-[#0052C6] font-semibold text-[16px] group w-fit">
                                Read On
                                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>

                        </div>
                    ))}
                </div>

            </div>
             {/* Background shape */}
      <div
        className="pointer-events-none absolute -bottom-30 md:-bottom-50 left-0 w-45 h-45 md:w-75 md:h-75 z-0 md:z-3"
        style={{
          backgroundImage: "url(/assets/jt/elements/paint-20.png)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom left",
        }}
      />
        </section>
    );
}