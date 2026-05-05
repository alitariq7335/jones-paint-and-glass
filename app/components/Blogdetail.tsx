"use client";
import Image from "next/image";
import Link from "next/link";

type Article = {
  id: number;
  heading: string;
  description: string;
  image: string;
  link?: string;
};

type BlogDetailProps = {
  label?: string;
  heading?: string;
  subheading?: string;
  articles?: Article[];
};

export default function BlogDetail({
  label = "OUR BLOG",
  heading = "The Crash Course",
  subheading = "Jones Paint & Glass Blog",

  articles = [
    {
      id: 1,
      heading: "Article Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ex risus, posuere nec libero ut, varius accumsan velit. Morbi mattis, nisl ac facilisis ornare, risus purus porttitor nunc, at gravida nisi urna vel quam. Ut volutpat, turpis sed tempus lacinia, odio purus eleifend est, quis viverra libero sem porta metus. Sed varius orci et accumsan pretium. Pellentesque ut efficitur elit. In tortor felis, volutpat convallis nulla non, elementum dapibus tu",
      image: "/assets/jt/blog-img.png",
      link: "#",
    },
    {
      id: 2,
      heading: "Article Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ex risus, posuere nec libero ut, varius accumsan velit. Morbi mattis, nisl ac facilisis ornare, risus purus porttitor nunc, at gravida nisi urna vel quam. Ut volutpat, turpis sed tempus lacinia, odio purus eleifend est, quis viverra libero sem porta metus. Sed varius orci et accumsan pretium. Pellentesque ut efficitur elit. In tortor felis, volutpat convallis nulla non, elementum dapibus tu",
      image: "/assets/jt/blog-img.png",
      link: "#",
    },
  ],
}: BlogDetailProps) {
  return (
    <section className="relative mt-20 py-14 md:py-20 bg-white overflow-hidden">

      {/* Background shape */}
      <div
        className="pointer-events-none absolute -top-10 sm:top-35 lg:-top-10 xl:-top-20 2xl:-top-40 right-0 w-56 h-56 lg:w-110 lg:h-150 xl:w-200 xl:h-180 2xl:w-180 2xl:h-250 z-0 md:z-3"
        style={{
          backgroundImage: "url(/assets/jt/elements/paint-19.png)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top right",
        }}
      />

      <div className="container mx-auto px-4 lg:px-6 relative">

        {/* Header */}
        <div className="text-center mb-14 relative z-10">
          <p className="text-[16px] font-bold tracking-[0.18em] text-[#0052C6] uppercase mb-3">
            {label}
          </p>

          <h1 className="text-[32px] md:text-[48px] font-extrabold mb-2 font-['Avenir']">
            {heading}
          </h1>

          <p className="text-[18px] md:text-[28px] font-semibold text-[#0052C6]">
            {subheading}
          </p>
        </div>

        {/* Articles */}
        <div className="flex flex-col gap-12 md:gap-16 relative z-1">

          {articles.map((item, index) => (
            <div
              key={item.id}
              className={`bg-[#F4F7FF] rounded-2xl flex flex-col lg:flex-row px-6 md:px-10 py-8 md:py-10
                ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}
              `}
            >

              {/* Image */}
              <div className="relative w-full lg:w-[50%] h-[280px] md:h-[404px] min-h-[280px]">
                <Image
                  src={item.image}
                  alt={item.heading}
                  fill
                  className="object-cover rounded-[16px]"
                />
              </div>

              {/* Content */}
              <div className="flex w-full lg:w-[50%] flex-col justify-center text-center md:text-left px-2 lg:px-10 py-6 gap-3">

                <h2 className="font-bold text-black text-[24px] md:text-[36px] leading-tight">
                  {item.heading}
                </h2>

                <p className="text-[16px] leading-relaxed">
                  {item.description}
                </p>

                <div>
                  <Link
                    href={item.link || "#"}
                    className="group text-[16px] inline-flex items-center gap-2 text-[#0052C6] font-semibold transition mt-2"
                  >
                    Read More
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
                  </Link>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}