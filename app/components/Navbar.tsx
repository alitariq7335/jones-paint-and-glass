"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

// ─── Types ───────────────────────────────────
type NavSubItem = {
  label: string;
  href: string;
  description?: string;
};

type NavItem =
  | { type: "link"; label: string; href: string }
  | { type: "dropdown"; label: string; items: NavSubItem[] };

type NavData = {
  logo?: { url: string; alt?: string } | null;
  ctaText?: string;
  ctaLink?: string;
  navItems?: NavItem[];
} | null;

// ─── Fallback static data ─────────────────────
const FALLBACK_NAV_ITEMS: NavItem[] = [
  {
    type: "dropdown",
    label: "Media",
    items: [
      { label: "Blog", href: "/media/news" },
      { label: "Videos", href: "/media/gallery" },
    ],
  },
  {
    type: "dropdown",
    label: "Locations",
    items: [
      { label: "American Fork", href: "/locations/american-fork" },
      { label: "Cedar City", href: "/locations/cedar-city" },
      { label: "Payson", href: "/locations/payson" },
      { label: "Provo - Glass", href: "/locations/Provo-Glass" },
      { label: "Provo - Paint", href: "/locations/provo-paint" },
      { label: "Roosevelt", href: "/locations/roosevelt" },
      { label: "St. George", href: "/locations/st-george" },
      { label: "Vernal", href: "/locations/Vernal" },
    ],
  },
  {
    type: "dropdown",
    label: "Paint",
    items: [
      { label: "Exterior", href: "/paint/exterior" },
      { label: "Interior", href: "/paint/interior" },
      { label: "Auto Paint", href: "/paint/auto-paint" },
      { label: "Garage Floor Coatings", href: "/paint/garage-floor-coatings" },
      { label: "Specialty Finishes", href: "/paint/specialty-finishes" },
    ],
  },
  {
    type: "dropdown",
    label: "Windows & Glass",
    items: [
      { label: "Windows", href: "/windows-&-glass/windows" },
      { label: "Shower", href: "/windows-&-glass/shower" },
      { label: "Mirrors", href: "/windows-&-glass/mirrors" },
      { label: "Auto Glass", href: "/windows-&-glass/auto-glass" },
      { label: "Custom/Decorative", href: "/windows-&-glass/Custom-Decorative" },
      { label: "Commercial/Business", href: "/windows-&-glass/commercial-business" },
    ],
  },
  {
    type: "dropdown",
    label: "Doors",
    items: [
      { label: "Residential", href: "/doors/residential" },
      { label: "Commercial", href: "/doors/commercial" },
    ],
  },
  { type: "link", label: "Garage Doors", href: "/garage-doors" },
  {
    type: "dropdown",
    label: "About",
    items: [
      { label: "FAQs", href: "/about/faqs" },
      { label: "Contact", href: "/about/contact" },
      { label: "Careers", href: " " },
    ],
  },
];

// ─── Hook ─────────────────────────────────────
function useDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const close = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen((prev) => !prev), []);

  useEffect(() => {
    const onMouse = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) close();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("mousedown", onMouse);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onMouse);
      document.removeEventListener("keydown", onKey);
    };
  }, [close]);

  return { open, toggle, close, ref };
}

// ─── NavLink ──────────────────────────────────
function NavLink({ label, href, onClick, className = "" }: {
  label: string; href: string; onClick?: () => void; className?: string;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block py-2 px-3 font-bold text-heading hover:text-fg-brand transition-colors duration-150 ${className}`}
    >
      {label}
    </Link>
  );
}

// ─── DropdownMenu ─────────────────────────────
function DropdownMenu({ label, items }: { label: string; items: NavSubItem[] }) {
  const { open, toggle, close, ref } = useDropdown();

  return (
    <div ref={ref} className="relative">
      <button
        onClick={toggle}
        aria-expanded={open}
        aria-haspopup="true"
        className="flex items-center gap-1 py-2 px-3 font-bold text-heading hover:text-fg-brand transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
      >
        {label}
        <svg
          className={`w-4 h-4 mt-0.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <ul
          role="menu" aria-label={label}
          className="absolute top-full left-0 mt-2 z-30 min-w-[220px] bg-neutral-primary-medium border border-default-medium rounded-base shadow-xl p-1.5"
        >
          {items.map((item) => (
            <li key={item.href} role="none">
              <Link
                href={item.href} role="menuitem" onClick={close}
                className="flex flex-col w-full px-3 py-2.5 rounded hover:bg-neutral-tertiary-medium group transition-colors duration-150"
              >
                <span className="text-sm font-medium text-heading group-hover:text-fg-brand transition-colors">
                  {item.label}
                </span>
                {item.description && (
                  <span className="text-xs text-body mt-0.5">{item.description}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ─── MobileMenu ───────────────────────────────
function MobileMenu({ items, ctaText, ctaLink, onClose }: {
  items: NavItem[]; ctaText: string; ctaLink: string; onClose: () => void;
}) {
  const [openLabel, setOpenLabel] = useState<string | null>(null);
  const toggleAccordion = (label: string) =>
    setOpenLabel((prev) => (prev === label ? null : label));

  return (
    <div className="md:hidden border-t border-default bg-neutral-primary px-4 py-3 space-y-0.5">
      {items.map((item) =>
        item.type === "link" ? (
          <NavLink
            key={item.href} label={item.label} href={item.href} onClick={onClose}
            className="text-sm rounded hover:bg-neutral-secondary-soft hover:text-fg-brand"
          />
        ) : (
          <div key={item.label}>
            <button
              onClick={() => toggleAccordion(item.label)}
              aria-expanded={openLabel === item.label}
              className="flex items-center justify-between w-full py-2.5 px-3 text-sm font-medium text-heading rounded hover:bg-neutral-secondary-soft transition-colors"
            >
              {item.label}
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${openLabel === item.label ? "rotate-180" : ""}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
              </svg>
            </button>

            {openLabel === item.label && (
              <div className="ml-3 mt-0.5 mb-1 border-l-2 border-brand/30 pl-3 space-y-0.5">
                {item.items.map((sub) => (
                  <Link
                    key={sub.href} href={sub.href} onClick={onClose}
                    className="flex flex-col py-2 px-3 rounded hover:bg-neutral-secondary-soft transition-colors group"
                  >
                    <span className="text-sm font-medium text-heading group-hover:text-fg-brand transition-colors">
                      {sub.label}
                    </span>
                    {sub.description && (
                      <span className="text-xs text-body mt-0.5">{sub.description}</span>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>
        )
      )}

      <div className="pt-3 pb-1">
        <Link href={ctaLink}>
          <button className="w-full text-white bg-brand hover:bg-brand-strong font-medium rounded-base text-sm px-4 py-2.5 transition-colors">
            {ctaText}
          </button>
        </Link>
      </div>
    </div>
  );
}

// ─── Navbar (main export) ─────────────────────
export default function Navbar({ navData }: { navData: NavData }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = (navData?.navItems as NavItem[]) ?? FALLBACK_NAV_ITEMS;
  const ctaText = navData?.ctaText ?? "Get a Quote";
  const ctaLink = navData?.ctaLink ?? "/contact";
  const logoUrl = navData?.logo?.url ?? "/images/logo.png";
  const logoAlt = navData?.logo?.alt ?? "Company Logo";

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="bg-neutral-primary fixed w-full z-20 top-0 inset-s-0 border-b border-default"
    >
      <div className="max-w-7xl flex items-center justify-between mx-auto px-4 py-3">


        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-1 font-medium" role="menubar">
          {/* Logo */}
          <Link href="/" aria-label="Go to homepage">
            <img src={logoUrl} className="h-24 -mb-12  mr-12" alt={logoAlt} />
          </Link>
          {navItems.map((item) => (
            <li key={item.label} role="none">
              {item.type === "link" ? (
                <NavLink label={item.label} href={item.href} />
              ) : (
                <DropdownMenu label={item.label} items={item.items} />
              )}
            </li>
          ))}
        </ul>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <Link href={ctaLink}>
            <button className="hidden md:block text-white bg-[#0052C6] hover:bg-brand-strong font-medium rounded-base text-sm px-4 py-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand">
              {ctaText}
            </button>
          </Link>
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="md:hidden p-2 text-body rounded-base hover:bg-neutral-secondary-soft hover:text-heading transition-colors focus:outline-none"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" d="M5 7h14M5 12h14M5 17h14" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div id="mobile-menu">
          <MobileMenu
            items={navItems}
            ctaText={ctaText}
            ctaLink={ctaLink}
            onClose={() => setMobileOpen(false)}
          />
        </div>
      )}
    </nav>
  );
}