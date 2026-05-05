"use client";
import Image from "next/image";

export default function Blogpost() {
    return (
        <article className="py-10 md:py-16 bg-white mt-20">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="mx-auto max-w-7xl">
                    {/* Breadcrumb */}
                    <p className="text-[16px] font-bold tracking-[0.15em] text-[#0052C6] uppercase mb-3">
                        Blog &gt; Category
                    </p>

                    {/* Title */}
                    <h1 className="text-[32px] md:text-[42px] font-extrabold mb-5 font-['Avenir']">
                        Blog Post Title
                    </h1>

                    {/* Author row */}
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-[13px] font-semibold">Sarah Johnson</p>
                                <p className="text-[11px]">Date • 5 min read</p>
                            </div>
                        </div>

                        {/* Social icons */}
                        <div className="flex items-center gap-2">
                            {/* LinkedIn */}
                            <a href="#" className="w-7 h-7 rounded flex items-center justify-center bg-[#0077B5] hover:opacity-80 transition-opacity">
                                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
                            </a>
                            {/* Facebook */}
                            <a href="#" className="w-7 h-7 rounded flex items-center justify-center bg-[#1877F2] hover:opacity-80 transition-opacity">
                                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                            </a>
                            {/* Instagram */}
                            <a href="#" className="w-7 h-7 rounded flex items-center justify-center bg-[#E1306C] hover:opacity-80 transition-opacity">
                                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="white" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" strokeWidth="2" /></svg>
                            </a>
                            {/* X / Twitter */}
                            <a href="#" className="w-7 h-7 rounded flex items-center justify-center bg-black hover:opacity-80 transition-opacity">
                                <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.261 5.635L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Hero image */}
                <div className="w-full aspect-video rounded-2xl overflow-hidden bg-[#EEF4FB] mb-10 flex items-center justify-center">
                    <Image
                        src="/assets/jt/blog/hero.png"
                        alt="Blog Hero"
                        width={800}
                        height={450}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="mx-auto max-w-7xl">



                {/* Content block 1 */}
                <h2 className="text-[22px] md:text-[26px] font-extrabold text-gray-900 mb-4 font-['Avenir']">
                    Header
                </h2>
                <p className="text-gray-600 text-[14px] md:text-[15px] leading-relaxed mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis malesuada pellentesque. Etiam est turpis, lobortis nec consequat id, commodo vel libero. Maecenas volutpat nibh eget dolor pharetra, quis fringilla velit ultrices. Nulla rutrum felis sit amet diam viverra sodales. In pulvinar porttitor mauris a blandit. Donec vel diam at purus sodales tristique quis sit amet ipsum. Duis egestas molla volutpat. In id leo finibus, sollicitudin est quis, consequat odio. Nullam suscipit suscipit quam, at sagittis odio hendrerit et. Proin cursus purus nisl, eget feugiat justo malesuada nec. Cras quis mauris ligula. Phasellus commodo ligula et leo pharetra, eget ultrices ipsum scelerisque.
                </p>
                <p className="text-gray-600 text-[14px] md:text-[15px] leading-relaxed mb-4">
                    Vestibulum ac consequat ex, et efficitur justo. Ut eu tortor eget augue viverra blandit. Pellentesque viverra, leo a semper lacinia, lacus diam dignissim lacus, et semper mauris ipsum et mi. Curabitur vulputate magna tincidunt, fermentum ex at, iaculis neque. Nunc at erat sollicitudin, viverra tellus vel, iaculis mi. Cras at ipsum ac mauris malesuada suscipit ac ut metus. Sed tristique odio eget erat pulvinar, at interdum urna posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed maximus leo id diam accumsan venenatis. Sed non bibendum leo.
                </p>
                <p className="text-gray-600 text-[14px] md:text-[15px] leading-relaxed mb-10">
                    Nulla accumsan pharetra faucibus. Donec in velit diam. Sed ut molestie est, nec sodales quam. Donec sit amet nisl nec, una pulvinar porttitor. Integer aliquet magna nec diam sollicitudin elementum. Aliquam molestie arcu tellus, ac lacinia ex blandit ut. Duis bibendum molestie augue, sed elementum mauris sollicitudin quis. Ut aliquet auctor dolor a venenatis. Phasellus malesuada pellentesque enim, vel blandit leo egestas sed. Fusce sed malesuada erat. Proin consequat tortor mi, sit amet suscipit magna rutrum id. Duis semper eros a quam volutpat sagittis. Donec vitae arcu vitae metus sodales lacinia a auctor luctus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec auctor tellus sit amet commodo facilisis. Nulla
                </p>

                {/* Inline image */}
                <div className="w-full aspect-video rounded-2xl overflow-hidden bg-[#EEF4FB] mb-10 flex items-center justify-center">
                    <Image
                        src="/assets/jt/blog/inline.png"
                        alt="Inline"
                        width={800}
                        height={450}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Blockquote */}
                <blockquote
                    className="rounded-xl px-6 py-5 mb-10 text-[16px] leading-relaxed">
                    "Ipsum sit mattis nulla quam nam. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sim tempor. Diam est, orci, tincidunt aenean tempus."
                </blockquote>

                {/* Content block 2 */}
                <h2 className="text-[22px] md:text-[26px] font-extrabold text-gray-900 mb-4 font-['Avenir']">
                    Header
                </h2>
                <p className="text-gray-600 text-[14px] md:text-[15px] leading-relaxed mb-4">
                    purus nisl, eget feugiat justo malesuada nec. Cras quis mauris ligula. Phasellus commodo ligula et leo pharetra, eget ultrices ipsum scelerisque.
                </p>
                <p className="text-gray-600 text-[14px] md:text-[15px] leading-relaxed mb-4">
                    Vestibulum ac consequat ex, et efficitur justo. Ut eu tortor eget augue viverra blandit. Pellentesque viverra, leo a semper lacinia, lacus diam dignissim lacus, et semper mauris ipsum et mi. Curabitur vulputate magna tincidunt, fermentum ex at, iaculis neque. Nunc at erat sollicitudin, viverra tellus vel, iaculis mi. Cras at ipsum ac mauris malesuada suscipit ac ut metus. Sed tristique odio eget erat pulvinar, at interdum urna posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed maximus leo id diam accumsan venenatis.
                </p>
                <p className="text-gray-600 text-[14px] md:text-[15px] leading-relaxed mb-10">
                    Nulla accumsan pharetra faucibus. Donec in velit diam. Sed ut molestie est, nec sodales quam. Donec sit amet nisl nec, una pulvinar
                </p>

                {/* Share + Keywords row */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-gray-200 mb-10">
                    {/* Share */}
                    <div className="flex items-center gap-3">
                        <span className="text-[13px] font-semibold text-gray-700">Share this post</span>
                        <div className="flex items-center gap-2">
                            <a href="#" className="w-7 h-7 rounded flex items-center justify-center bg-[#0077B5]"><svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg></a>
                            <a href="#" className="w-7 h-7 rounded flex items-center justify-center bg-[#1877F2]"><svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a>
                            <a href="#" className="w-7 h-7 rounded flex items-center justify-center bg-[#E1306C]"><svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="white" /></svg></a>
                            <a href="#" className="w-7 h-7 rounded flex items-center justify-center bg-black"><svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.261 5.635L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg></a>
                        </div>
                    </div>

                    {/* Keywords */}
                    <div className="flex flex-wrap gap-2">
                        {["Keyword", "Keyword", "Keyword", "Keyword"].map((kw, i) => (
                            <span key={i} className="text-[11px] font-semibold text-gray-600 bg-gray-100 px-2.5 py-1 rounded-md">
                                {kw}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Bottom author */}
                <div className="flex items-center gap-3 pt-5 border-t border-gray-200">
                    <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-[13px] font-semibold text-gray-900">Sarah Johnson</p>
                        <p className="text-[11px] text-gray-400">Date • 5 min read</p>
                    </div>
                </div>
                </div>
            </div>
        </article>
    );
}