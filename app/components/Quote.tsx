"use client";
import { useState } from "react";

export default function Quote() {
    const [agreed, setAgreed] = useState(false);
    const [country, setCountry] = useState("US");

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-transparent overflow-hidden">

            {/* Paint splash — top right */}
      <div
        className="absolute md:top-[-100px] left-0 w-full pointer-events-none z-2"
        style={{
          backgroundImage: "url(/assets/jt/elements/paint-7.png)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top right",
          height: "80%",
          transform: "rotate(0deg)",
          transformOrigin: "top right",
        }}
      />

            {/* Paint splash — bottom left */}
      <div
        className="absolute md:bottom-[-150px] left-0 w-full pointer-events-none z-2"
        style={{
          backgroundImage: "url(/assets/jt/elements/paint-6.png)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom left",
          height: "80%",
          transform: "rotate(0deg)",
          transformOrigin: "bottom left",
        }}
      />
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-26 text-center relative z-10">
                Get a Quote
            </h2>

            {/* Form Card */}
            <div
                className="relative z-10 w-full max-w-2xl rounded-2xl p-6 md:p-12"
                style={{
                    background: "linear-gradient(180deg, #0052C6 28.46%, #002559 100%)",
                }}
            >
                {/* First + Last name */}
                <div className="flex gap-3 mb-4">
                    <div className="flex-1">
                        <label className="block text-white text-[16px] font-extralight mb-2">First name</label>
                        <input
                            type="text"
                            placeholder="First name"
                            className="w-full bg-white rounded-lg px-3 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-300"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-white text-[16px] font-medium mb-2">Last name</label>
                        <input
                            type="text"
                            placeholder="Last name"
                            className="w-full bg-white rounded-lg px-3 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-300"
                        />
                    </div>
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="block text-white text-[16px] font-medium mb-2">Email</label>
                    <input
                        type="email"
                        placeholder="you@company.com"
                        className="w-full bg-white rounded-lg px-3 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-300"
                    />
                </div>

                {/* Phone */}
                <div className="mb-4">
                    <label className="block text-white text-[16px] font-medium mb-2">Phone number (optional)</label>
                    <div className="flex gap-2">
                        <select
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            className="bg-white rounded-lg px-2 py-3 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-blue-300 w-20"
                        >
                            <option value="US">US</option>
                            <option value="UK">UK</option>
                            <option value="PK">PK</option>
                            <option value="CA">CA</option>
                            <option value="AU">AU</option>
                        </select>
                        <input
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            className="flex-1 bg-white rounded-lg px-3 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-300"
                        />
                    </div>
                </div>

                {/* Location / Store */}
                <div className="mb-4">
                    <label className="block text-white text-[16px] font-medium mb-2">Where are you located?</label>
                    <select className="w-full bg-white rounded-lg px-3 py-3 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-blue-300 appearance-none">
                        <option value="">Select a store</option>
                        <option value="store1">Store 1 — Downtown</option>
                        <option value="store2">Store 2 — Uptown</option>
                        <option value="store3">Store 3 — Eastside</option>
                    </select>
                </div>

                {/* Message */}
                <div className="mb-5">
                    <label className="block text-white text-[16px] font-medium mb-2">Message</label>
                    <textarea
                        rows={4}
                        className="w-full bg-white rounded-lg px-3 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-300 resize-none"
                    />
                </div>

                {/* Checkbox */}
                <label className="flex items-center gap-2 mb-10 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={agreed}
                        onChange={() => setAgreed(!agreed)}
                        className="w-4 h-4 rounded accent-blue-400 cursor-pointer"
                    />
                    <span className="text-white text-[16px]">
                        You agree to our friendly{" "}
                        <a href="#" className="underline hover:text-blue-200 transition-colors">
                            privacy policy
                        </a>
                        .
                    </span>
                </label>

                {/* Submit */}
                <button
                    // disabled={!agreed}
                    className="group w-full bg-white text-[#0052C6] font-semibold text-sm py-3 rounded-[8px] hover:bg-blue-50 transition-colors disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                >
                    Get Quote
                     <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
                </button>
            </div>
        </section>
    );
}