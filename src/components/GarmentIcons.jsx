import { useId } from 'react'

// Soft "claymorphism" matte 3D-style category tiles, drawn entirely in SVG.

function Tile({ children, className = 'w-20 h-20 md:w-24 md:h-24' }) {
  const id = useId().replace(/:/g, '')
  return (
    <svg viewBox="0 0 96 96" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`t${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FDFAF5" />
          <stop offset="1" stopColor="#ECE5D7" />
        </linearGradient>
        <filter id={`f${id}`} x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#1A2F33" floodOpacity="0.14" />
        </filter>
      </defs>
      <rect x="6" y="6" width="84" height="84" rx="26" fill={`url(#t${id})`} />
      <g filter={`url(#f${id})`}>{children}</g>
    </svg>
  )
}

export function ClayShirt() {
  return (
    <Tile>
      <path
        d="M48 22 L37 26 L27 32 L15 50 Q14 53 17 55 L27 61 L31 55 L31 72 Q48 82 65 72 L65 55 L69 61 L79 55 Q82 53 81 50 L69 32 L59 26 Z"
        fill="#E2D3B4"
        strokeLinejoin="round"
      />
      <path d="M42 25 L48 33 L54 25 L50 22 L48 26 L46 22 Z" fill="#1A1A1A" opacity="0.15" />
      <circle cx="48" cy="46" r="1.8" fill="#1A1A1A" opacity="0.2" />
      <circle cx="48" cy="58" r="1.8" fill="#1A1A1A" opacity="0.2" />
      <ellipse cx="36" cy="36" rx="11" ry="6" fill="#fff" opacity="0.18" transform="rotate(-24 36 36)" />
    </Tile>
  )
}

export function ClayTee() {
  return (
    <Tile>
      <path
        d="M48 25 C43 25 38 27 34 30 L25 36 L15 53 Q14 56 17 58 L26 63 L30 57 L30 71 Q48 80 66 71 L66 57 L70 63 L79 58 Q82 56 81 53 L71 36 L62 30 C58 27 53 25 48 25 Z"
        fill="#3C3C36"
        strokeLinejoin="round"
      />
      <path d="M40 27 Q48 35 56 27" stroke="#fff" strokeWidth="3.5" opacity="0.25" fill="none" strokeLinecap="round" />
      <ellipse cx="36" cy="38" rx="11" ry="6" fill="#fff" opacity="0.14" transform="rotate(-24 36 38)" />
    </Tile>
  )
}

export function ClayTrousers() {
  return (
    <Tile>
      <path
        d="M31 24 H65 L69 40 L67 76 H55 L50 46 L48 44 L46 46 L41 76 H29 L27 40 Z"
        fill="#2E4046"
        strokeLinejoin="round"
      />
      <path d="M31 22 H65 V30 H31 Z" fill="#fff" opacity="0.14" rx="2" />
      <path d="M31 22 H65 V28 H31 Z" fill="#fff" opacity="0.12" />
      <path d="M39 34 V70 M57 34 V70" stroke="#fff" strokeWidth="1.5" opacity="0.12" />
      <ellipse cx="36" cy="30" rx="9" ry="5" fill="#fff" opacity="0.14" transform="rotate(-24 36 30)" />
    </Tile>
  )
}

export function ClayBelt() {
  return (
    <Tile>
      <path d="M50 74 C 32 74 18 66 15 54" stroke="#9C6B3F" strokeWidth="11" strokeLinecap="round" fill="none" />
      <circle cx="50" cy="50" r="24" fill="#9C6B3F" />
      <circle cx="50" cy="50" r="11" fill="#7A4E2B" />
      <rect x="43" y="20" width="14" height="12" rx="3.5" fill="none" stroke="#C5A059" strokeWidth="3" />
      <path d="M32 38 A 20 20 0 0 1 50 30" stroke="#fff" strokeWidth="3" opacity="0.22" fill="none" strokeLinecap="round" />
    </Tile>
  )
}

export const CLAY = {
  shirt: ClayShirt,
  tee: ClayTee,
  trousers: ClayTrousers,
  belt: ClayBelt,
}
