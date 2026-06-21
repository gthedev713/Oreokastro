import type { ReactElement, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export const Icon = {
  phone: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M4 5c0 8.3 6.7 15 15 15a2 2 0 0 0 2-2v-2.2a1 1 0 0 0-.8-1l-3.3-.7a1 1 0 0 0-1 .3l-1 1.1a12 12 0 0 1-5-5l1.1-1a1 1 0 0 0 .3-1l-.7-3.3a1 1 0 0 0-1-.8H6a2 2 0 0 0-2 2z" />
    </svg>
  ),
  pin: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
  arrow: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  arrowLeft: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </svg>
  ),
  star: (p: IconProps) => (
    <svg {...base} fill="currentColor" stroke="none" viewBox="0 0 24 24" {...p}>
      <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.9l1.1-6.5L2.6 9.8l6.5-.9z" />
    </svg>
  ),
  clock: (p: IconProps) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
  menu: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  ),
  close: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  ),
  chevron: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  ),
  hanger: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M12 6a2 2 0 1 1 1.4 1.9c-.6.2-1 .8-1 1.4L21 15a1.5 1.5 0 0 1-1 2.6H4a1.5 1.5 0 0 1-1-2.6l8.6-5.7" />
    </svg>
  ),
  sparkle: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
      <path d="M18 16l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z" />
    </svg>
  ),
  dress: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M9 3l3 2 3-2M9 3l-1 4 4 3 4-3-1-4M8 7l-3 6 3 1m8-7l3 6-3 1m-8-1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6" />
    </svg>
  ),
  bag: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M6 8h12l-1 12H7zM9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  ),
  truck: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </svg>
  ),
  gift: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M4 11h16v9H4zM4 8h16v3H4zM12 8v12M12 8c-2.5 0-4-1-4-2.5S9.5 3 12 5c2.5-2 4-.5 4 .5S14.5 8 12 8z" />
    </svg>
  ),
  heart: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M12 20s-7-4.3-7-9.4A4 4 0 0 1 12 7a4 4 0 0 1 7 3.6c0 5.1-7 9.4-7 9.4z" />
    </svg>
  ),
  spark: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M12 3v6M12 15v6M5 12H3M21 12h-2M6 6l1.5 1.5M16.5 16.5L18 18M18 6l-1.5 1.5M7.5 16.5L6 18" />
      <circle cx="12" cy="12" r="2.4" />
    </svg>
  ),
  crown: (p: IconProps) => (
    <svg {...base} {...p}>
      <path d="M4 8l3 4 5-6 5 6 3-4-1.5 11h-13z" />
    </svg>
  ),
  quote: (p: IconProps) => (
    <svg fill="currentColor" stroke="none" viewBox="0 0 24 24" {...p}>
      <path d="M10 7H6a3 3 0 0 0-3 3v7h7v-7H6c0-1.1.9-2 2-2h2zm11 0h-4a3 3 0 0 0-3 3v7h7v-7h-4c0-1.1.9-2 2-2h2z" />
    </svg>
  ),
};

export const iconMap: Record<string, (p: IconProps) => ReactElement> = {
  hanger: Icon.hanger,
  sparkle: Icon.sparkle,
  dress: Icon.dress,
  bag: Icon.bag,
  truck: Icon.truck,
  gift: Icon.gift,
  star: Icon.star,
  heart: Icon.heart,
  spark: Icon.spark,
  crown: Icon.crown,
};
