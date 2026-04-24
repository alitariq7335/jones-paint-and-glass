'use client';
import { useState, useRef } from 'react';

interface FaqItem {
  id?: string
  question: string
  answer: string | React.ReactNode
}

interface FaqsBlockProps {
  heading?: string
  subheading?: string
  buttonText?: string
  buttonLink?: string
  faqs?: FaqItem[]
}

function AccordionItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: FaqItem
  isOpen: boolean
  onToggle: () => void
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="rounded-[16px] overflow-hidden transition-colors duration-300"
      style={{
        border: isOpen ? 'none' : '2px solid #0052C6',
        background: isOpen ? '#0052C6' : 'white',
      }}
    >
      {/* Question */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 cursor-pointer"
      >
        <span
          className="text-[18px] leading-snug transition-colors duration-300"
          style={{ color: isOpen ? 'white' : '#111827' }}
        >
          {faq.question}
        </span>

        <span
          className="flex-shrink-0 w-7 h-7 flex items-center justify-center"
          style={{ color: isOpen ? 'white' : '#0052C6' }}
        >
          {isOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 5v14M5 12h14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </span>
      </button>

      {/* Answer */}
      <div
        style={{
          height:
            isOpen && contentRef.current
              ? contentRef.current.scrollHeight + 'px'
              : '0px',
          overflow: 'hidden',
          transition: 'height 0.35s ease, opacity 0.3s ease',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div
          ref={contentRef}
          className="px-6 pb-6 text-[16px] leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.88)' }}
        >
          {faq.answer}
        </div>
      </div>
    </div>
  );
}

export default function Faqs({
  heading = 'Got Questions? We\'ve Got Answers',
  subheading,
  buttonText = 'Ask Us Directly',
  buttonLink = '#',
  faqs = [],
}: FaqsBlockProps) {
  // Don't render if no FAQs provided
  if (!faqs || faqs.length === 0) {
    return null
  }

  const [openId, setOpenId] = useState<string | number | null>(0);

  const toggle = (id: string | number | undefined) => {
    if (id !== undefined) {
      setOpenId((prev) => (prev === id ? null : id));
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute -top-15 left-0 w-full pointer-events-none z-2"
        id="accordian-element"
        style={{
          backgroundImage: 'url(/assets/jt/elements/paint-12.png)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top left',
          height: '750px',
        }}
      />

      {/* Heading */}
      <h2 className="text-[36px] lg:text-[48px] font-extrabold text-center mb-10 leading-tight font-['Avenir']">
        {heading}
      </h2>

      {/* Subheading */}
      {subheading && (
        <p className="text-center text-[18px] text-gray-600 mb-6 max-w-2xl px-4 font-['Avenir']">
          {subheading}
        </p>
      )}

      {/* Button */}
      <a
        href={buttonLink}
        className="group inline-flex items-center gap-2 rounded-[8px] bg-[#A5EBCD] px-5 py-3 text-[16px] font-bold text-black transition-colors relative z-3 hover:bg-[#8FE0BC]"
      >
        {buttonText}
        <svg
          className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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

      {/* FAQ List */}
      <div className="relative z-3 container mx-auto mt-20 px-4 lg:px-6 w-full md:w-[80%] lg:w-[70%]">
        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.id || index}
              faq={faq}
              isOpen={openId === (faq.id || index)}
              onToggle={() => toggle(faq.id || index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}